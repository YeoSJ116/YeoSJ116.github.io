(function($){
	$(document).ready(function(){
		alert("run1");
		if(getBrowserType() == "MSIE")
			$('.browserGuider').removeClass("not-show");
		alert("run");
	});

	$.fn.extend({
	  getBrowserType: function() { //실질적으로 프로젝트 표시 유무를 판단하는 함수
	    var browser = "Unknown";
		var appName = navigator.userAgent.toLowerCase();
		if(navigator.appName.charAt(0) == "n"){ //Netscape
			if(navigator.userAgent.indexOf("chrome") != -1)
				browser = "Chrome";
			else if(navigator.userAgent.indexOf("friefox") != -1)
				browser = "Friefox";
			else if(navigator.userAgent.indexOf("safari") != -1)
				browser = "Safari";
			else if(navigator.userAgent.indexOf("opera") != -1)
				browser = "Opera";
			else if(navigator.userAgent.indexOf("trident") != -1)
				browser = "MSIE"; // IE11 above (Trident)
		}
		else if(navigator.appName.charAt(0) == "m")
			browser = "MSIE";
		else if(navigator.appName.charAt(0) == "o")
			browser = "Opera";
		console.log("Your browser is ", browser); 
		return browser;
	  }
	});
})(jQuery);