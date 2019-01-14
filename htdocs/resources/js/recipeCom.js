
function getUid(){
	let uid;
	
	$.getJSON({url: "../Uid", async: false, success: function(result){ 
		uid = result; 
	}});
	
	return uid;
}

function showComments(){	
	$.getJSON({url: "../GetComsRid?rid="+1, success: function(result){
		let comments = result;
		$("#comments").empty();
		let uid = getUid();
		
			$.each(comments, function (i, comment) {
				if(uid != null && comment.uid == uid){
					$("#comments").append("<div class='comment-box'><p>" + comment.uid + "<br></p><p>" + comment.message + "</p></div><form class='delete-form' name='delete-form' method='POST' action='DeleteComment'><input type='hidden' name='cid' value='" + comment.cid + "'/><button type='submit'>Delete</button></form>");
					
				}else{
					$("#comments").append("<div class='comment-box'><p>" + comment.uid + "<br></p><p>" + comment.message + "</p></div>");
				}
			});
		
	}});
}
// 2del
$(document).ready(function() {			
	function deleteComment(cid){
		let modal = confirm("Delete your comment?!");
		if (modal == true) {
			$.ajax({url: "../DeleteCom?cid="+cid, success: function(result){
				showComments();
			}});
		}
	}

    //2add
	function addComment(rid, message){
		$.ajax({url: "../AddCom?rid="+rid+"&message="+message, success: function(result){
			showComments();
		}});
	}
    
    // 1add
	$(document).on("submit", "#comment-form", function(e){
        let modal = confirm("Add your comment?!");
		if (modal == true) {
		addComment(1, $("#message").val());
		$("#message").val("");
		showComments();
        e.preventDefault();
    }});
	
	// 1del
	$(document).on("submit",'form.delete-form', function(e){
    
			deleteComment($(this).children('[name="cid"]').val());
		    e.preventDefault();
			});
	
	showComments();
});