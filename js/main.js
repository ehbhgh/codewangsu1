// jquery网页滚动时执行
$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top>=200){
		$("#gotop").fadeIn(600);  // 单位毫秒
	}else{
		$("#gotop").fadeOut(600);
	}
	
})
function gotop(){
	$("html,body").animate({scrollTop:0},600);
}



/* 顶部banner广告 */
// 定时器，setTimeout页面加载完成后只执行一次
setTimeout(function() {
	$("#top_ad").slideDown(1000);
}, 2000);

function closetopad(){
	$("#top_ad").slideUp(600);
}




var minute=0;
var hour=0;
var second=0;
$(document).ready(function(){
	$(".categray-Banner .main .categray .index-list li").mouseover(function(){
		$(".categray-Banner .main .Banner ul .guide").eq($(this).index()).css("display","block").siblings().css("display","none");
	})
	$(".categray-Banner .main .categray .index-list li").mouseout(function(){
		$(".categray-Banner .main .Banner ul .guide").eq($(this).index()).css("display","none");
	})

	$(".main .body .timelimit .tl-top .qiang .content li").mouseover(function(){
		$(this).css("background","red").siblings().css("background","white");
	})
	
	$(".main .body .threeblock .tb-rightblock .tb-rightbody .tb-rightbody-guide ul li").mouseover(function(){
		$(this).css("background","red").siblings().css("background","white");
		$(this).css("color","white").siblings().css("color","black");
	})
	
	
	setInterval(function second1(){
		second++;
		if(second==60){second=0}
//		alert(parseInt($(".main .body .timelimit .tl-top .time span").eq(2).text())+1)
		if(second<10){$(".main .body .timelimit .tl-top .time span").eq(2).text("0"+second);}
		else{$(".main .body .timelimit .tl-top .time span").eq(2).text(second);}
	},1000);
	setInterval(function minute1(){
		minute++;
		if(minute==60){
			minute=0;
		}
		if(minute<10){
			$(".main .body .timelimit .tl-top .time span").eq(1).text("0"+minute);
		}else{
			$(".main .body .timelimit .tl-top .time span").eq(1).text(minute);
		}
	},60000);
	setInterval(function hour1(){
		hour++;
		if(hour<10){
			$(".main .body .timelimit .tl-top .time span").eq(0).text("0"+hour);
		}else{
			$(".main .body .timelimit .tl-top .time span").eq(0).text(hour);
		}
	},3600000);
	$("#choice ul li").mouseover(function(){
		$("#result ul").eq($(this).index()).css("display","block").siblings().css("display","none");
	})
	$(".main .body .threeblock .tb-rightblock .tb-rightbody .tb-rightbody-rightpoint .a-link a").mouseover(function(){
		$("#result ul").eq($(this).index()).css("display","block").siblings().css("display","none");
		$("#choice ul li").eq($(this).index()).css("background","red").siblings().css("background","white");
		$("#choice ul li").eq($(this).index()).css("color","white").siblings().css("color","black");
	})
	$(".main .body .threeblock .tb-leftblock .tb-leftpoint .a-link a").mouseover(function(){
		$("#change-one li").eq($(this).index()).css("display","block").siblings().css("display","none");
	})
	$(".main .body .zhibo .roomone .zb-one .small ul li").mouseover(function(){
		$("#choice-two img").eq($(this).index()).css("z-index","8").css("display","block").siblings().css("z-index","7").css("display","none");
	})
})