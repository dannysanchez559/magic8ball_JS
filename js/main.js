// import {imgArray} from './ballList.js'; // does not work!


let onSwitch = false; // 8BALL IS SET TO OFF BY DEFAULT
const onButton = document.querySelector('#onButton');
const shakeButton = document.querySelector('#shakeButton');
let ballImage = document.querySelector('img');
let randomInt;
const imgArray = [
    "magic8ball_1.png",
    "magic8ball_2.png",
    "magic8ball_3.png",
    "magic8ball_4.png",
    "magic8ball_5.png",
    "magic8ball_6.png",
    "magic8ball_7.png",
    "magic8ball_8.png",
    "magic8ball_9.png",
    "magic8ball_10.png",
    "magic8ball_11.png",
    "magic8ball_12.png",
    "magic8ball_13.png",
    "magic8ball_14.png",
    "magic8ball_15.png",
    "magic8ball_16.png",
    "magic8ball_17.png",
    "magic8ball_18.png",
    "magic8ball_19.png",
    "magic8ball_20.png"
];

// DISABLE SHAKE BUTTON BY DEFAULT
toggleShakeButton();


// ON / OFF BUTTON PRESS
onButton.addEventListener('click', function() {

    // TURN ON 8 BALL
    if (onSwitch === false) {
        onSwitch = true;
        onButton.innerHTML = "OFF";
        onButton.classList.add("turnOffButtonBg");

        // change 8ball image to show On mode
        ballImage.src = "./img/magic8ball_extra.png";

        // enable shakeButton
        toggleShakeButton();


        // TURN OFF 8 BALL
    } else if (onSwitch === true) {
        onSwitch = false;
        onButton.innerHTML = "ON";
        onButton.classList.remove("turnOffButtonBg");

        // change 8ball img to show Off mode
        ballImage.src = "./img/magic8ball_start.png";

        // disable shakeButton
        toggleShakeButton();
    };
});


// SHAKE BUTTON PRESS - HANDLE IMG SWAP AND ANIMATION
shakeButton.addEventListener('click', function () {

    // disable shake button as soon as it's clicked
    toggleShakeButton();

    
    let randomNum = getRandomNumber();

    // Enable shake animation then stop after 0.800s
    ballImage.classList.add("shakeBall");

    let stopAnimate = setTimeout(function () {
        ballImage.classList.remove("shakeBall");
        ballImage.src = "./img/" + imgArray[randomNum];

        // enable shakebutton after animation
        toggleShakeButton();

    }, 800);    

});


// Random img number
function getRandomNumber() {
    return (Math.floor(Math.random() * imgArray.length));
}


// ENABLE/DISABLE SHAKE BUTTON
function toggleShakeButton() {
    shakeButton.classList.toggle("buttonDisabled");
    shakeButton.disabled = !shakeButton.disabled;

}