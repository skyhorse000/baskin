$(document).ready(function(){
	
	

	$(".gnb_menu").hover(function(){
		$(".gnb_sub").stop().animate({height:257},500);
		$(".gnb_bg").stop().animate({height:257},500).css({"border-bottom":"1px solid #693337","margin":"1px","padding-top":"1px"});
	},function(){
		$(".gnb_sub").stop().animate({height:0},500);
		$(".gnb_bg").stop().animate({height:0},500).css({"margin":"0px","padding-top":"0px"});
	});

	/*
	$(".wrap").click(function(){
		
		$(".modal_praise").fadeIn().animate({margin:70},200);
		return false;
	});
	*/
	$(".box_close").click(function(){
		$(".modal_praise").fadeOut().animate({margin:0},200);
		return false;
	})
	
	var img_box = $(".list_con li").eq(1).find(".img_box img").attr("src")
	
	
	$(".list_con li").click(function(){
		var list_sub = $(this).index();
		var list_tit_sp = $(this).find(".praise h6 span").text();
		var list_tit_st = $(this).find(".praise h6 strong").text();
		var img_box = $(this).find(".img_box img").attr("src");
		var list_tit = list_tit_st.split("을")
		var list_p_tit0 = $(this).find(".content_box p").eq(0).text();
		var list_p_tit1 = $(this).find(".content_box p").eq(1).text();
		var list_p_tit2 = $(this).find(".content_box p").eq(2).text();

		$(".modal_praise").fadeIn().animate({margin:70},200);
		
		$(".modal_praise").find(".box_header h3 span").text(list_tit_sp);
		$(".modal_praise").find(".box_header h3 strong").text(list_tit[0]);
		$(".modal_praise").find(".box_body h4").text(list_tit_st);
		$(".modal_praise").find(".img_box img").attr("src",img_box);
		$(".modal_praise").find(".content p").eq(0).text(list_p_tit0);
		$(".modal_praise").find(".content p").eq(1).text(list_p_tit1);
		$(".modal_praise").find(".content p").eq(2).text(list_p_tit2);
		return false;
	});

	


	$(".familysite button").click(function(){
		$(".familysite ul").slideToggle();
		

	});

	
});