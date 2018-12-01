function bgcolorswap(){ 
document.body.style.backgroundColor = hintergrundfarbe;
}

var hintergrundfarbe = "White" ;
var farbebg;
function rotbg(){
farbebgzaehler = 1;	
}
function gruenbg(){
farbebgzaehler = 2;	
}
function blaubg(){
farbebgzaehler = 3;	
}
function graubg(){
farbebgzaehler = 4;	
}

var farbebgzaehler = 0 ;
    
function setCookie(cookiename,cookievalue,exdays) {
      var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*100000000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookiename + "=" + cookievalue + ";"  + expires + ";path=/" ;
}

function getCookie(cookiename) {
    var name = cookiename + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function speicherCookie() {
	
    setCookie("Farbebg", farbebgzaehler,100 );
	farbebg=getCookie("Farbebg");
  if (farbebg == 1){
	  hintergrundfarbe = "Red";
    }
  if (farbebg == 2){
	  hintergrundfarbe = "Lime";
    }
  if (farbebg == 3){
	  hintergrundfarbe = "Blue";
    }
  if (farbebg == 4){
	  hintergrundfarbe = "LightGray";
    }
  bgcolorswap();
	
}
function lad(){
 farbebg = getCookie("Farbebg");

  if (farbebg == 1){
	  hintergrundfarbe = "Red";
	      bgcolorswap();
         
    }
  if (farbebg == 2){
	  hintergrundfarbe = "Lime";
	      bgcolorswap();
          
    }
  if (farbebg == 3){
	  hintergrundfarbe = "Blue";
	      bgcolorswap();
          
    }
  if (farbebg == 4){
	  hintergrundfarbe = "LightGray";
	      bgcolorswap();
        
    }
    
   

}
	