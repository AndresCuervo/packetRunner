var bg = 250;
var playing = true;
var playPause;

var boxes = [];
var boxCount = 100;


function setup() {
    createCanvas(window.screen.width, window.screen.height);
    background(bg);
    rectMode(CENTER);
    var fillColor = color('#4F4F4F');
    fill(fillColor);
    // stroke(128);
    button = createButton('Play/Pause');
    button.position(width - 100, 20);
    button.mousePressed(function () {playing = !playing;});


    for (i = 0; i <= boxCount; i++) {
        boxes.push(new Box(i));
    }
}

function playPauseFunction() {
    playing = !playing
}

function animateAll(element, index, array) {
    element.animate();
}

var grayBox = new grayBox();
var timer = 0;

function draw() {
    if (playing) {
        background(bg);
        // rect(width/2, height/2, 200, 200, 100, cornerRadius, 100, cornerRadius);
        // if (cornerRadius != 20) {
        //     cornerRadius -= 1;
        // } else {
        //     cornerRadius = 100;
        // }
        // grayBox.animate("leftRightExpand");
        // grayBox.leftRightExpand();
        timer += 1;
        var playerY = window.innerHeight - 60;
        var playerX = window.innerWidth/2;
        boxes.forEach(animateAll);
        ellipse(playerX, playerY, 20, 20);
        fill(255);
        textSize(40);
        text("Frame " + timer, window.innerWidth / 2 - 100, window.innerHeight / 2);
    }
}


function Box(index) {
    var width = window.screen.width / boxCount;
    var topLeftX = width * index;
    // var topLeftX = width * index + random(1, 3);
    this.color = color(( index * 2 ) % 255, 100, 100);
    this.index = index;

    this.animate = function () {
        this.color = boxes[Math.floor( this.index ) % boxes.length].color;
        this.index += 0.005;
        // fill(color('#2EAFAC'));
        fill(this.color);
        // print(color);
        // Why do I have to use a y coordinate of 400 or greater???? y = 0
        // seems to cut it short, but I don't quite understand why b/c 0 + height (800) should be enought to cover it?

        rect(topLeftX, 400, width, window.screen.height);
        // print("what the: " + topLeftX + ", 0, " + width + ", " + window.screen.height);
    };
}
