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


// 限制字数
function linkNumber(obj,num){
  for (var i = obj.length - 1; i >= 0; i--) {
    // obj[i]
    var newText = obj[i].innerHTML.substr(0,num) + '...';
    obj[i].innerHTML = newText;
    // console.log(newText)
  }
}