(function($){
	$(document).ready(function(){
		var selectedTags = []; //사용자가 선택한 태그
		$(document).on('click','.tag-filter',function(){ //상단 태그를 마우스로 클릭 할 때
			console.log("Tags", selectedTags); //선택된 태그 콘솔 표시
			if( $(this).hasClass('all')){ //방금 클릭한 태그가 초기화 버튼인가
				selectedTags = []; //선택된 태그 목록을 모두 비움
				$('span.tag-filter').removeClass("tag-active"); //테그 버튼 모두 비활성화
				$('.project-item').showAll(); //숨겨진 프로젝트 모두 표시
			}else{
				if( $(this).hasClass("tag-active") ){
					selectedTags.removeTag( $(this).data('tag') );
					$(this).removeClass("tag-active");
				}
				else{
					selectedTags.addTag( $(this).data('tag') );
					$(this).addClass("tag-active");
				}
				$('.project-item').filterTags( selectedTags );
			}
		});
	});

	Array.prototype.addTag = function(tag) {
		if(this.indexOf(tag) === -1) this.push(tag);
	}

	Array.prototype.removeTag = function(tag) {
		var tagIndex = this.indexOf(tag);
		this.splice(tagIndex,1);
	}

	$.fn.extend({
	  filterTags: function(tagNames) {
	  	if(tagNames.length == 0) return this.showAll();

	    return this.each(function() {
	    	var itemTagArray = JSON.parse( $(this).attr('data-tags') );
	    	var unfound = $( tagNames ).not( itemTagArray ).get();
	    	console.log("unfound", unfound, itemTagArray.length);
	    	if( unfound.length == tagNames.length ){
		//	if($.inArray(tagName, itemTagArray) === -1){
				$(this).addClass('not-show');
			}else{
				$(this).removeClass('not-show');
			}
	    });
	  },
	  showAll: function(){
	  	return this.each(function() {
			if($(this).hasClass('not-show')){
				$(this).removeClass('not-show');
			}
	    });
	  }
	});
})(jQuery)
