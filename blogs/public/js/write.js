$(function(){
	function showDate(){
		//显示日期
		var date=new Date();
		var str=""+date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();	
		$(".artDate").val(str);
		
	}
	showDate();
	$(".subArt").click(function(){		
		var vals = {
			'artTit': $(".artTit").val(),
			'artAuthor': $(".artAuthor").val(), 
			'artDate': $(".artDate").val(),
			// (new Date())
			'artPic': 'images/upload/default.png',
			'artDes': $(".artDes").val(),
			'artCon': $(".artCon").val(),
			'artTags': [],
			'artCount': 0
		};
		
		$.post('write', vals, function(data){
			if(data == 'OK'){
				alert('成功！');
			}
		})
	})
})

