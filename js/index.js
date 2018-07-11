// 轮播
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    speed:300,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  });

// index导航
$('.index_nav_name').on('touchend',function(){
  $(this).addClass('active');
  $(this).parent().siblings().children('.index_nav_name').removeClass('active');
});
(function(){
  linkNumber($('.main_news_tips'),30);
})();
// 限制字数
function linkNumber(obj,num){
  for (var i = obj.length - 1; i >= 0; i--) {
    // obj[i]
    var newText = obj[i].innerHTML.substr(0,num) + '...';
    obj[i].innerHTML = newText;
    // console.log(newText)
  }
}
// 头部点击菜单按钮
var clickMenuIcon = false;
$('#header .head_box .head_menu_icon').on('touchend', function(){
  $('#header .head_box .head_loadicon').toggle();
  clickMenuIcon = !clickMenuIcon;
  // console.log(clickMenuIcon)
  if(clickMenuIcon){
    $(this).css({
      'width': '0.15rem',
      'height': '0.14rem',
      'background': 'url(./src/images/logo/home_menu_delete_icon.png) center/0.09rem 0.09rem no-repeat'
    });
    $('#header .head_box .head_logo > a').css({
      'background': 'url(./src/images/logo/logo.png) center/0.2rem 0.2rem no-repeat'
    });
    // 显示下拉菜单
    $('#head_nav').slideDown("slow");
  }else{
    $(this).css({
      'width': '0.15rem',
      'height': '0.14rem',
      'background':'url(./src/images/logo/home_menu_icon.png) center/0.15rem 0.14rem no-repeat'
    });
    $('#header .head_box .head_logo > a').css({
      'background': 'url(./src/images/logo/home_LOGO_1.png) center/0.32rem 0.32rem no-repeat'
    });
    // 下拉菜单消失
    $('#head_nav').hide();
  } 
});
