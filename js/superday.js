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
        $(".yigou>.extendList1 .ul1").css({"border-top":"1px solid #fff","border-right":"1px solid #fff","border-left":"1px solid #ddd","border-bottom":"#fff"});
        $(".yigou>.extendList1 .ul2").css({"border-top":"1px solid #fff","border-right":"1px solid #ddd","border-left":"1px solid #fff","border-bottom":"#fff"});
        /* $(this).children().css("background-color","white"); */
        /* console.log($(this).children()); */
        
    })
    $(".yigou").bind("mouseout",function(){
        $(".yigou>.extendList1").css("display","none");
        $(this).css("backgroundColor","#f5f5f5");
        $(this).css({"border-bottom":"#eee","border-top":"none","border-right":"none","border-left":"none"});
    })


    $(".goodSort").bind("mouseover",function(){
        $(".extendList").show()
    })
    $(".goodSort").bind("mouseout",function(){
        $(".extendList").css("display","none");
    })

    
})