var bg = 250;
var paused = true;
var debugging = true;
var pauseBegan = false;

var boxes = [];
var boxCount = 100;

var menuCircle;
function setup() {
    createCanvas(window.screen.width, window.screen.height);
    background(bg);
    rectMode(CENTER);
    var fillColor = color('#4F4F4F');
    fill(fillColor);
    // stroke(128);
    button = createButton('Play/Pause');
    button.position(width - 100, 20);
    button.mousePressed(togglePause);


    for (i = 0; i <= boxCount; i++) {
        boxes.push(new Box(i));
    }
    menuCircle = new menuCircle();
}

function togglePause() {
    paused = !paused;
    pauseBegan = false;
    print("Paused! paused has been set to: " + paused + " and pauseBegan has been set to: " + pauseBegan);
}

function pauseOn() {
    paused = true;
    pauseBegan = false;
    print("Paused! paused has been set to: " + paused + " and pauseBegan has been set to: " + pauseBegan);
}

function pauseOff() {
    paused = false;
    pauseBegan = false;
    print("Paused! paused has been set to: " + paused + " and pauseBegan has been set to: " + pauseBegan);
}


function animateAll(element, index, array) {
    element.animate();
}

var timer = 0;

function draw() {
    if (paused) {
        pause();
    } else {
        background(bg);
        timer += 1;
        var playerY = window.innerHeight - 60;
        var playerX = window.innerWidth/2;
        boxes.forEach(animateAll);
        ellipse(playerX, playerY, 20, 20);
        whiteText("Frame " + timer, window.innerWidth / 2 - 100, window.innerHeight / 2);
    }
    menuCircle.animate();
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

// Make a new function that creates a circle (and has a color if debugging)
// whose center is at the bottom right corner and shows the pasue menu if it's
// outside that circle!

function menuCircle() {
    this.radius = 200;

    this.animate = function () {
        if (debugging) {
            fill(color('#2EAFAC'));
            rect(window.innerWidth, window.innerHeight, 50, 50);
        }
        // Detect whether mouse is in this.radius and play o.w. pause lol
        if (pwinMouseX >  window.innerWidth -  50 && pwinMouseY > window.innerHeight - 50) {
            pauseOff();
        } else {
            pause();
            print("mouse less than those things lol");
            print("mouse at x: " + pwinMouseX + "y: " + pwinMouseY);
        }
        // var mouseCircle = {radius: 20, x: pwinMouseX, y: pwinMouseY};
        // var menuCircle = {radius: this.radius, x: 10, y: 5};
        //
        // var dx = mouseCircle.x - menuCircle.x;
        // var dy = mouseCircle.y - menuCircle.y;
        // var distance = Math.sqrt(dx * dx + dy * dy);
        //
        // if (distance < mouseCircle.radius + menuCircle.radius) {
        //     // togglePause;
        //     pause();
        //     print("mouse at x: " + pwinMouseX + "y: " + pwinMouseY);
        // } else {
        //     print("mouse at x: " + pwinMouseX + "y: " + pwinMouseY);
        //     print("I'm not touching youuuu");
        // }
    }
}

function pause() {
    paused = true;
    if (pauseBegan) {
    } else {
        pauseBegan = !pauseBegan;
        background(0, 0, 0, 70);
        whiteText("PAUSED", width/2, height/2);
    }
}

function whiteText(string, x, y) {
    fill(255);
    textSize(40);
    text(string, x, y)
}
