$(document).ready(function(){



	 $(".na").click(function(){

		$('html, body').animate({
        	scrollTop: $("#toa").offset().top
    		}, 1000);
		
	 });



	$(".ns").click(function(){
		$('html, body').animate({
        	scrollTop: $("#tos").offset().top
    		}, 1000);
		
	});

	$(".nf").click(function(){
		$('html, body').animate({
        	scrollTop: $("#tof").offset().top
    		}, 1000);
		
	});

	$(".nc").click(function(){
		$('html, body').animate({
        	scrollTop: $("#toc").offset().top
    		}, 1000);
		
	});	

	$("#name").click(function(){
		$("*").animate({ scrollTop: 0 }, 'slow');
		$("*").scrollTop(0);
		
	});	



});

