/*Version Log*/
console.log('ml5 Version:', ml5.version)

/*Camera Setting*/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90    
})
camera = document.getElementById('camera')
Webcam.attach('camera')
function snapLens(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img = "captured_image" src = "'+data_uri+'"/>'
    })
}
function setUp(){
    setTimeout(function(){
    snapLens()
    }  , 5000)
}

/*Sorter Setting*/
sorter = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8JTRmLOu6/model.json', modelReady)
function modelReady(){
    console.log('The model is ready!')
}
function check(){
    img = document.getElementById('result')
    classifier.classify(img, gotResult)
}
function gotResult(){
    if (error){
        console.error(error)
    } else {
        console.log(results)
        document.getElementById('poseName').innerHTML = results[0].label
        document.getElementById('poseName2').innerHTML = results[1].label
        guess1 = results[0].label
        guess2 = results[1].label
    }
}

/*Speak Results*/
function speak(){
    var synth = window.speechSynthesis
    text1 = 'My first guess is ' + guess1
    text2 = 'My first guess is ' + guess2
    var speech = new SpeechSynthesisUtterance(text1 + text2)
    synth.speak(speech)
}