function preLoad(){

}

function setup(){
canvas = createCanvas(640,480);
canvas.position(300,120);
video = createCapture(VIDEO);
video.hide();


}

function draw(){
    image(video,165,123,320,240);
    fill('blue');
    stroke('blue');
    rect(70,34,550,30);

    fill('orange');
    stroke('orange');
    circle(50,50, 50);

    fill('orange');
    stroke('orange');
    circle(600,50, 50);

    fill('blue');
    stroke('blue');
    rect(40,34,30,420);
  
    fill('orange');
    stroke('orange');
    circle(50,50, 50);

    fill('blue');
    stroke('blue');
    rect(50,423,550,30);

     fill('orange');
    stroke('orange');
    circle(60,440, 50);

    fill('blue');
    stroke('blue');
    rect(580,34,30,420);
    
    fill('orange');
    stroke('orange');
    circle(600,50, 50);

    fill('orange');
    stroke('orange');
    circle(600,438, 50);
 
}


function take_snapshot(){
    save('student_name.png');
}