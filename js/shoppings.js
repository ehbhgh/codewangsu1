$(function () {
    var arr = new Array();
    //全选和全不选功能
    $(".btnSum").click(function () {
        if ($(this).get(0).checked) {
            $(":checkbox").prop("checked", true);
            total();
        } else {
            $(":checkbox").prop("checked", false);
            $("#toSumPrice ul li:nth-child(3) #EndsumPrice").text("");
        }
    })
    $(".btn1").click(function () {
        if (!$(this).checked) {
            $(".btnSum").prop("checked", false);
        }
        if ($(":checked").length == $(".btn1").length) {
            $(".btnSum").prop("checked", true);
        }
        total();
    })


    //放大图片功能
    $(".ulli li:nth-child(2) #showIphone img").mouseenter(function () {
        $(this).parent().children().last().css("display", "block");
    }).mouseleave(function () {
        $(this).parent().children().last().css("display", "none");
    })


    //商品删除功能
    $(".ulli li:last-of-type #fenZhuang .delet").on("click", function () {
        var $isCheck = $(this).parent().parent().parent().children().find(".btn1");
        var price = $(this).parent().parent().parent().children("li:nth-child(5)").find("strong").text();
        if ($isCheck.get(0).checked) {
            var sum = parseInt($("#toSumPrice ul li:nth-child(3) #EndsumPrice").text());
            sum -= parseInt(price);
            $("#toSumPrice ul li:nth-child(3) #EndsumPrice").text(sum + ".00");
        }
        if ($(".ulli").length <= 1) {
            var flag = confirm("你确定删除吗？");
            if (flag == true) {
                $(this).parent().parent().parent().remove();
                window.open("../index.html");
            }else{
                total();
            }
        } else {
            $(this).parent().parent().parent().remove();
        }

    })

    //商品数量减
    $(".ulli li:nth-child(4) #chanGe input:first-of-type").on("click", function () {
        var $Mount = $(this).siblings().val();
        var $Price = $(this).parent().parent().prev().find("strong").text();
        var count = parseInt($Mount) - 1;
        $(this).siblings(":text").val(count);
        if ($Mount <= 1) {
            alert("不能再减了！");
            count = 1;
            $(this).siblings(":text").val(count);
        } else {
            $Mount = count;
            var ret = parseInt($Price * count);
            $(this).parent().parent().next().find("strong").text(ret);
            var $isCheck = $(this).parent().parent().parent().children().find(".btn1");
            if ($isCheck.get(0).checked) {
                var sum = parseInt($("#toSumPrice ul li:nth-child(3) #EndsumPrice").text());
                sum -= parseInt($Price);
                $("#toSumPrice ul li:nth-child(3) #EndsumPrice").text(sum + ".00");
            }
        }

    })

    //商品数量加
    $(".ulli li:nth-child(4) #chanGe input:last-of-type").on("click", function () {
        var $Mount = $(this).prev().val();
        var $Price = $(this).parent().parent().prev().find("strong").text();
        var count = parseInt($Mount) + 1;
        $(this).siblings(":text").val(count);
        $Mount = count;
        var $PriceNew = parseInt($Price * count);
        $(this).parent().parent().next().find("strong").text($PriceNew);
        var $isCheck = $(this).parent().parent().parent().children().find(".btn1");
        if ($isCheck.get(0).checked) {
            var sum = parseInt($("#toSumPrice ul li:nth-child(3) #EndsumPrice").text());
            sum += parseInt($Price);
            $("#toSumPrice ul li:nth-child(3) #EndsumPrice").text(sum + ".00");
        }

    })

    //总价变动函数
    function total() {
        var $btnObjs = $(".btn1:checked");
        var sum = 0;
        for (var i = 0; i < $btnObjs.length; i++) {
            if ($btnObjs[i].checked) {
                var $btnPrices = $btnObjs[i].parentNode.nextElementSibling
                    .nextElementSibling.nextElementSibling.nextElementSibling
                    .firstChild.nextElementSibling.innerText;
                sum += parseInt($btnPrices);
            }
        }
        $("#toSumPrice ul li:nth-child(3) #EndsumPrice").text(sum + ".00");
        if ($btnObjs.length < 1) {
            $("#toSumPrice ul li:nth-child(3) #EndsumPrice").text("");
        }
        return sum;
    }

    //商品结算功能
    $("#buyuPhone").click(function () {
        $("#theLast").css("display", "block");
        $(".shadow").css("display", "block");
        $("#buybuy").html("你总共支付"+total()+"元！<br/>");
    })
    $("#theLast span:nth-child(2)").click(function(){
        $("#theLast").css("display", "none");
        $(".shadow").css("display", "none");
        window.open("../index.html")
    })

    //删除选中商品功能
    $("#toSumPrice ul li:nth-child(2) .delet").click(function(){
        var $btnObjs = $(".btn1:checked");
        if($btnObjs.length==0){
            alert("请选中后再进行删除！");
        }
        if($btnObjs.length<=3&&$btnObjs.length>0){
            var flag = confirm("你确定删除吗？");
            if(flag){
                for (var i = 0; i < $btnObjs.length; i++) {
                    if ($btnObjs[i].checked) {
                      $btnObjs[i].parentNode.parentNode.remove();
                    }
                    total()
                }
            }
            if($(".ulli").length<1){
                window.open("../index.html")
            }
        }
    })
})