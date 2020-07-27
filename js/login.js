document.getElementsByClassName("userLogin")[0].onclick = function(){
    console.log("xxxxxxxx");
    
    document.getElementsByClassName("userDv")[0].style.display = "block";
    document.getElementsByClassName("userLogin")[0].style.borderBottom = "4px solid #f60";
    document.getElementsByClassName("userLogin")[0].style.color = "#f60";
    document.getElementsByClassName("codeLogin")[0].style.borderBottom = "none";
    document.getElementsByClassName("codeLogin")[0].style.color = "black";
    /* var target = this; */
}
document.getElementsByClassName("userLogin")[0].onmouseover = function(){
    document.getElementsByClassName("userLogin")[0].style.color = "#f60";
    /* document.getElementsByClassName("codeLogin")[0].style.color = "black"; */
}
document.getElementsByClassName("userLogin")[0].onmouseout = function(){
    if(document.getElementsByClassName("userDv")[0].style.display == "block"){
        document.getElementsByClassName("userLogin")[0].style.color = "#f60";
        document.getElementsByClassName("codeLogin")[0].style.color = "black";
    }else{
        document.getElementsByClassName("userLogin")[0].style.color = "black";
        document.getElementsByClassName("codeLogin")[0].style.color = "#f60";
    }
}
document.getElementsByClassName("codeLogin")[0].onclick = function(){
    document.getElementsByClassName("userDv")[0].style.display = "none";
    document.getElementsByClassName("userLogin")[0].style.borderBottom = "none";
    document.getElementsByClassName("userLogin")[0].style.color = "black";
    document.getElementsByClassName("codeLogin")[0].style.borderBottom = "4px solid #f60";
    document.getElementsByClassName("codeLogin")[0].style.color = "#f60";
    /* var target = this; */
}
document.getElementsByClassName("codeLogin")[0].onmouseover = function(){
    document.getElementsByClassName("codeLogin")[0].style.color = "#f60";
    /* document.getElementsByClassName("userLogin")[0].style.color = "black"; */
}
document.getElementsByClassName("codeLogin")[0].onmouseout = function(){
    if(document.getElementsByClassName("userDv")[0].style.display == "block"){
        document.getElementsByClassName("userLogin")[0].style.color = "#f60";
        document.getElementsByClassName("codeLogin")[0].style.color = "black";
    }else{
        document.getElementsByClassName("userLogin")[0].style.color = "black";
        document.getElementsByClassName("codeLogin")[0].style.color = "#f60";
    }
}

document.getElementsByClassName("over")[0].onclick = function(){
    /* 整合后填入王苏的官网首页 */
    location.href = '../index.html';
}
