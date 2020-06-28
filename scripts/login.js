$(document).ready(function(){
	

		$(".gnb_menu").hover(function(){
		$(".gnb_sub").stop().animate({height:257},500);
		$(".gnb_bg").stop().animate({height:257},500).css({"border-bottom":"1px solid #693337","margin":"1px","padding-top":"1px"});
	},function(){
		$(".gnb_sub").stop().animate({height:0},500);
		$(".gnb_bg").stop().animate({height:0},500).css({"margin":"0px","padding-top":"0px"});
	});
/*
	//아이디
	$("#loginid").focus(function(){	
		$(".fm_box1").find("label").hide();
		$(this).css("background","#efefef");
	});
	$("#loginid").blur(function(){	
		$(".fm_box1").find("label").show();
		$(this).css("background","#efefef url(images/login/ico_id.png) no-repeat 15px 50%");
	});

	$("#loginpw").focus(function(){	
		$(".fm_box2").find("label").hide();
		$(this).css("background","#efefef");
	});
	$("#loginpw").blur(function(){
		$(".fm_box2").find("label").show();
		$(this).css("background","#efefef url(images/login/ico_pw.png) no-repeat 15px 50%");
	});
*/


	$("#loginid").change(function(){
		
		if ($("#loginid").val().length > 0)
		{
			$(".fm_box1").find("label").hide();
			$(this).css("background","#efefef");
		}
		else
		{	
			$(".fm_box1").find("label").show();
			$(this).css("background","#efefef url(images/login/ico_id.png) no-repeat 15px 50%");
			
		}

	});
	$("#loginpw").change(function(){
		if ($("#loginpw").val().length > 0)
		{
			$(".fm_box2").find("label").hide();
			$(this).css("background","#efefef");
		}
		else
		{	
			$(".fm_box2").find("label").show();
			$(this).css("background","#efefef url(images/login/ico_pw.png) no-repeat 15px 50%");
			
		}
	});
	/*
	$(".wrap_login fieldset button").submit(function(){
		//필수사항 체크 : id, pw, repw
			//id : id값이 없으면 
			if ($("#loginid").val().length == 0)
			{
				alert("아이디는 필수사항입니다.");
				return false;
			}
			
			if ($("#loginpw").val().length == 0)
			{
				alert("비밀번호는 필수사항입니다.");
				return false;
				
			}
		
	});


	*/


	
	$(".familysite button").click(function(){
		$(".familysite ul").slideToggle();
		

	});
	});
