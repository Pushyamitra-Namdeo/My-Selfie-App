var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function  start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult= function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= content;
    if(content=="take my selfie"){
        speak();

    }
   

}

function speak(){
    Webcam.attach(camera);
    var synth= window.speechSynthesis;
    var speech= "Taking your selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speech);

    synth.speak(utterThis); 
    setTimeout(function(){
     take_snapshot()
    },5000);
}
Webcam.set({
width: 360,
height: 250,
image_format: 'jpeg',
jpeg_quality: 90
});

var camera= document.getElementById("camera");
 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>'
     });
     save();
 }

 function save(){
     link= document.getElementById("link");
     image= document.getElementById("selfie_image").src;
     link.href= image;
     link.click();
 }