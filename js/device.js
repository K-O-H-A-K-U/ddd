var mobile_ver= "1.0.1"
var default_ver= "1.0.1"




function getDevice(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
}

var device = getDevice();
if (device=="sp" || device=="tab") {
	document.write('<link rel="stylesheet" type="text/css" href="./css/mobile.css?ver=' + mobile_ver +'">');
}
else{
	document.write('<link rel="stylesheet" type="text/css" href="./css/default.css?ver=' + default_ver +'">');
}