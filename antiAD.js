var res = "";
var isMatched = false;
var local = window.location.host;
var arr = local.split(".");
var target = "qq.us.kg";
for (var i = 0;i < arr.length;i++){
    res = arr[arr.length-i-1] + res;
    if (res == target){
        isMatched = true;
        break;
    }
    res = "." + res;
}
if (isMatched){
    var i = setInterval(function(){
        document.querySelector("body > cloudflare-app").remove();
        clearInterval(i);
    },100);
}
