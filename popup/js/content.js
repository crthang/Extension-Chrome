
function count_like() {
	var number = $(".UFILikeLink._4x9-._4x9_._48-k").not(".UFILinkBright").length;
    return number;
}
function like(){
      $like_btn = $(".UFILikeLink._4x9-._4x9_._48-k").not(".UFILinkBright");
      $like_btn.each(function(index){this.click()});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	if (request.fblike == "getlike"){
		var number_like = count_like();
		sendResponse({solike: number_like});
	}
	if (request.fblike == "like"){
		like();
		sendResponse({solike: 1 });
	}
});