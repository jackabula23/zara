// 導覽列
$(function(){

	// 滑鼠變換及下拉選單

	$('nav li').on({
		mouseenter:function(){
			$(this).css('background-color','#7A125B');
			$(this).children('div').stop().slideDown();
		},
		mouseleave:function(){
			$(this).css('background-color','#D2228A');
			$(this).children('div').stop().slideUp();
		}
		// click:function(){$(this).css('background-color','#AB9F58');}
	});

	// 滑至指定位置
	$("nav a").click(function(event){
		event.preventDefault();//取消事件(置頂)默認值(可省略)
		var bt = $(this).attr("href");//取得(返回)屬性與值
		var pos = $(bt).offset();//抓取相對的座標位置
		$ ("html,body").stop().animate({ scrollTop: pos.top-$('nav').height()},1000);
		  //捲軸抓取元素有些瀏覽器抓html、有些瀏覽器抓body
		  //scrollTop：從捲軸的Top(y軸)開始
		  //pos.top：pos的top(y軸)                                 
	});

	// 置頂按鈕
	$("#gotop").click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$("#gotop").stop().fadeTo('fast',.8);
		}else{
			$('#gotop').stop().fadeOut('fast');
		}
	});

	// fancybox
	 $("figure").fancybox({
	 	groupAttr		: 'rel',
	 	closeBtn		: false,

	 	prevEffect		: 'none',
		nextEffect		: 'none',

	 	openEffect		: 'elastic',
    	closeEffect		: 'elastic',

          helpers: {
              title : {
                  type : 'inside'
              },
              buttons	: {}
          }
      });
	//camera換圖輪播
	$('#camera_wrap_1').camera({
		pagination: false,
		thumbnails: true,
		hover:false,
		loader:'bar',
		time:3000,
		loaderColor:'#FF0000',
		playPause:false,
		navigationHover:false
	});

	//camera換圖輪播
	$('#camera_wrap_2').camera({
		pagination: false,
		hover:false,
		loader:'none',
		time:3000,
		playPause:false,
		navigation:false,
		height:'178%'
	});

});






















