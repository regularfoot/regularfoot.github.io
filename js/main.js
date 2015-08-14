/**
 * Created by aleks on 29.07.15.
 */
requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: '/bower_components/jquery/dist/jquery.min',
        customScroll: '/js/jquery.mCustomScrollbar.concat.min'

    },
});



require(['jquery', 'Utils' ], function() {
   require(['vertical/sliderLink', 'vertical/slide','vertical/control', 'customScroll'], function() {
      require([ 'vertical/vertical'], function() {
          require(['script', 'mainpage', 'assortment', 'contacts']);
      })
   });
});


