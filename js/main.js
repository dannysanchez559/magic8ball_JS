let onSwitch = false; // 8BALL IS SET TO OFF BY DEFAULT
const onButton = document.querySelector('#onButton');
const shakeButton = document.querySelector('#shakeButton');
let ballImage = document.querySelector('img');
let randomInt;
const picAmount = 20; // constant for amount of 8ball pics in images
const picNameStart = "./img/magic8ball_"; // file location + start of file name

// DISABLE SHAKE BUTTON BY DEFAULT
toggleShakeButton();

// ON / OFF BUTTON PRESS
onButton.addEventListener('click', function() {
    // TURN ON 8 BALL
    if (!onSwitch) {
        onButton.innerHTML = "OFF";
        onButton.classList.add("turnOffButtonBg");

        // change 8ball image to show On mode
        ballImage.src = picNameStart + "extra.png";

        // TURN OFF 8 BALL
    } else if (onSwitch) {
        onButton.innerHTML = "ON";
        onButton.classList.remove("turnOffButtonBg");

        // change 8ball img to show Off mode
        ballImage.src = picNameStart + "start.png";
    };

    onSwitch = !onSwitch;
    toggleShakeButton();
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
        ballImage.src = picNameStart + randomNum + ".png";

        // enable shakebutton after animation
        toggleShakeButton();

    }, 800);    
});

// Random img number
function getRandomNumber() {
    return (Math.ceil(Math.random() * picAmount));
}

// ENABLE/DISABLE SHAKE BUTTON
function toggleShakeButton() {
    shakeButton.classList.toggle("buttonDisabled");
    shakeButton.disabled = !shakeButton.disabled;
}