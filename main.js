noseX = 0;
noseY = 0;
leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;
midPointX = 0;
midPointY = 0;

function preload(){
clownNose = loadImage("clownNose.png");
clownHair = loadImage("Clown_Hair.png");
mustAche = loadImage("mustAche.png");
sunGlasses = loadImage("sunGlasses.png");
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet model has been initialized by A.D.I.S.N");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log('nose_x ='+results[0].pose.nose.x);
    console.log('nose_y ='+results[0].pose.nose.y);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    leftEyeX = results[0].pose.leftEye.x;
    rightEyeX = results[0].pose.rightEye.x;
    leftEyeY = results[0].pose.leftEye.y;
    rightEyeY = results[0].pose.rightEye.y;

    midPointX = (leftEyeX + rightEyeX)/2;
    midPointY = (leftEyeY + rightEyeY)/2;
}
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX -17, noseY-20, 40, 40);
    image(clownHair, noseX-85, noseY-150, 175, 100);
    image(mustAche, noseX-45, noseY-20, 100, 100);
    image(sunGlasses, midPointX-50, midPointY-45, 100, 100);
}

function takePicture(){
save("IHANIWID.png");
}