$(document).ready(function(){
	$(window).on('load',function(){
		$("#ellips-loader,#fond").delay(3000).fadeOut("slow");
		$("body").addClass("no");
		setTimeout(function(){
			$("body").removeClass('no');
		},3000);


	})
	 $('nav').singlePageNav();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 600) {
 			$(".navbar").css({
				 'transition':'all 2s',
				 "background-color" : "rgba(7, 78, 18, 1)",
			 });
        } else {
            $(".navbar").css({
				'transition':'all 2s',
				"background-color":"rgba(19, 39, 54, 0.2)",
			});
        }
	});
})


