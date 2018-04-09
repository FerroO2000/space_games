
$(document).ready(function(){
	'use strict';
	
	var isSmartphone = false;
	var subMenuIsOpen = false;
	
	$(".header_icon").click(function(e){
		
		if(subMenuIsOpen){
			
			$(".header_submenu").removeClass("submenu_is-open");
			$(".header_menu").removeClass("menu_is-open");
			subMenuIsOpen = !subMenuIsOpen;
			
		}else{
			$(".header_menu").toggleClass("menu_is-open");
		}		
		
		if(!isSmartphone){
			isSmartphone = !isSmartphone;
		}
		
		e.preventDefault();
					
	});
	
	$(".header_menu_item:eq(1)").click(function(e){
		
		if(isSmartphone){
			
			$(".header_menu").removeClass("menu_is-open");
			$("#back-arrow").removeClass("header_submenu_menu_back");
			$("#back-arrow").addClass("header_submenu_menu_item");
			
		}
		
		$(".header_submenu").toggleClass("submenu_is-open");
		$(".header_submenu_menu").toggleClass("fade-in_animation");
		
		if(isSmartphone){
			subMenuIsOpen = true;
		}
		
		e.preventDefault();
					
	});
	
	$("#back-arrow").click(function(e){
		
		$(".header_submenu").removeClass("submenu_is-open");
		$(".header_menu").addClass("menu_is-open");
		e.preventDefault();
		
	});
	
});
