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

function grayBox() {
    this.width = 50;
    this.height = 50;

    this.animate = function (animation) {
        if (animation != undefined) {
            this.animation;
            // rect(width/2, height/2, 200, 200, 100, cornerRadius, 100, cornerRadius);
        }
    }

    this.radii = [100, 100, 100, 100];

    this.leftRightExpand = function () {
        // rect(width/2, height/2, this.height, this.width, this.radii[0], this.radii[1], this.radii[2], this.radii[3]);
        // if (this.radii[1] != 20 && this.radii[3] != 20) {
        //     this.radii[1] -= 2;
        //     this.radii[3] -= 2;
        //     this.width += 5;
        //     this.height+= 5;
        // } else {
        //     this.radii[1] = 100;
        //     this.radii[3] = 100;
        //     this.width = 50;
        //     this.height= 50;
        // }

        print(this);
        print(timer);
        if (timer >= 0 && timer < 20) {
            this.height += 2;
            this.width += 2;
        } else if (timer >= 20 && timer < 80) {
            var newHeight= this.height - 2;
            var newWidth = this.width - 2;
            if (newWidth > 0 && newHeight > 0) {
                this.width = newWidth;
                this.height = newHeight;
            }
            var newRadii1 = this.radii[1] - 1;
            var newRadii3 = this.radii[3] - 1;
            if (newRadii1 > 0 && newRadii3 > 0) {
                this.radii[1] = newRadii1;
                this.radii[3] = newRadii3;
            }
        } else if (timer >= 80 && timer < 100) {
            this.height += 2;
            this.width += 2;
        } else if (timer >= 100 && timer < 160) {
            this.height += 2;
            this.width += 2;
        } else {
            timer = 0;
            this.width = 50;
            this.height = 50;
            this.radii.fill(100);
        }
        rect(width/2, height/2, this.height, this.width, this.radii[0], this.radii[1], this.radii[2], this.radii[3]);
    }
}
