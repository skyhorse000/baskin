$(document).ready(function(){

		$(".gnb_menu").hover(function(){
		$(".gnb_sub").stop().animate({height:257},500);
		$(".gnb_bg").stop().animate({height:257},500).css({"border-bottom":"1px solid #693337","margin":"1px","padding-top":"1px"});
	},function(){
		$(".gnb_sub").stop().animate({height:0},500);
		$(".gnb_bg").stop().animate({height:0},500).css({"margin":"0px","padding-top":"0px"});
	});


	$(window).scroll(function(){
		var widTop = $(this).scrollTop();
		var section2 = $(".img4").offset().top;
		var section3 = $(".section3").offset().top;
		var section4 = $(".section4").offset().top;

	
		if (widTop > section2 )
		{
			$(".img2").stop().animate({top:1200},600,function(){
				$(".img1").fadeIn();
			});
			$(".snb_list2").find("a").addClass("active_p").parent().siblings().find("a").removeClass("active_p");
			$(".snb_list2").find("a").after().css("background-image","url(images/flavor/nav_02_on.png)");
			$(".snb_list2").find("a").addClass("on").parent().siblings().find("a").removeClass("on")
			/*
			$(".snb_list2").find("a").addClass("on").animate({width:147},400).after().css("background-image","url(images/flavor/nav_02_on.png)").addClass("on").parent().siblings().find("a").removeClass("on").animate({width:43},400);
			*/
			
		}

		if (widTop < section2 )
		{
			$(".img2").stop().animate({top:300},600,function(){
				$(".img1").fadeOut(300);
			});
			$(".snb_list1").find("a").addClass("active_p").parent().siblings().find("a").removeClass("active_p")//.animate({width:147},400);
			$(".snb_list1").find("a").after().css("background-image","url(images/flavor/nav_01_on.png)");
			$(".snb_list1").find("a").addClass("on").parent().siblings().find("a").removeClass("on")
			/*
			$(".snb_list1").find("a").addClass("on").animate({width:147},400).after().css("background-image","url(images/flavor/nav_01_on.png)").addClass("on").parent().siblings().find("a").removeClass("on").animate({width:43},400);
			*/
		}

		if ( widTop > section3)
		{	
			$(".snb_list3").find("a").addClass("active_p").parent().siblings().find("a").removeClass("active_p")//.animate({width:147},400);
			$(".snb_list3").find("a").after().css("background-image","url(images/flavor/nav_03_on.png)");
			$(".snb_list3").find("a").addClass("on").parent().siblings().find("a").removeClass("on")
		}

		if ( widTop > section4)
		{	
			$(".snb_list4").find("a").addClass("active_p").parent().siblings().find("a").removeClass("active_p")//.animate({width:147},400);
			$(".snb_list4").find("a").after().css("background-image","url(images/flavor/nav_04_on.png)");
			$(".snb_list4").find("a").addClass("on").parent().siblings().find("a").removeClass("on")
		}
		
		
		$(".btn_slide a").click(function(e){
		e.preventDefault();
		$(this).addClass("active").siblings().removeClass();
		var evt_slide_index = $(this).index();

		$(".swipe_wrap").animate({left:"-"+evt_slide_index+"00%"},300);
		return false;
		});

		
		});
		

	
		// 마우스 오버	
		$(".snb li").hover(function(){
			var list_in = $(this).index();
			$(this).find("a").stop().animate({width:147},400,function(){
				$(this).css("textalign","left");
			});
			$(this).find("a").after().css("background-image","url(images/flavor/nav_0"+(list_in+1)+"_on.png)");
			$(this).find("span").stop().css("width","43");
			
		},function(){
			$(this).find("a").animate({width:43},400,function(){
				$(this).find("img").css("float","left");
			});
		});



	

	
		
		/*
		var win_h = $(window).height();

		$(".section").each(function(index){
			$(this).attr("data-index",win_h * index);
		});

		$(".section").on("mousewheel",function(e){
			var sectionPos = parseInt($(this).height("data-index"));

			if (e.originalEvent.wheelDelta >= 0)
			{
				$("html,body").stop().animate({scrollTop:sectionPos - win_h});
				return false;
			}
			else if (e.originalEvent.wheelDelta < 0)
			{
				$("html,body").stop().animate({scrollTop:sectionPos + win_h});
				return false;
			}
		});
		*/
		/*

		//메뉴이동
		
		var menuH = $(".snb").height()/2;
		var winH = $(window).height()/2;

	

		$(window).scroll(function(){
		var winTop = $(this).scrollTop();
		$(".snb").stop().animate({top:winTop+winH-menuH},800)
		});
*/

	

		
		$(".snb li").click(function(e){
			e.preventDefault();
			$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
			var liIndex = $(this).index();
			$("html,body").stop().animate({scrollTop:liIndex*sectionH},800);
			
		});

	//퀵메뉴 움직임
	var menu = $(".snb ul");
	var menuH = menu.height()/2;
	var winH = $(window).height()/2;
	//alert(winH);
	menu.css("top",winH-menuH);
	var sectionH = $(".section").height();


	//menu 위치
	$(window).scroll(function(){
		var winTop = $(this).scrollTop();
		menu.stop().animate({top:winTop+winH-menuH},300);


	});
	
	
	//키위 움직임

	var fukiwi = 0;
	setInterval(function(){
		
		$(".img4").animate({top:650},500)	
		fukiwi++;
		if (fukiwi <= 1)
		{			
			fukiwi = 0;
		}
		$(".img4").animate({top:660},500);		
	},100)



		
	$(".familysite button").click(function(){
		$(".familysite ul").slideToggle();
		

	});
});