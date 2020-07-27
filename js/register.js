
var exitObj = document.getElementsByClassName("exit");
var agreObj = document.getElementsByClassName("agreement");
/* var agreFoot = agreObj[0].getElementsByClassName("agreement-foot");
var agreFootagre = agreFoot[0].getElementsByClassName("agreement-foot-agree"); */
var btnObj = document.getElementsByClassName("btn2");
var regisObj1 = document.getElementsByClassName("fa-building-o");


/* 点×就跳转到苏宁首页 */
exitObj[0].onclick = function () {
    location.href = '../index.html';
}

/* 点击同意就消失这个模块 */
btnObj[0].onclick = function () {
    /* console.log("xxxxxxxxxxx"); */
    /* document.getElementsByClassName("shadow")[0].style.opacity = "0.5"; */
    document.getElementsByClassName("shadow")[0].style.display = "none";
    agreObj[0].style.display = "none";
}
regisObj1[0].onmouseover = function () {
    this.style.cursor = "pointer";
}
/* 点击企业用户注册跳转到企业用户注册页面 */
regisObj1[0].onclick = function () {
    location.href = 'https://reg.suning.com/company.do';
}
document.getElementById("phone").onblur = function () {
    var reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
    if (reg.test(this.value)) {
        document.getElementsByClassName("extend1")[0].innerHTML = "输入正确"
        document.getElementsByClassName("extend1")[0].style.color = "#999";
    } else {
        document.getElementsByClassName("extend1")[0].innerHTML = "输入格式不正确，请重新输入!"
        document.getElementsByClassName("extend1")[0].style.color = "red";
    }
}
function secDown() {
    //设置一个初始值，随着需求而定
    var time = 10;
    //利用定时器进行倒计时的计算
    var timer = setInterval(function () {
        //时间是倒计时
        time--;
        //操作按钮 - 每隔一秒钟减去1
        document.getElementsByClassName("clickGet")[0].innerText = "输入验证码("+time+")";
        /* document.getElementsByClassName("clickGet")[0].setAttribute("disabled","disabled"); */
        
        //当判断时间为0的时候，停止
        if (time < 1) {
            //停止
            clearInterval(timer);
            document.getElementsByClassName("clickGet")[0].innerText = "点击获取验证码"
            /* document.getElementsByClassName("clickGet")[0].disabled = true; */
            document.getElementsByClassName("clickGet")[0].classList.remove("notclick");
        }

    }, 1000);
}

document.getElementsByClassName("clickGet")[0].onclick = function () {
    var reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/;

    if(document.getElementsByClassName("clickGet")[0].className!="notclick"){
        if (reg.test(document.getElementById("phone").value)) {
            secDown();
            document.getElementsByClassName("clickGet")[0].classList.add("notclick");
            
            document.getElementsByClassName("extend1")[1].innerHTML = "请输入收到的四位数验证码";
            document.getElementsByClassName("extend1")[1].style.color = "#999";
        } else {
            document.getElementsByClassName("extend1")[0].innerHTML = "输入格式不正确，请重新输入!"
            document.getElementsByClassName("extend1")[0].style.color = "red";
        }
    }

    if (reg.test(document.getElementById("phone").value)) {
        secDown();
        
        
        document.getElementsByClassName("extend1")[1].innerHTML = "请输入收到的四位数验证码";
        document.getElementsByClassName("extend1")[1].style.color = "#999";
    } else {
        document.getElementsByClassName("extend1")[0].innerHTML = "输入格式不正确，请重新输入!"
        document.getElementsByClassName("extend1")[0].style.color = "red";
    }
}

document.getElementById("code").onblur = function () {
    var reg2 = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
    var reg = /^\d{4}$/;

    if (reg2.test(document.getElementById("phone").value)) {        /* 此时是输入手机号码正确 */
        if (reg.test(this.value)) {                                 /* 验证码正确 */
            document.getElementsByClassName("extend1")[1].innerHTML = "输入正确"
            document.getElementsByClassName("extend1")[1].style.color = "#999";
        } else {                                                    /* 验证码错误 */
            document.getElementsByClassName("extend1")[1].innerHTML = "输入格式不正确，请重新输入4位数字!"
            document.getElementsByClassName("extend1")[1].style.color = "red";
        }
    } else if (document.getElementById("phone").value == 0) {       /* 还没有输入手机号码 */
        document.getElementsByClassName("extend1")[0].innerHTML = "请先输入手机号码获取验证码!"
        document.getElementsByClassName("extend1")[0].style.color = "red";
    } else {
        document.getElementsByClassName("extend1")[0].innerHTML = "输入格式不正确，请重新输入!"
        document.getElementsByClassName("extend1")[0].style.color = "red";
    }
}

