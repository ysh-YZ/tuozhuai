// box.onmouseout=function () {
//     console.log("移出");
// }
// box.onmouseover=function () {
//     console.log("移入");
// }
// box.onmousewheel=function () {
//     console.log("滚轮");
// }
// box.onmousedown=function () {
//     console.log("鼠标按下");
// }
// box.onmouseup=function () {
//     console.log("鼠标抬起");
// }
// box.oncontextmenu=function () {
//     console.log("鼠标右击");
// }
// box.onkeydown=function (v) {
//
// }
/*

input.onkeydown=function () {
    console.log("键盘按下");
}
input.onkeypress=function () {
    console.log("press");
}
input.onkeyup=function () {
    console.log("键盘抬起");
}*/
/*
let input=document.querySelector("input");
input.oninput=function () {
    console.log("input");
}
input.onchange=function () {
    console.log("change");
}
input.onfocus=function () {
    console.log("获取焦点");
}
input.onblur=function () {
    console.log("失去焦点");
}*/
let box=document.querySelector(".box");
box.onmousedown=function (event) {
    event=event||window.event;
    let x0=event.clientX;
    let y0=event.clientY;
    let x2=this.offsetLeft;
    let y2=this.offsetTop;
    box.onmousemove=function (event2) {
        event=event2||window.event;
        let x1=event2.clientX;
        let y1=event2.clientY;
        let x=x1-x0 + x2;
        let y=y1-y0 + y2;
        console.log(x, y);
        this.style=`top:${y}px;left:${x}px`;

    }
    box.onmouseup=function () {
        box.onmousemove="";
        box.onmouseup="";
    }
}
