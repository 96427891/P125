
function setup() {
    video = createCapture(VIDEO);
    video.position(500, 80)
    video.size(500, 750);
    canvas = createCanvas(400, 400);
    canvas.position(1000,250);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses);
}
function draw() {
    background("grey");
    textSize(30);
    fill("black");
    text("Font Manipulator", 750, 130);
}
function modelLoaded() {
    console.log("PoseNet Loaded!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        LwX = results[0].pose.leftWrist.x;
        RwX = results[0].pose.rightWrist.x;
        difference = floor(LwX - Rwx);
        textSize(difference);
    }
}