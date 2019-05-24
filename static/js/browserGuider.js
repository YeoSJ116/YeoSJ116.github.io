(function($){
	$(document).ready(function(){
		var browser = "Unknown";
		var userAgent = navigator.userAgent.toLowerCase();
		var appName = navigator.appName.toLowerCase();
		if(appName == "netscape"){ //Netscape
			if(userAgent.indexOf("edge") != -1)
				browser = "msie";
			else if(userAgent.indexOf("chrome") != -1)
				browser = "chrome";
			else if(userAgent.indexOf("firefox") != -1)
				browser = "firefox";
			else if(userAgent.indexOf("safari") != -1)
				browser = "safari";
			else if(userAgent.indexOf("opera") != -1)
				browser = "opera";
			else if(userAgent.indexOf("trident") != -1)
				browser = "msie"; // IE11 above (Trident)
		}
		else if(appName == "msie")
			browser = "msie";
		else if(appName == "opera")
			browser = "opera";
		console.log("user agent is", userAgent);
		console.log("app name is", appName);
		console.log("Your browser is", browser);

		if(browser == "msie")
			$('.browserGuider').removeClass("not-show");
	});
})(jQuery);