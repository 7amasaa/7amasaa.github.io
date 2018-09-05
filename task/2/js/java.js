$(document).ready(function(){
  "use strict";
    $(".chart").animate({
            top: '45%'
        },1500,function(){
		$(".bar").animate({
			left: '0%'
		},1500);
	});

});