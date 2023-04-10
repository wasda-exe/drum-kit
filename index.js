let drumButtons = document.querySelectorAll('.drum');

// js object containing key-value pairs for name-sounds
let audioList = {
    w: 'sounds/tom-1.mp3',
    a: 'sounds/tom-2.mp3',
    s: 'sounds/tom-3.mp3',
    d: 'sounds/tom-4.mp3',
    j: 'sounds/snare.mp3',
    k: 'sounds/crash.mp3',
    l: 'sounds/kick-bass.mp3',
};

function playDrumAudio(element) {
let audio = new Audio(audioList[element]);
audio.play();
}


// add click event listeners to all drum buttons
drumButtons.forEach(element => {
    element.addEventListener("click", (event) => {
        // play audio for specific element which calls listener (as listener is given this element)
        // elementName like 'w', 'a'.
        playDrumAudio(element.textContent);
    })
});


// add keydown event listener to document
document.addEventListener("keydown", (event) => {
    // play audio for specific keydown
    playDrumAudio(event.key); 
});





// v4
// let drumButtons = document.querySelectorAll('.drum');


// // add click event listeners to all drum buttons
// drumButtons.forEach(element => {
//     element.addEventListener("click", clickDrum)
// });

// // play audio for specific element which calls listener (as listener is given this element)
// function clickDrum() {
//     // elementName like 'w', 'a'.
//     playDrumAudio(this.textContent);
// }


// // add keydown event listener to document
// document.addEventListener("keydown", keydownDocument)

// // play audio for specific keydown
// function keydownDocument(event) {
//     playDrumAudio(event.key); 
// }


// // js object containing key-value pairs for name-sounds
// let audioList = {
//     w: 'sounds/tom-1.mp3',
//     a: 'sounds/tom-2.mp3',
//     s: 'sounds/tom-3.mp3',
//     d: 'sounds/tom-4.mp3',
//     j: 'sounds/snare.mp3',
//     k: 'sounds/crash.mp3',
//     l: 'sounds/kick-bass.mp3',
// };

// function playDrumAudio(element) {
// let audio = new Audio(audioList[element]);
// audio.play();
// }


// v3

// // play audio for specific element which calls listener (as listener is given this element)
// function clickDrum() {
//     // elementName like 'w', 'a'.
//     let elementName = this.textContent;
//     let audio = new Audio(audioList[elementName]);
//     audio.play();
// also valid
    // element.addEventListener("click", function(event) {
    //     // play audio for specific element which calls listener (as listener is given this element)
    //     // elementName like 'w', 'a'.
    //     playDrumAudio(this.textContent);
    // })
// }

// // play audio for specific keydown
// function keydownDocument(event) {
//     let audio = new Audio(audioList[event.key]);
//     audio.play();  
// }


// function keydownDocument(event) {
//     // let key = (event.key)[event.key.length - 1];
//     // event.key;
//     // console.log(event);   
// }





// function drumClick() {
//     // alert('meow');
//     let elementName = this.textContent;
//     let audio = new Audio(audioList[elementName]);
//     // let audio = new Audio('sounds/crash.mp3');
//     audio.play();
//     // console.log(this);
//     // console.log(typeof elementName);
//     // console.log(audioList.elementName);
//     // console.log();
// this.style.color="blue";
// }


// let drumButtons = document.querySelectorAll('.drum');
// // drumButtons.forEach(addEventListener("click",handleClick));
// function handleClick() {
//     alert('meow');
//     // console.log(this);
// }
// alert(drumButtons.length);
// for (let index = 0; index < drumButtons.length; index++) {
//     const element = drumButtons[index];
//     console.log(element);
//     element.addEventListener("click", handleClick);
//     // alert('mew');
// }

// function handleClick() {
//     alert('meow');
// }
// let w = document.querySelector('.w');
// w.addEventListener("click",handleClick);