$(function() {
	$("#add-post").click(showAddPost);
	$("#cancel-post-button").click(removeAddPost);
	$("#save-post-button").click(savePosts);

	getPosts();
	
	function savePosts() {
		var content =$("#create-post-popup textarea").val();
		$.ajax({
			url: "/save-post",
			method:"post",
			type:"json",
			data: {
				content: content
			},
			error: function() {
				alert("ajax error");
			},
			success: function(){
				getPosts();
			}
		});
	}

	function showAddPost() {
		$("#create-post-popup").addClass("show-add-popup");
		$("main").addClass("main-add-popup");
	}
	function removeAddPost() {
		$("#create-post-popup").removeClass("show-add-popup");
		$("main").removeClass("main-add-popup");		
	}
	
	function getPosts() {
	$.ajax({
		url: "/get-posts",
		method: "get",
		type:"json",
		data: {
		
		},
		error: function(){
			alert("ajax error");
		},
		success: function(data){
			console.log(data);
		}
		});
	}
	
	
});