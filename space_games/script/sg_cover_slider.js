
$(document).ready(function(){
	'use strict';
	
	var imageCount = 0;
	var imageNum = $(".cover_image").length;
	
	changeImage(imageCount, 0, true);
	
	$("#prev-image").click(function(){
		
		var num = imageCount;
		
		if(imageCount === 0){
			num = imageNum - 1;
		}else{
			num -= 1;
		}
		
		changeImage(imageCount, num, false);
		imageCount = num;
		
	});
	
	$("#succ-image").click(function(){
		
		var num = imageCount;
		
		if(imageCount === (imageNum - 1)){
			num = 0;
		}else{
			num += 1;
		}
		
		changeImage(imageCount, num, false);
		
	});
	
	$(".cover_selector_dot").click(function(){
		
		var string = $(this).attr('id');
		var num = Number(string[15]);
		
		if(num !== imageCount){
			
			changeImage(imageCount, num, false);
			
		}
		
	});
	
	function changeImage(prevCount, succCount, firstTime){
		
		var prevImage = $(".cover_image").eq(prevCount);
		var prevSelector = $(".cover_selector_dot").eq(prevCount);
		
		if(!firstTime){
			
			var succImage = $(".cover_image").eq(succCount);
			var succSelector = $(".cover_selector_dot").eq(succCount); 
			
			prevImage.css("display", "none");
			prevSelector.removeClass("cover_selector_dot_active");
			
			succImage.css("display", "block");
			succSelector.addClass("cover_selector_dot_active");
			
			imageCount = succCount;
			
		}else{
			
			prevImage.css("display", "block");
			prevSelector.addClass("cover_selector_dot_active");
			
		}
		
	}
		
});
