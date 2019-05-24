(function($){
	$(document).ready(function(){
		var browser = "Unknown";
		var userAgent = navigator.userAgent.toLowerCase();
		var appName = navigator.appName.toLowerCase();
		if(appName == "netscape"){ //Netscape
			if(userAgent == "chrome")
				browser = "chrome";
			else if(userAgent == "friefox")
				browser = "friefox";
			else if(userAgent == "safari")
				browser = "safari";
			else if(userAgent == "opera")
				browser = "opera";
			else if(userAgent == "trident")
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