function getUid(){
	let uid;
	
	$.getJSON({url: "../Uid", async: false, success: function(result){ 
		uid = result; 
	}});
	
	return uid;
}

$(document).ready(function() {
	let uid = getUid();
	
	if(uid != null){
		$("#logInOutButton").empty().html('Welcome back! <form action="LogoutUser" method="post"><button type="submit" name="logout">Logout</button></form>');
		$("#cmnts").empty().html("<div class='comment-form'><form id='comment-form' action='AddComment'  method='POST'><input type='hidden' name='rid' value='1'/><textarea id='message' name='message' placeholder='Type your comment in this box, then press the green button when done!'></textarea><button type='submit' name='commentSubmit'>Comment</button></form></div>");
	}else{
		$("#logInOutButton").empty().html('<div class="logIn"> <form class="logIn" action="LoginUser" method="post"> User name <input type="text" name="mailuid" placeholder="Enter username here"> Password <input type="password" name="pwd" placeholder="Enter password here"><input class="login-button" type="submit" value="Login" name="loginSubmit"></form></div>');
		$("#cmnts").empty();
	}
	
	$(document).on("click", "#login", function(){	// 
		$.ajax({url: "../LoginUser?mailuid=" + $("#mailuid").val() + "&pwd=" + $("#pwd").val(), success: function(result){
			
			$("#logInOutButton").empty().html('Welcome back! <form id="comment-form" action="LogoutUser" method="post"><button type="submit" name="logout">Logout</button></form>');
			
			$("#cmnts").empty().html("<div class='comment-form'><form action='AddComment'  method='POST'><input type='hidden' name='rid' value='1'/><textarea id='message' name='message' placeholder='Type your comment in this box, then press the green button when done!'></textarea><button type='submit' name='commentSubmit'>Comment</button></form></div>");
			
			showComments();			
		}});
	});
	
	$(document).on("click", "#logout-button", function(e){
		$.ajax({url: "../LogoutUser", success: function(result){
			
			$("#logInOutButton").empty().html('<div class="logIn"> <form class="logIn" action="LoginUser" method="post"> User name <input type="text" name="mailuid" placeholder="Enter username here"> Password <input type="password" name="pwd" placeholder="Enter password here"><input class="login-button" type="submit" value="Login" name="loginSubmit"></form></div>');
			
			$("#cmnts").empty();
			
			showComments();
		}});
		e.preventDefault();
	});
});