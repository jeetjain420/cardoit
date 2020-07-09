let number_of_points = 200;
let r;
let factor = 0;
function setup() {
	createCanvas(window.innerWidth/2, window.innerWidth/2);

    r = width / 3;
    translate(width / 2, height / 2);
    noFill();
    stroke(255);
    circle(0,0,r*2);
}

function getAngle(index) {
    return  map(index % number_of_points, 0, number_of_points, 0, TWO_PI);
}

function gradientLine(x1, y1, x2, y2, color1, color2) {
    // linear gradient from start to end of line
    var grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);
  
    this.drawingContext.strokeStyle = grad;
  
    line(x1, y1, x2, y2);
}

function draw() {
    factor+=0.01
    background(0);
    translate(width / 2, height / 2);
	for (let i = 0; i < number_of_points; i++) {
        const angle = getAngle(i);
        fill(255);
        circle(r * cos(angle), r * sin(angle), 5);
        const secondPointidx = i * factor;
        const secondAngle = getAngle(secondPointidx);
        gradientLine(r * cos(angle), r * sin(angle), r * cos(secondAngle), r * sin(secondAngle),'#fffbd5','#b20a2c');
    }

    

}