$(document).ready(function() {

//cominciamo ad assegnare 2 var ai bottoni in fondo alla navbar;

 var bottoneUno = $("button.enter");
 var bottoneDue = $("button.download");

 bottoneUno.mouseenter(function() {

   bottoneUno.css("background-color", "grey");
 });

 bottoneUno.mouseleave(function() {
   bottoneUno.css({"background-color": "lightgrey",
                   "cursor": "pointer",
 });
 });

 bottoneDue.mouseenter(function() {

   bottoneDue.css("background-color", "lightgrey");
 });

 bottoneDue.mouseleave(function() {
   bottoneDue.css({"background-color": "black",
                   "cursor": "pointer",
 });
 });

 $("a").mouseenter(function() {
   $(this).css("color", "black")
 });

 $("a").mouseleave(function() {
   $(this).css("color", "grey")
 });

 

});
