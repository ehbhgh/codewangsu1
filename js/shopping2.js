$(function(){
    $(".webnav").bind("mouseover",function(){
        $(".webnav>.extendList1").show();
        $(this).css("backgroundColor","#fff");
        $(this).css({"border-top":"1px solid #ddd","border-right":"1px solid #ddd","border-left":"1px solid #ddd","border-bottom":"#fff"});
        /* $(this).children().css("background-color","white"); */
        /* console.log($(this).children()); */
        
    })
    $(".webnav").bind("mouseout",function(){
        $(".webnav>.extendList1").css("display","none");
        $(this).css("backgroundColor","#f5f5f5");
        $(this).css({"border-bottom":"#eee","border-top":"none","border-right":"none","border-left":"none"});
    })

    $(".shangjia").bind("mouseover",function(){
        $(".shangjia>.extendList1").show();
        $(this).css("backgroundColor","#fff");
        $(this).css({"border-top":"1px solid #ddd","border-right":"1px solid #ddd","border-left":"1px solid #ddd","border-bottom":"#fff"});
        /* $(this).children().css("background-color","white"); */
        /* console.log($(this).children()); */
        
    })
    $(".shangjia").bind("mouseout",function(){
        $(".shangjia>.extendList1").css("display","none");
        $(this).css("backgroundColor","#f5f5f5");
        $(this).css({"border-bottom":"#eee","border-top":"none","border-right":"none","border-left":"none"});
    })

    $(".order").bind("mouseover",function(){
        $(".order>.extendList1").show();
        $(this).css("backgroundColor","#fff");
        $(this).css({"border-top":"1px solid #ddd","border-right":"1px solid #ddd","border-left":"1px solid #ddd","border-bottom":"#fff"});
        /* $(this).children().css("background-color","white"); */
        /* console.log($(this).children()); */
        
    })
    $(".order").bind("mouseout",function(){
        $(".order>.extendList1").css("display","none");
        $(this).css("backgroundColor","#f5f5f5");
        $(this).css({"border-bottom":"#eee","border-top":"none","border-right":"none","border-left":"none"});
    })

    $(".yigou").bind("mouseover",function(){
        $(".yigou>.extendList1").show();
        $(this).css("backgroundColor","#fff");
        $(this).css({"border-top":"1px solid #ddd","border-right":"1px solid #ddd","border-left":"1px solid #ddd","border-bottom":"#fff"});
        $(".yigou>.extendList1 .ul1").css({"border-top":"1px solid #fff","border-right":"1px solid #fff","border-left":"1px solid #ddd","border-bottom":"#ddd"});
        $(".yigou>.extendList1 .ul2").css({"border-top":"1px solid #fff","border-right":"1px solid #ddd","border-left":"1px solid #fff","border-bottom":"#ddd"});
        /* $(this).children().css("background-color","white"); */
        /* console.log($(this).children()); */
        
    })
    $(".yigou").bind("mouseout",function(){
        $(".yigou>.extendList1").css("display","none");
        $(this).css("backgroundColor","#f5f5f5");
        $(this).css({"border-bottom":"#eee","border-top":"none","border-right":"none","border-left":"none"});
    
    
    })


    $(".previewPic>img").mouseover(function(){
        $(this).css("border","2px solid #f60")
        console.log($(".previewPic>img").index(this));
        var $obj = $(".previewPic>img").index(this)+1;
        console.log('../images/earphone'+$obj+'.jpg');
     
        $("#showPic").attr('src','../images/earphone'+$obj+'.jpg');
        $("#showBigpic").attr('src','../images/earphone'+$obj+'.jpg');
        $(".clothSort>img").attr('src','../images/earphone'+$obj+'.webp');

    }).mouseleave(function(){
        $(this).css("border","none");
    })

    var count=0;
    $(".sizes>div").click(function(){
        $(this).css("background-color","#eee").siblings().css("background-color","")
         
        
        count++;
            
        
    })
    
    $(".fa-plus").click(function(){
        var $num = parseInt($(".span2").html());
        var $result = $num +1;
        $(".span2").html($result);
        console.log($result);
    })
    $(".fa-minus").click(function(){
        var $num = parseInt($(".span2").html());
        var $result = $num -1;
        if($result<1){
            $(".span2").val(1);
            $(".sizes>div").css("background-color","");
            count = 0;
            $(".alerts").css("display","block");
            $(".container").text("已经不能再减了！")
            $(".shadow").css("display","block");
            
        }else{
            var $num = parseInt($(".span2").html());
            var $result = $num -1;
            $(".span2").html($result);
        }
        
    })
    $(".alerts").mouseleave(function(){
        $(".container").text("")
        $(".alerts").css("display","none");
        $(".shadow").css("display","none");
    })
    $(".over").click(function(){
        $(".container").text("")
        $(".alerts").css("display","none");
        $(".shadow").css("display","none");
    })
    /* console.log($(".sizes>div").css("background-color")); */
    
    $(".buyRight").click(function(){
        /* if($(".sizes>div").attr("background-color")!="none"){

        } */
        console.log(count)
        var $num = parseInt($(".span2").html());
        var $result = $num -1;
        if(count>=1){
            $(".alerts").css("display","block");
            $(".container").text("请您支付"+(($result+1)*1329)+"元！")
            $(".shadow").css("display","block"); 
        }else{
            $(".alerts").css("display","block");
            $(".container").text("请选择尺码")
            $(".shadow").css("display","block"); 
        }
        
    })

    $(".addCart").click(function(){
        /* if($(".sizes>div").attr("background-color")!="none"){

        } */
        console.log(count)
        var $num = parseInt($(".span2").html());
        var $result = $num -1;
        if(count>=1){
            $(".alerts").css("display","block");
            $(".container").text("已加入购物车！")
            $(".shadow").css("display","block"); 
        }else{
            $(".alerts").css("display","block");
            $(".container").text("请先选择颜色分类")
            $(".shadow").css("display","block"); 
        }
        
    })

    $(".clothSort>img").click(function(){
        $(".alerts").css("display","block");
        $(".container").text("抱歉只有此款了！")
        $(".shadow").css("display","block"); 
    })
    var times = 0;
    $(".storage").click(function(){
        $(".storage>a").text("收藏宝贝(1012人气)");
        times++;
        if(times>1){
            $(".alerts").css("display","block");
            $(".container").text("您已经收藏过了")
            $(".shadow").css("display","block"); 
        }
    }).mouseover(function(){
        $(".storage>a").css({"cursor":"pointer","color":"#f60"});
    }).mouseleave(function(){
        $(".storage>a").css({"cursor":"pointer","color":"#999"});
    })


})

