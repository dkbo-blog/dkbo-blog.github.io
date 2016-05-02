var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  // post css
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer');
var config = require('./gulpconfig');

// Sass
gulp.task('sass', function() {
  gulp.src([config.paths.sass + '**/**.sass'])
    .pipe(plumber())
    .pipe(sass({
      outputStyle: config.sass.output_style,
      includePaths: [
                './node_modules/susy/sass'
            ]
          })
    .on('error', sass.logError))
      .pipe(gulp.dest(config.paths.sass_output));
});
watch([config.paths.sass + '**/*.sass'], function() {
  gulp.start('sass');
});

// postCSS
gulp.task('css', function () {
  var processors = [
    autoprefixer(config.postcss.autoprefixer)
  ];
  watch([config.paths.sass_output + '**/*.css'], function() {
  if (config.postcss.enabled){
      gulp.src([config.paths.sass_output + 'dkbo.css', config.paths.sass_output + '**/**.css'])
        .pipe(plumber())
        .pipe(concat(config.postcss.output_name))
        .pipe(postcss(processors))
        .pipe(gulp.dest(config.paths.public + config.postcss.output_folder));
        console.log(1)
    } else {
      gulp.src(config.paths.sass_output + '**/**.css')
        .pipe(plumber())
        .pipe(concat(config.postcss.output_name))
        .pipe(gulp.dest(config.paths.public + config.postcss.output_folder));
    }
  });
});

// webserver
gulp.task('webserver', function() {
  setTimeout(function(){
    gulp.src(config.paths.public)
      .pipe(webserver({
        livereload: true,
        open: false,
        host: '0.0.0.0',
        port: 10000,
      }));
  }, 1000);
});

gulp.task('default', ['sass', 'css', 'webserver']);
