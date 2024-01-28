if (window.location.host == "wyywn.qq.us.kg"){
    var i = setInterval(function(){
        document.querySelector("body > cloudflare-app").remove();
        clearInterval(i);
    },100);
} 
