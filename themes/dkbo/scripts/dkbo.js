/**
 * Hexo-dkbo-function
 *
 */

/************** Helper **************/
var init = {
    _reg: {
        youtube: 'https://www.youtube.com/embed/([^"&?/ ]{11})',
    },
    category: {
        name: function(post) {
            if (post.categories.data[0]) {
                return post.categories.data[0].name;
            } else {
                return "未定義";
            }
        },
        path: function(post) {
            if (post.categories.data[0]) {
                return post.categories.data[0].path;
            } else {
                return;
            }
        },
    },
    feature: function(post) {
        var matches;
        if (post.content) {
            matches = post.content.match('https://www.youtube.com/embed/([^"&?/ ]{11})');
        }
        if (post.feature) {
            return "/" + post.feature;
        } else if (matches) {
            return 'https://i.ytimg.com/vi/' + matches[1] + '/0.jpg';
        } else {
            return "/images/feature/dkbo.jpg";
        }
    },
    // filter: function(arg) {
    //   var object = [];
    //   if(arg.type === 'tags') {
    //       return arg;
    //   } else if(arg.type === 'category') {
    //     var o = arg.post.map(function(x){
    //       if(x.categories.data.indexOf(arg.filter) == -1){
    //         object.push(x);
    //       }
    //     });
    //     return JSON.parse(object);
    //   }
    // },
};

// Category
hexo.extend.helper.register('cName', init.category.name);

hexo.extend.helper.register('cPath', init.category.path);

// hexo.extend.helper.register('filter', init.filter);

// feature
hexo.extend.helper.register('feature', init.feature);
