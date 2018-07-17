$('.downMenu li a').on('touchend', function () {
	$(this).css('background', '#b48845');
	$(this).parent().siblings().children().css('background', 'none');
});

// 下拉菜单
$('.downMenuIcon').on('click, touchend', function () {
	$(this).hide();
	$('.downMenuBox').slideToggle();
});

$('.menuClose').on('click, touchend', function () {
	$('.downMenuIcon').show();
	$('.downMenuBox').slideToggle();
});

// 京华动态菜单
$('.kingChina_nav').on('click, touchend', function () {
	$(this).addClass('active').siblings().removeClass('active');
	$(this).children('.triangle_border_down').show();
	$(this).siblings().children('.triangle_border_down').hide();
});

// 立即咨询
$('.consult').on('touchend', function () {
	$('.consultation').show();
});

$('.consultation').on('touchend', function (event) {
	event.stopPropagation();
	$(this).hide();
});
$('.consultation .cancle').on('touchend', function (event) {
	event.stopPropagation();
	$('.consultation').hide();
});