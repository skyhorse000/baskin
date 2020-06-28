$(document).ready(function(){
	$(".gnb_menu").hover(function(){
		$(".gnb_sub").stop().animate({height:257},500);
		$(".gnb_bg").stop().animate({height:257},500).css({"border-bottom":"1px solid #693337","margin":"1px","padding-top":"1px"});
	},function(){
		$(".gnb_sub").stop().animate({height:0},500);
		$(".gnb_bg").stop().animate({height:0},500).css({"margin":"0px","padding-top":"0px"});
	});

	$(".flavor_banner").click(function(){
		$(this).animate({height:0},1000,function(){
			$(this).find("a").css("display","none");
		});
		return false;		
	});

	var currentEl, nextEl;
	currentEl = 0;
	$(".btn_slide a").click(function(e){
		e.preventDefault();
		$(this).addClass("active").siblings().removeClass();
	nextEl = $(this).index();
	if (nextEl > currentEl)
	{
	$(".inner_banner .swipe_wrap li").eq(currentEl).animate({left:"-100%"},600);
	$(".inner_banner .swipe_wrap li").eq(nextEl).css("left","100%").stop().animate({left:"0%"},600);
	}
	else 
	{
	$(".inner_banner .swipe_wrap li").eq(currentEl).animate({left:"100%"},600);
	$(".inner_banner .swipe_wrap li").eq(nextEl).css("left","-100%").stop().animate({left:"0%"},600);
	}
		currentEl = nextEl;
	});
	
	//배너 버튼 
	$(".next").click(function(e){
		e.preventDefault();
		var flavor_list = $(".swipe_wrap li").length;
		$(".swipe_wrap li").eq(currentEl).stop().animate({left:"-100%"},600)

		nextEl = currentEl+1
		if (nextEl > flavor_list-1 )
		{nextEl = 0}
		$(".swipe_wrap li").eq(nextEl).css("left","100%").stop().animate({left:"0"},600);
		currentEl = nextEl;
		$(".inner_banner .btn_slide a").eq(nextEl).addClass("active").siblings().removeClass()
		currentEl = nextEl;
	});

		$(".prev").click(function(e){
		e.preventDefault();
		var flavor_list = $(".swipe_wrap li").length;
		$(".swipe_wrap li").eq(currentEl).stop().animate({left:"100%"},600)

		nextEl = currentEl-1
		if (nextEl < 0)
		{nextEl = flavor_list-1 }
		$(".swipe_wrap li").eq(nextEl).css("left","-100%").stop().animate({left:"0"},600);		
		$(".inner_banner .btn_slide a").eq(nextEl).addClass("active").siblings().removeClass()
		currentEl = nextEl;
	});


	
	$(window).scroll(function(){
		var winTop = $(this).scrollTop();		
		var flavor_cont = $(".flavor_banner").offset().top;
		if ( winTop > flavor_cont )
		{
			$(".flavor_banner").animate({height:0},1000,function(){
			$(this).find("a").css("display","none");		
		});	
		}
	});

	$(".br_event .list_event .btn_slide2 a").click(function(e){
		e.preventDefault();
		$(this).addClass("active").siblings().removeClass();
		var evt_slide_index = $(this).index();

		$(".list_event .swipe").animate({left:"-"+evt_slide_index+"00%"},300);
		return false;

	});

	$(".familysite button").click(function(){
		$(".familysite ul").slideToggle();
		

	});

	var auto;
	function banner(){
		auto = setInterval(function(){$(".next").click();},3000);
	}

	banner();

	$(".inner_banner .swipe_wrap li").mouseover(function(){
		clearInterval(auto);
	});
	$(".inner_banner .swipe_wrap li").mouseleave(function(){
		banner();
	});






});