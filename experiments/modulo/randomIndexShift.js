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

var timer = 0;

function draw() {
    if (playing) {
        background(bg);
        timer += 1;
        var playerY = window.innerHeight - 60;
        var playerX = window.innerWidth/2;
        boxes.forEach(animateAll);
        ellipse(playerX, playerY, 20, 20);
        fill(255);
        text("Frame " + timer, 10, 10);
    } else {
        background(color(100, 100, 100, 3));
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
        this.index += random(0, 0.05);
        // fill(color('#2EAFAC'));
        fill(this.color);
        // print(color);
        // Why do I have to use a y coordinate of 400 or greater???? y = 0
        // seems to cut it short, but I don't quite understand why b/c 0 + height (800) should be enought to cover it?

        rect(topLeftX, 400, width, window.screen.height);
        // print("what the: " + topLeftX + ", 0, " + width + ", " + window.screen.height);
    };
}
