$('.Post_introduction').on('touchend', function (ev) {
	ev.stopPropagation();
	$('.join_post').removeClass('hide');
});

// $('.postLayerBg').on('touchend', function (ev) {
// 	ev.stopPropagation();
// 	$('.join_post').addClass('hide');
// });

$('.closeIcon').on('touchend', function (ev) {
	ev.stopPropagation();
	$('.join_post').addClass('hide');
});