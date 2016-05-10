enquire.register("screen and (max-width:767px)", {
	match: function () {
		$(".overview li:not(:first-of-type)").hide();
		$(".overview li:first-of-type").click(function () {
			$(this).siblings("li").toggle("slow");
		});
	}
});

enquire.register("screen and (min-width:768px)", {
	match: function () {
		wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
			}
		);
		$('.policy-block').addClass('wow fadeInLeft');
		new WOW().init();
	}
});

$(document).ready(function(){
	$('.summary').matchHeight();
	$('.statements').responsiveTabs({
		startCollapsed: 'accordion'
	});
	$.ReStable({
		rowHeaders: false,
		maxWidth: 1024,
		keepHtml: false
	});
	$(".sortable").DataTable({
		"order": [[0, "desc"]]
	});
	if ($('.portal-body').children('.policy-block').length > 1) {
		$(".policy-block").addClass("multiple");
	}
	$("a#logout").on('click', function(){
		alert("You're about to log out!");
		window.location = "login.htm";
	});
});
