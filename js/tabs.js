$(document).ready(function() {
	$('.portfolio').hide();

	function changeTab() {
		var tabs = $('.tabs');
		var tab1 = $('#tab1-li');
		var tab2 = $('#tab2-li');
		var content = $('.content');
		//Hide/show appropriate tab based on active class
		$(tab1).click(function() {
			$(tabs).removeClass('active');
			$(this).addClass('active');
			$(content).hide();
			$('.resume').show();
		});
		$(tab2).click(function() {
			$(tabs).removeClass('active');
			$(this).addClass('active');
			$(content).hide();
			$('.portfolio').show();
		});

	}

	changeTab();
});

