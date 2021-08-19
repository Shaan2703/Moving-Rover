canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
nasa_images_array=["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"];
random=Math.floor(Math.random()*4);
console.log(random);
background_img=nasa_images_array[random];
console.log("background_img"+background_img);
rover_img="rover.png";
 
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img; 

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_img;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}

function uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

keyPressed=e.keyCode;
console.log(keyPressed);

if (keyPressed=='38')
{
    up();
    console.log("up");
}
if (keyPressed=='40')
{
    down();
    console.log("down");
}

if (keyPressed=='39')
{
    right();
    console.log("right");
}

if (keyPressed=='37')
{
    left();
    console.log("left");
}

}

function up() {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        console.log("When up key is pressed,x = " +rover_x +",y= " +rover_y);
        uploadBackground();
uploadrover();    
        
    }
}

function down() {
    if (rover_y<=500) {
        rover_y=rover_y+10;
        console.log("When down key is pressed,x = " +rover_x +",y= " +rover_y);
        uploadBackground();
uploadrover();  
  
        
    }
}

function left() {
    if (rover_x>=0) {
        rover_x=rover_x-10;
        console.log("When left key is pressed,x = " +rover_x +",y= " +rover_y);
        uploadBackground();
uploadrover();    
        
    }
}

function right() {
    if (rover_x<=700) {
        rover_x=rover_x+10;
        console.log("When right key is pressed,x = " +rover_x +",y= " +rover_y);
        uploadBackground();
uploadrover();    
        
    }
}