document.getElementById("passwords").onblur = function () {

    /* 先把class清空 */
    if (document.getElementById("strength").getElementsByTagName("span")[0].style.display == "block") {
        for (var i = 0; i < document.getElementById("strength").getElementsByTagName("div").length; i++) {
            document.getElementById("strength").getElementsByTagName("span")[0].style.display = "none";
            document.getElementById("strength").getElementsByTagName("div")[i].style.display = "none";
        }
    }



    if (this.value.length >= 6) {
        var lvl = getLvl(this.value);
        if (lvl == 1) {
            document.getElementsByClassName("wrong")[0].style.display = "none";
            document.getElementById("strength").getElementsByTagName("span")[0].style.display = "block";
            document.getElementById("strength").getElementsByTagName("div")[0].style.display = "block";

        } else if (lvl == 2) {
            document.getElementsByClassName("wrong")[0].style.display = "none";
            console.log("xxxasdasdasqwexxxxxxx");
            document.getElementById("strength").getElementsByTagName("span")[0].style.display = "block";
            document.getElementById("strength").getElementsByTagName("div")[0].style.display = "block";
            document.getElementById("strength").getElementsByTagName("div")[1].style.display = "block";
        } else if (lvl == 3) {
            document.getElementsByClassName("wrong")[0].style.display = "none";
            console.log("xxxxxxxasd2qwef342345234xxx");
            document.getElementById("strength").getElementsByTagName("span")[0].style.display = "block";
            document.getElementById("strength").getElementsByTagName("div")[0].style.display = "block";
            document.getElementById("strength").getElementsByTagName("div")[1].style.display = "block";
            document.getElementById("strength").getElementsByTagName("div")[2].style.display = "block";
        }


    } else {
        document.getElementsByClassName("wrong")[0].style.display = "block";
        document.getElementById("strength").getElementsByTagName("span")[0].style.display = "none";
        document.getElementById("strength").getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("strength").getElementsByTagName("div")[1].style.display = "none";
        document.getElementById("strength").getElementsByTagName("div")[2].style.display = "none";

    }

}

//封装一个函数用于:给我一个密码,返回对用的数据
function getLvl(pwd) {
    var lvl = 0;//默认的是0级
    //密码是否是数字,或者是字母,或者是特殊符号
    //判断数字
    if (/[0-9]/.test(pwd)) {
        lvl++;
    }
    //判断密码中有没有字母
    if (/[a-zA-Z]/.test(pwd)) {
        lvl++;
    }
    //判断是否有特殊符号
    if (/[^0-9a-zA-Z_]/.test(pwd)) {
        lvl++;
    }
    return lvl; //最小的值是1,最大的值是3
}

document.getElementsByClassName("btn")[0].onclick = function () {
    var reg4 = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
    var reg5 = /^\d{4}$/;
    var lv = getLvl(document.getElementById("passwords").value);

    if (reg4.test(document.getElementById("phone").value) && reg5.test(document.getElementById("code").value) && lv >= 1) {
        document.getElementsByClassName("shadow")[0].style.display = "block";
        document.getElementsByClassName("shadow")[0].style.opacity = "0.5";
        document.getElementsByClassName("registered")[0].style.display = "block";
        /* document.getElementsByTagName("body")[0].backgroundColor = "black"; */
        // 定时器，倒计时进入登录界面
        Countdown();
    }/* else{
        
    } */
}




function Countdown() {
    //设置一个初始值，随着需求而定
    var time = 5;
    //利用定时器进行倒计时的计算
    var timer = setInterval(function () {
        //时间是倒计时
        time--;
        //操作按钮 - 每隔一秒钟减去1
        document.getElementsByClassName("jump")[0].innerText = "（" + time + "）秒后转到登录界面";

        //当判断时间为0的时候，停止
        if (time < 1) {
            //停止
            clearInterval(timer);
            location.href = 'login.html';
        }

    }, 1000);
}

