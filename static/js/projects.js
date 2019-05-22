(function($){
	$(document).ready(function(){
		var selectedTags = []; //사용자가 선택한 태그
		$(document).on('click','.tag-filter',function(){ //상단 태그를 마우스로 클릭 할 때
			if( $(this).hasClass('all')){ //방금 클릭한 태그가 초기화 버튼인가
				selectedTags = []; //선택된 태그 목록을 모두 비움
				$('span.tag-filter').removeClass("tag-active"); //테그 버튼 모두 비활성화
				$('.project-item').showAll(); //숨겨진 프로젝트 모두 표시
			}else{
				if( $(this).hasClass("tag-active") ){ //취소 할려고 누른 경우
					selectedTags.removeTag( $(this).data('tag') ); //배열에서 테그 제거
					$(this).removeClass("tag-active"); //누른 테그 비활성화 하기
				}
				else{ //선택(활성화) 할려고 누른 경우
					selectedTags.addTag( $(this).data('tag') ); //배열에서 테그 추가
					$(this).addClass("tag-active"); //누른 테그 활성화 하기
				}
				$('.project-item').filterTags( selectedTags ); //프로젝트 표시 유무 함수
			}
			console.log("Tags", selectedTags); //선택된 태그 콘솔 표시
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
	  filterTags: function(tagNames) { //실질적으로 프로젝트 표시 유무를 판단하는 함수
	    return this.each(function() {
	    	var unfound = $( tagNames ).not( JSON.parse( $(this).attr('data-tags'))).get(); //프로젝트 테그를 제외한 선택한 테그들
	    	console.log("unfound", unfound, itemTagArray.length);
	    	if( unfound.length > 0 ){ //하나라도 조건 만족 못 할 경우
				$(this).addClass('not-show'); //테그 불일치로 표시 안함
			}else{
				$(this).removeClass('not-show'); //테그 일치로 표시함
			}
	    });
	  }
	});
})(jQuery)
