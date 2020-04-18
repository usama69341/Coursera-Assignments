/*** Wraping the entire inside of an IIFE ***/
(function(window){

/*** helloSpeaker Object ***/
var helloSpeaker = {}

/*****/
var speakWord = "Hello";

/*** Attaching the speak method to the helloSpeaker object */
 helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

/*** Exposing the helloSpeaker object to the global scope ***/
window.helloSpeaker = helloSpeaker ;
})(window);
