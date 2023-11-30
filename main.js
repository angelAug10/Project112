//https://teachablemachine.withgoogle.com/models/7QM4gFBsM/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('//https://teachablemachine.withgoogle.com/models/e01AGht2r/model.json',modelLoaded);
<script src=" https://unpkg.com/ml5@0.4.3/dist/ml5.min.js "></script>
function modelLoaded(){
console.log('ModelLoaded!');
}
prediction_1="";
prediction_2="";
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="And the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
} 
function gotResult(error,results){
if (error){
    console.log(error);
}else{
console.error(error);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
prediction_1=results[0].label;
prediction_2=results[1].label;