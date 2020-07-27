$(function(){
    $("#brandList ul li").mouseenter(function(){
        $(this).find("span").slideDown();
    })
    $("#brandList ul li").mouseleave(function(){
        $(this).find("span").slideUp();
    })
    $("#right #shopcar").click(function(){
        window.open("shoppings.html");
    })

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
      /*   $(".yigou>.extendList1 .ul1").css({"border-top":"1px solid #ddd","border-right":"1px solid #fff","border-left":"1px solid #ddd","border-bottom":"#ddd"});
        $(".yigou>.extendList1 .ul2").css({"border-top":"1px solid #ddd","border-right":"1px solid #ddd","border-left":"1px solid #fff","border-bottom":"#ddd"});
 */     $(".yigou>.extendList1 .ul1").css("border","none");
        $(".yigou>.extendList1 .ul2").css("border","none");
        $(".yigou .extendList1 .border").css("boder-top","#ddd");
    })
    $(".yigou").bind("mouseout",function(){
        $(".yigou>.extendList1").css("display","none");
        $(this).css("backgroundColor","#f5f5f5");
        $(this).css({"border-bottom":"#eee","border-top":"none","border-right":"none","border-left":"none"});
    })

    //图标商品筛选功能
    $("#brandList ul li").on("click",function(){
       var str= $(this).find("span").text()
        findPhone(str);
    })
    //价格筛选
    $("#priceRange ul li").on("click",function(){
        var lowPrice=$(this).find("span:first-of-type").text();
        var highPrice=$(this).find("span:last-of-type").text();
        findByPrice(lowPrice,highPrice);
    })

    //文本框搜索
    $("#h_input #btn").on("click",function(){
    
      findPhone($(this).siblings(":text").val());
    })

    $("#h_input #text").on("keypress",function(e){
        if(e.keyCode=="13"){
            $("#h_input #btn").click();
        }
    })

    //购物车收藏功能
    $("#showPhone ul li table tr td:first-of-type").on("click",function(){
        if($(this).find("span:last-of-type").text()=="收藏"){
            $(this).find(".FiveStar").html("★");
            $(this).find("span:last-of-type").text("已收藏");
            $(this).find(".FiveStar").css("color","orangered");
            var numBer=parseInt($("#shopcar span").text())+1;
            $("#shopcar span").text(numBer);
          
        }else{
            $(this).find(".FiveStar").html("☆");
            $(this).find("span:last-of-type").text("收藏");
            $(this).find(".FiveStar").css("color","black");
            var numBer=parseInt($("#shopcar span").text())-1;
            $("#shopcar span").text(numBer);
        }
        
    })
    //关注
    $("#showPhone ul li table tr td:nth-child(2)").on("click",function(){
        if($(this).find("span:last-of-type").text()=="关注"){
            $(this).find(".FiveStar").html("★");
            $(this).find("span:last-of-type").text("已关注");
            $(this).find(".FiveStar").css("color","orangered");
 
          
        }else{
            $(this).find(".FiveStar").html("☆");
            $(this).find("span:last-of-type").text("关注");
            $(this).find(".FiveStar").css("color","black");
        }
        
    })
    //商品详情
    $("#showPhone ul li table tr td:last-of-type").on("click",function(){
        if($(this).find("span:last-of-type").text()=="查看详情"){
            $(this).find(".FiveStar").html("★");
            $(this).find("span:last-of-type").text("查看失败");
            $(this).find(".FiveStar").css("color","orangered");
 
        }else{
            $(this).find(".FiveStar").html("☆");
            $(this).find("span:last-of-type").text("查看详情");
            $(this).find(".FiveStar").css("color","black");
        }
        
    })

    //通过文本内容寻找商品
    var arr=[];
    /* var str="Apple"; */
    function findPhone(str){
        var pObjs=document.getElementById("showPhone").getElementsByTagName("P");
        $("#showPhone ul li").css("display","block");
        if($("#showPhone").offset.top!="675"){
            $("html,body").animate({scrollTop:$("#showPhone").offset().top},800);
            console.log($("#showPhone").offset().top);
        }
        for(var i=0;i<pObjs.length;i++){
            arr[arr.length++]=pObjs[i].innerText;
        }
        for(var j=0;j<arr.length;j++){
            if(arr[j].indexOf(str)!=-1){
               continue;
            }else{
                pObjs[j].parentNode.style.display="none";
            }
        }
        
    }

    //通过价格寻找商品
    var arr2=[];
    function findByPrice(lowPrice,highPrice){
        var pricesObjs=document.getElementsByClassName("price")
        $("#showPhone ul li").css("display","block");
        if($("#showPhone").offset().top!="685"){
            $("html,body").animate({scrollTop:$("#showPhone").offset().top},800);
            console.log($("#showPhone").offset().top);
        }
        for(var i=0;i<pricesObjs.length;i++){
            arr2[arr2.length++]=parseInt(pricesObjs[i].innerText);
        }
        for(var j=0;j<arr2.length;j++){
            if(arr2[j]>lowPrice && arr2[j]<highPrice){
               
                pricesObjs[j].parentNode.parentNode.style.display="block";
               continue;
            }else{
                pricesObjs[j].parentNode.parentNode.style.display="none";
            }
        }
    }
})