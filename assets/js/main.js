jQuery(document).ready(function($) {
	$(".owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		margin:30,
		autoplay:true,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
	});
});