var nose_x = 0, nose_y = 0;

function preload(){

    mustache_img = loadImage("https://i.postimg.cc/C1zFk5Ff/R-1.png");
}

function setup(){

    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    my_posenet = ml5.poseNet(video,model_loaded);
    my_posenet.on('pose',got_Poses);

}


function draw(){

image(video,0,0,350,350);

image(mustache_img,nose_x-210,nose_y-114,50,60);
}

function model_loaded(){
    console.log("posenet is loaded");
}

function got_Poses(results){

    if( results.length  > 0){

        //console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        

        console.log("Nose X - ", nose_x);
        
        console.log("Nose Y - ", nose_y);

        
    }
    
}

