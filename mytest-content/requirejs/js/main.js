require.config({
  paths: {
    a: 'a'
  }
});

require(['a'], function() {
addToCart();
});
//加载路径从main.js开始