/* js写放大镜 */
    var boxObj = my$("box");
    var viewObj = my$("view");
    var smallBox = boxObj.children[0];
    var bigBox = my$("box2");
    var smallImg = smallBox.children[0];
    var smallMask = smallBox.children[1];
    var bigImg = bigBox.children[0];

    boxObj.onmouseenter = function () {
        smallMask.style.display = "block";
        bigBox.style.display = "block";
    };
    boxObj.onmouseleave = function () {
        smallMask.style.display = "none";
        bigBox.style.display = "none";
    };

    boxObj.onmousemove = function (e) {
        var maskX = getPage(e).pageX - viewObj.offsetLeft - this.offsetLeft ;
        var maskY = getPage(e).pageY - this.offsetTop  - viewObj.offsetTop;

        /* console.log(this.offsetLeft+viewObj.offsetLeft);//100

        console.log(smallBox.offsetLeft);//0 */
        /* console.log( "this.offsetLeft-->"+this.offsetLeft);
        console.log("maskX-->"+maskX);
        console.log("this.offsetTop-->"+this.offsetTop);
        console.log("viewObj.clientLeft-->"+viewObj.offsetLeft);
        
        console.log("xxxxxxxx"); */

        maskX = maskX - smallMask.offsetWidth / 2 ;
        maskY = maskY - smallMask.offsetHeight / 2 ;

        //左上角不会超出
        maskX = (maskX < 0) ? 0 : maskX;
        maskY = (maskY < 0) ? 0 : maskY;

        //其他角不会超过box的范围
        maskX = (boxObj.clientWidth - smallMask.offsetWidth) > maskX ? maskX : (boxObj.clientWidth - smallMask.offsetWidth);
        maskY = (boxObj.clientHeight - smallMask.offsetHeight) > maskY ? maskY : (boxObj.clientHeight - smallMask.offsetHeight);

        //以上范围不会超出的时候再确定位置
        smallMask.style.left = maskX + "px";
        smallMask.style.top = maskY + "px";

        //用比例在右边显示大图片的范围
        //maskX在可移动范围的比例是maskX/(boxObj.clientWidth-smallMask.offsetWidth)
        var xRate = maskX/(boxObj.clientWidth-smallMask.offsetWidth);
        //maskY在可移动范围的比例是maskY/(boxObj.clientHeight-smallMask.offsetHeight)
        var yRate = maskY/(boxObj.clientHeight-smallMask.offsetHeight);

        //大图片的活动宽度
        var bigX = bigBox.clientWidth - bigImg.offsetWidth;
        var bigY = bigBox.clientHeight - bigImg.offsetHeight;


        //比例确定了就乘相应的宽高
        var x = xRate * bigX;
        var y = yRate * bigY;


        //大图片显示区域
        bigImg.style.left = x +"px";
        bigImg.style.top = y +"px";

    }


