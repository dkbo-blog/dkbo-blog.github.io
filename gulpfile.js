var gulp = require('gulp'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  // post css
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer');
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});
var config = require('./gulpconfig');

var paths= config.paths;

// Sass
gulp.task('sass', function() {
  gulp.src([paths.root + paths.sass + '**/**.sass'])
    .pipe(plumber())
    .pipe(sass({
      outputStyle: config.sass.output_style,
      includePaths: [
                './node_modules/susy/sass'
            ]
          })
    .on('error', sass.logError))
      .pipe(gulp.dest(paths.root + paths.sass_output));
});
watch(paths.root + paths.sass + '**/*.sass', function() {
  gulp.start('sass');
});

// postCSS
gulp.task('css', function () {
  var processors = [
    autoprefixer(config.postcss.autoprefixer)
  ];
  watch([paths.root + paths.sass_output + '**/*.css'], function() {
  if (config.postcss.enabled){
      gulp.src([paths.root + paths.sass_output + 'dkbo.css', paths.root + paths.sass_output + '**/**.css'])
        .pipe(plumber())
        .pipe(concat(config.postcss.output_name))
        .pipe(postcss(processors))
        .pipe(gulp.dest(paths.root + paths.public + config.postcss.output_folder));
    } else {
      gulp.src(paths.root + paths.sass_output + '**/**.css')
        .pipe(plumber())
        .pipe(concat(config.postcss.output_name))
        .pipe(gulp.dest(paths.root + paths.public + config.postcss.output_folder));
    }
  });
});
gulp.task('server', function() {
	hexo.init().then(function() {
		return hexo.call('server', {});
	}).catch(function(err) {
		console.log(err);
    });

});

gulp.task('deploy', function() {

	hexo.init().then(function() {
		return hexo.call('deploy', {generate: true});
	}).catch(function(err) {
		console.log(err);
	});

});


gulp.task('default', ['sass', 'css', 'server']);
