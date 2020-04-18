/*** Wraping the entire inside of an IIFE ***/
(function(window){

/*** byeSpeaker Object ***/
 var byeSpeaker = {}

 /*****/
var speakWord = "Good Bye";

/*** Attaching the speak method to the byeSpeaker object */
 byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
 
/*** Exposing the helloSpeaker object to the global scope ***/
window.byeSpeaker = byeSpeaker
})(window);