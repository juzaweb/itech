let mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.disableNotifications();
mix.version();

mix.options({
    postCss: [
        require('postcss-discard-comments') ({removeAll: true})
    ],
    terser: {extractComments: false}
});

const publishPath = 'themes/itech/assets/public';
mix.setPublicPath(publishPath);

mix.combine([
    'themes/itech/assets/js/owlcarousel2.min.js',
    'themes/itech/assets/js/sticky-sidebar.min.js',
    'themes/itech/assets/js/jquery-replacetext.min.js',
    'themes/itech/assets/js/toc.min.js',
], publishPath + '/js/vendor.min.js');

mix.combine(
    [
        'themes/itech/assets/js/main.js',
        'themes/itech/assets/js/load-more.js',
        'themes/itech/assets/js/comments.js',
    ],
    publishPath + '/js/main.min.js'
);

mix.styles(
    ['themes/itech/assets/css/google-fonts.css'],
    publishPath + '/css/google-fonts.min.css'
);

mix.styles(
    [
        'themes/itech/assets/css/main.css',
        'themes/itech/assets/css/custom.css',
    ],
    publishPath + '/css/main.min.css'
);

mix.styles(
    [
        'themes/itech/assets/css/auth.css',
    ],
    publishPath + '/css/auth.min.css'
);
