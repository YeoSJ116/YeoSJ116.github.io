(function($){
	$(document).ready(function(){
		if($.browser.chrome) {
			alert(1);
		} else if ($.browser.mozilla) {
			alert(2);
		} else if ($.browser.msie) {
			alert(3);
		}

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

		if(browser == "MSIE")
			$('.browserGuider').removeClass("not-show");
	});
})(jQuery);