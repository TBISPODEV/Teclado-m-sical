const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keySection = document.querySelector('.piano__keys');



const playNote = (nota) =>{
    const audio = new Audio(`../notes/${nota}.wav`);
    audio.play();

}

const handleMouseDown = (key)=>{
    playNote(key.getAttribute('data-note'));
    if(key.className.includes('preta')){
       key.classList.add('preta--pressed');
        return;
    }

    key.style.background ='#ddd';

}

const handleMouseUp = (key) => {
    
    if (key.className.includes('preta')){
        key.classList.remove('preta--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});

checkbox.addEventListener('change', ({target}) =>{
    if(target.checked){
        switcher.classList.add('switcher--active');
        keySection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keySection.classList.add('disabled-keys');
});

const keyDownMapper = {
    "q": () =>handleMouseDown(keys[0]),
    "w": () =>handleMouseDown(keys[1]),
    "e": () =>handleMouseDown(keys[2]),
    "r": () =>handleMouseDown(keys[3]),
    "t": () =>handleMouseDown(keys[4]),
    "y": () =>handleMouseDown(keys[5]),
    "u": () =>handleMouseDown(keys[6]),
    "i": () =>handleMouseDown(keys[7]),
    "o": () =>handleMouseDown(keys[8]),
    "p": () =>handleMouseDown(keys[9]),
    "a": () =>handleMouseDown(keys[10]),
    "s": () =>handleMouseDown(keys[11]),
    "d": () =>handleMouseDown(keys[12]),
    "f": () =>handleMouseDown(keys[13]),
    "g": () =>handleMouseDown(keys[14]),
    "h": () =>handleMouseDown(keys[15]),
    "j": () =>handleMouseDown(keys[16]),
    "k": () =>handleMouseDown(keys[17]),
    "l": () =>handleMouseDown(keys[18]),
    "ç": () =>handleMouseDown(keys[19]),
    "z": () =>handleMouseDown(keys[20]),
    "x": () =>handleMouseDown(keys[21]),
    "c": () =>handleMouseDown(keys[22]),
    "v": () =>handleMouseDown(keys[23]),

}
 
const keyUpMapper = {
    "q": () =>handleMouseUp(keys[0]),
    "w": () =>handleMouseUp(keys[1]),
    "e": () =>handleMouseUp(keys[2]),
    "r": () =>handleMouseUp(keys[3]),
    "t": () =>handleMouseUp(keys[4]),
    "y": () =>handleMouseUp(keys[5]),
    "u": () =>handleMouseUp(keys[6]),
    "i": () =>handleMouseUp(keys[7]),
    "o": () =>handleMouseUp(keys[8]),
    "p": () =>handleMouseUp(keys[9]),
    "a": () =>handleMouseUp(keys[10]),
    "s": () =>handleMouseUp(keys[11]),
    "d": () =>handleMouseUp(keys[12]),
    "f": () =>handleMouseUp(keys[13]),
    "g": () =>handleMouseUp(keys[14]),
    "h": () =>handleMouseUp(keys[15]),
    "j": () =>handleMouseUp(keys[16]),
    "k": () =>handleMouseUp(keys[17]),
    "l": () =>handleMouseUp(keys[18]),
    "ç": () =>handleMouseUp(keys[19]),
    "z": () =>handleMouseUp(keys[20]),
    "x": () =>handleMouseUp(keys[21]),
    "c": () =>handleMouseUp(keys[22]),
    "v": () =>handleMouseUp(keys[23]),


}

document.addEventListener('keydown', (event) =>{
    event.preventDefault()
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) =>{
    event.preventDefault()
    keyUpMapper[event.key]()
});

