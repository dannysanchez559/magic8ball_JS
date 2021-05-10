// import {imgArray} from './ballList.js'; // does not work!

let onSwitch = false;

const onButton = document.querySelector('#onButton');
const shakeButton = document.querySelector('#shakeButton');

// DISABLE SHAKE BUTTON BY DEFAULT
toggleShakeButton();

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



// shakeButton to be automatically disabled unless onSwitch = true
shakeButton.disabled = true;


// on/off switch
onButton.addEventListener('click', function() {

    // TURN ON 8 BALL
    if (onSwitch === false) {
        onSwitch = true;
        onButton.innerHTML = "OFF";

        // change 8ball image to show On mode
        ballImage.src = "./img/magic8ball_extra.png";

        // enable shakeButton
        toggleShakeButton();


        // TURN OFF 8 BALL
    } else if (onSwitch === true) {
        onSwitch = false;
        onButton.innerHTML = "ON";

        // change 8ball img to show Off mode
        ballImage.src = "./img/magic8ball_start.png";

        // disable shakeButton
        toggleShakeButton();
    };
});

// DISPLAY RANDOM ANSWER ONCE CLICKED
shakeButton.addEventListener('click', function () {
    let randomNum = getRandomNumber();

    ballImage.src = "./img/" + imgArray[randomNum];
});

// Random img number
function getRandomNumber() {
    return (Math.floor(Math.random() * imgArray.length));
}

// DISABLE SHAKE BUTTON
function toggleShakeButton() {
    shakeButton.classList.toggle("buttonDisabled");
    shakeButton.disabled = !shakeButton.disabled;
}