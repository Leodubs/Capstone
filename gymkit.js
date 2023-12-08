// constante (array) avec toutes les pistes
const trackList = ["sounds/intro.mp3", "sounds/ElevenLabs_Emily_dos.mp3", "sounds/ElevenLabs_Emily_fessiers.mp3", "sounds/ElevenLabs_Emily_gainage.mp3", "sounds/BigSpeak_quadriceps.mp3"];

// constante notification audio
const errorTrack =  "sounds/notify.mp3";

// PLAYER
// constantes & fonctions du lecteur "welcome" qui jouera l'intro + toutes les pistes/parties détaillées dans une version ultérieure
const audioPlayer = document.getElementById("welcome");
// réglage du volume
audioPlayer.volume = 0.5;
// source initiale du player
audioPlayer.src = trackList[0];

// KIT AUDIO

// NOTE : querySelectorAll renvoie une liste d'éléments ! → const listOfButtons = document.querySelectorAll("button");
readyToLaunch = "ready to play → ";
let sound = new Audio;
sound.volume = 0.5;

// attribution du click-event à tous les boutons // SHORT VERSION :
document.querySelectorAll('.selection').forEach( button => {
    button.onclick = function () {
        btnClicked = button.id;
        audioToPlay = button.innerText; // innerHTML retourne mal les caractères spéciaux
        console.log(btnClicked + " has been clicked : " + readyToLaunch + audioToPlay);
        buttonAnimation(btnClicked);
        makeSound(btnClicked);
    }
});

// FONCTION animation des boutons au clic (avec un signe + la fonctionnalité ce serait mieux)
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("#" + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100);
}

// FONCTION "makeSound"
function makeSound(btnClicked) {
    switch (btnClicked) {
        case "d":
            sound.src = (trackList[1]);
            break;
        case "f":
            sound.src = (trackList[2]);
            break;
        case "g":
            sound.src = (trackList[3]);
            break;
        case "q":
            sound.src = (trackList[4]);
            break;
        //   case "a":

        //     break;
    
        //   case "i":

        //     break;
        default: 
            sound.src = (errorTrack);
            break;
    }
    audioPlayer.pause();
    sound.play();        
    console.log("🎵 CURRENTLY PLAYING " + sound.src);
}
