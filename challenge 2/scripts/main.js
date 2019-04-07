TweenMax.to(".clock", 20, {opacity:7, scale:2.5, ease:Bounce.easeOut});
TweenMax.to(".info", 5, {y:-40});
TweenMax.to(".date", 8, {y:-50});


//Get todays date

var today = new Date();
var monthText = today.getMonth() + 1

document.getElementById('message').innerHTML = today.toString();
document.getElementById('message').innerHTML = today.getDate() + '/' + monthText + '/' + today.getFullYear();

//Get the time
function startTime() {
    
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;

    //Sets the speed of the time
    setTimeout(startTime, 500);
}

changePicture();

//Function to make sure the time is shown correctly
function checkTime(i) {
  if (i < 10) {i = "0" + i}
     return i;
}

//Execute the time
startTime();
checkTime();

//Change the picture based on the time 
function changePicture() {

    var now = new Date();
    var PictureStartTime = new Date();
        PictureStartTime.setHours(6);
        PictureStartTime.setMinutes(0);
        PictureStartTime.setSeconds(0);
    var PictureEndTime = new Date();
        PictureEndTime.setHours(20);
        PictureEndTime.setMinutes(44);
        PictureEndTime.setSeconds(00);

    if (PictureStartTime < now && PictureEndTime > now) {
        document.getElementById("picture").src = "images/daytime.jpg" }
        else {
        document.getElementById("picture").src = "images/nighttime.png" }
}