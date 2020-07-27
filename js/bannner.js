
function ceateBnnerArea(areaDom, arr) {
    let imgArea = document.createElement("div")   //创建一个区域，显示图片
    let numberArea = document.createElement("div")   //创建一个区域，显示圆点
    let index = 0//当前显示的是第几张图
    let myInterval = null//自动切换的计时器
    let interval = 2000//间隔时间设置为2秒
    let time = null
    imgInit()
    ridioInit()
    setStatus()
    changeTimer()
    //初始化图片
    function imgInit() {
        imgArea.style.width = "100%";
        imgArea.style.height = "100%";
        imgArea.style.display = "flex";
        imgArea.addEventListener("mouseenter", () => {
            clearInterval(myInterval)
            myInterval = null
        })
        imgArea.addEventListener("mouseleave", () => {
            changeTimer()
        })
        imgArea.style.overflow = "hidden"
        for (let i = 0; i < arr.length; i++) {
            let img = document.createElement("img")
            img.src = arr[i].imgUrl
            img.style.width = "100%";
            img.style.height = "100%";
            imgArea.style.marginLeft = "0"
            imgArea.appendChild(img)
        }
        areaDom.appendChild(imgArea)
    }

    //初始化下标框
    function ridioInit() {
        numberArea.style.textAlign = "center";
        numberArea.style.marginTop = "-160px"
        for (let i = 0; i < arr.length; i++) {
            let ridio = document.createElement("span")
            numberArea.appendChild(ridio)
            ridio.style.display = "inline-block";
            ridio.style.width = "30px";
            ridio.style.height = "30px";
            ridio.style.background = "lightgray";
            ridio.style.borderRadius = "50%";
            ridio.style.margin = "-31px 7px"
            ridio.style.cursor = "pointer"
            ridio.addEventListener("click", () => {
                clearInterval(myInterval)
                myInterval = null
            })
            ridio.addEventListener("click", () => {
                index = i;
                setStatus()
            })
        }
        areaDom.appendChild(numberArea)
        let span = document.querySelectorAll("span")
        for (let i = 0; i < span.length; i++) {
            span[i].innerHTML = i+1
            span[i].style.textAlign = "center"
            span[i].style.fontSize = "20px"
            span[i].style.lineHeight = "30px"
            // span[i].style.color = "white"
        }
   
    }
  
    //设置区域状态
    function setStatus() {
        //1.设置圆点的背景颜色
        for (let i = 0; i < numberArea.children.length; i++) {
            if (i === index) {
                //表示当前要显示的图片
                numberArea.children[i].style.background = "orange"
                numberArea.children[i].style.color = "white"
            }
            else {
                //表示当前没有显示的图片
                numberArea.children[i].style.background = "lightgray"
                numberArea.children[i].style.color = "black"
            }
            
            // i === index ? numberArea.children[i].style.background = "#be926f" :
            //     numberArea.children[i].style.background = "orange"


        }

        // 2.设置图片动画
        // let star = parseInt(imgArea.children[0].style.marginLeft)
        // let end = index * -100
        // let dis = end - star
        // let durtion = 500
        // let speed = dis / durtion
        // if (time) {
        //     clearInterval(time)
        // }
        // time = setInterval(() => {
        //     star += speed * 20
        //     imgArea.children[0].style.marginLeft = star + "%"
        //     if (Math.abs(end - star) < 1) {
        //         imgArea.children[0].style.marginLeft = end + "%"
        //         clearInterval(time)
        //     }
        // }, 20)

        let margeLeft = index * -100
        imgArea.children[0].style.marginLeft = margeLeft + "%"

    }

    //自动切换轮播图
    function changeTimer() {
        if (myInterval) {
            return
        }
        myInterval = setInterval(() => {
            // if (index == arr.length - 1) {
            //     index = 0
            // }
            // else {
            //     index++
            // }
            index === arr.length - 1 ? index = 0 : index++

            setStatus()
        }, interval)

    }

    //点击侧边效果
    const right = document.getElementsByClassName("right")[0]
    console.log(right)
    const left = document.getElementsByClassName("left")[0]
    console.log(left)
    // function click() {
    right.addEventListener("click", () => {
        index++
        console.log(arr.length)
        console.log(index)
        if (index > arr.length - 1) {
            index = 0
            setStatus()
        }
        else {
            setStatus()
        }

    })
    left.addEventListener("click", () => {
        index--
        if (index < 0) {
            index = arr.length - 1
            setStatus()
        }
        else {
            setStatus()
        }

    })

    //鼠标移动到左右箭头时，自动停止轮播
    right.addEventListener("mouseover", () => {
        clearInterval(myInterval)
        myInterval = null
    })

    right.addEventListener("mouseout", () => {
        changeTimer()
    })

    left.addEventListener("mouseover", () => {
        clearInterval(myInterval)
        myInterval = null
    })

    left.addEventListener("mouseout", () => {
        changeTimer()
    })
}

