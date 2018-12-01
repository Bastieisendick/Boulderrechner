var griffname;

function Check(Eingabe) {
  var nur_das ="0123456789[]()-+*%/y";
  for (var i = 0; i < Eingabe.length; i++)
   if (nur_das.indexOf(Eingabe.charAt(i))<0 ) return false;
  return true;
 }

 function Ergebnis() {
   var x = 0;
  if (Check(window.document.Rechner_1.Display1.value))
     x = eval(window.document.Rechner_1.Display1.value);
   window.document.Rechner_1.Display1.value = x;
 }
var punktzahl;
var p;
 function rotbi() {
p = 1;
punkteswitcher();
 }
  function weissbi() {
p = 2;
punkteswitcher();
 }
  function gruenbi() {
p = 3;
punkteswitcher();
 }
  function gelbbi() {
p = 4;
punkteswitcher();
 }
  function orangebi() {
p = 5;
punkteswitcher();
 }
   function blaubi() {
p = 6;
punkteswitcher();
 }
  function schwarzbi() {
p = 7;
punkteswitcher();
 }
  function lilabi() {
p = 8;
punkteswitcher();
 }
 
  function Hinzufuegen1(operatoren) {
   window.document.Rechner_1.Display1.value =
   window.document.Rechner_1.Display1.value + operatoren;
 }
function Hinzufuegen3(y) {
   var y = Math.floor((Math.random() * 10) + 10);
   window.document.Rechner_1.Display1.value =
   window.document.Rechner_1.Display1.value + y;
 }
function punkteswitcher(){ 
switch (p) {
  case 1:
    punktzahl = getCookie("griffrotbi");
	if (punktzahl != "") {
	}else{
	punktzahl=2;}
    break;
  case 2:
    punktzahl = getCookie("griffweissbi");
	if (punktzahl != "") {
	}else{
	punktzahl=3;}
    break;
  case 3:
    punktzahl = getCookie("griffgruenbi");
	if (punktzahl != "") {
	}else{
	punktzahl=10;}
    break;
  case 4:
    punktzahl = getCookie("griffgelbbi");
	if (punktzahl != "") {
	}else{
	punktzahl=15;}
    break;
  case 5:
    punktzahl = getCookie("grifforangebi");
	if (punktzahl != "") {
	}else{
	punktzahl=17;}
    break;
  case 6:
    punktzahl = getCookie("griffblaubi");
	if (punktzahl != "") {
	}else{
	punktzahl=25;}
    break;
  case 7:
    punktzahl = getCookie("griffschwarzbi");
	if (punktzahl != "") {
	}else{
	punktzahl=35;}
    break;
  case 8:
    punktzahl = getCookie("grifflilabi");
	if (punktzahl != "") {
	}else{
	punktzahl=50;}
    break;
    
  
}
 
   window.document.Rechner_1.Display1.value =
   window.document.Rechner_1.Display1.value + punktzahl;
 }


<!--Hier startet das Programm für den zweiten Boulderrechner-->


function Check(Eingabe) {
  var nur_das ="0123456789[]()-+*%/";	
  for (var i = 0; i < Eingabe.length; i++)
   if (nur_das.indexOf(Eingabe.charAt(i))<0 ) return false;
  return true;
 }

 function Ergebnis_() {
   var x = 0;
  if (Check(window.document.Rechner_2.Display2.value))
     x = eval(window.document.Rechner_2.Display2.value);
   window.document.Rechner_2.Display2.value = x;
 }

 function Hinzufuegen2(Zeichen) {
   window.document.Rechner_2.Display2.value =
   window.document.Rechner_2.Display2.value + Zeichen;
 }
 
 
 
 
var schieberinhalt;

var w = 0;
 function schieberwert(startwert,mininput,maxinput,griffbezeichner){
	  

	 if(w == 0){
		 griffname =  griffbezeichner;
		 document.getElementById("Schieberegler").innerHTML = '<div class="slidecontainer"><input type="range" min=' +mininput+ ' max= ' +maxinput+ ' value='+startwert+' class="slider" id="myRange"></div><button onClick="schiebercookie()">speichern</button>' ;
	var slider = document.getElementById("myRange");
    var output = document.getElementById("ergebnis"); 
		output.innerHTML = "Ausgew&auml;hlte Punktzahl:" + slider.value; 
    slider.oninput = function() {
		
    output.innerHTML = "Ausgew&auml;hlte Punktzahl:" + this.value;
	schieberinhalt = this.value;

	}
	w = 1;
	
	 }else{
		document.getElementById("Schieberegler").innerHTML = "";
		document.getElementById("ergebnis").innerHTML = "";
      w =  0;
    
	 }
	 
}

function schiebercookie(){
	 setCookie(griffname,schieberinhalt,100 );
	 }
