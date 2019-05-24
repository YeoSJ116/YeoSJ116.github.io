(function($){
	$(document).ready(function(){
		if(getBrowserType() == "MSIE")
			$('.browserGuider').removeClass("not-show");

	$.fn.extend({
	  getBrowserType: function() { //실질적으로 프로젝트 표시 유무를 판단하는 함수
	    var browser = "Unknown";
		if(navigator.appName.charAt(0) == "N"){ //Netscape
			if(navigator.userAgent.indexOf("Chrome") != -1)
				browser = "Chrome";
			else if(navigator.userAgent.indexOf("Friefox") != -1)
				browser = "Friefox";
			else if(navigator.userAgent.indexOf("Safari") != -1)
				browser = "Safari";
			else if(navigator.userAgent.indexOf("Opera") != -1)
				browser = "Opera";
			else if(navigator.userAgent.indexOf("Trident") != -1)
				browser = "MSIE"; // IE11 above (Trident)
		}
		else if(navigator.appName.charAt(0) == "M")
			browser = "MSIE";
		else if(navigator.appName.charAt(0) == "O")
			browser = "Opera";
		console.log("Your browser is ", browser); 
		return browser;
	    }});
	});
})(jQuery)