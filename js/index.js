
//入口函数
window.onload = function () {

    //第一屏需求1
    //var baidu = $(".current .baidu");
    //setTimeout(function () {
    //    titleShow(baidu,"李佳琪 的个人简历");
    //},1500);
    //第一屏
    //鼠标进入result 切换图片路径 input-result article

}


//封装标题 字闪出
function titleShow(ele,str) {
    //$(".titleShow").show();
    //var str = "摄取自然之美";
    //2.切割成一个数组。并定义一个新的字符串，为“”，设置一个索引值。
    var arr = str.split("");
    var newStr = "";
    var num = 0;
    var timer;
    //3.设置一个定时器，判断字符串或者数组的长度。
    clearInterval(timer);
    timer = setInterval(function () {
        if(arr[num] != undefined){
            //4.如果符合标准就把元素添加到字符串中，并把索引值自增。
            newStr += arr[num];
            num++;
            ele.find(".titleShow").val(newStr);
        }else{
            //隐藏插入条光标
            //$(".titleShow").hide();
            clearInterval(timer);
        }
    },200);
}

function changSrc() {
    document.querySelector(".first .article").onmouseover = function () {
        document.querySelector(".first .article img").src = "img/man-quliangen.png";
    }
}