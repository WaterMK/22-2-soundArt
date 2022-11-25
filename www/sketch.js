var wave;
var button;
var playing=false;

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(720, 256);
  wave=new p5.Oscillator();
  wave.setType('sine'); //사인파 모양
  
  wave.freq(440); //소리 높이
  wave.amp(); //소리 볼륨
  // wave.start(); //소리 재생
  button=createButton('play/pause');
  button.mousePressed(toggle);
}

function draw() {

}

function toggle(){
  if(!playing){
    wave.start(); //소리 재생
    wave.amp(0.5, 1);
    playing=true;
  }
  else{
    wave.amp(0,1);
    playing=false;
  }
}