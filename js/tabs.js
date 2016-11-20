$(document).ready(function() {
	$('.portfolio').hide();
});

$('.tabs').on('click', function(){
	var tabs = $('.tabs');
	$(tabs).removeClass('active');
	$(this).addClass('active');
	$('.content').toggle();
});

$('.intro_btn').on('click', function() {
	$('.container').show();
	$(this).hide();
});
