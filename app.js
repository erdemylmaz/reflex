const block = document.querySelector('.block');
const pointDIV = document.querySelector('.point');

var documentWIDTH = window.outerWidth;
var documentHEIGHT = window.outerHeight;

var blockWIDTH = block.clientWidth;
var blockHEIGHT = block.clientHeight;

var point = 0;

var sec = 0;

alert("you have 60 seconds, for play again refresh the page");

updateBlock = () => {
    sec++;
    if(sec <= 60) {
        let newX = Math.floor(Math.random() * (documentWIDTH - blockWIDTH));
        let newY = Math.floor(Math.random() * (documentHEIGHT - blockHEIGHT));

        block.style.top = `${newY}px`;
        block.style.left = `${newX}px`;

        pointDIV.textContent = `${60 - sec}s - ${point}`
    } else {
        alert(`Your score: ${point}`);
    }
}

checkWin = (e) => {
    if(e.target.classList.contains('block')) {
        point++;
        pointDIV.textContent = `${60 - sec}s - ${point}`

        updateBlock();
    } else {
        point -= 0.5;

        pointDIV.textContent = `${60 - sec}s - ${point}`
    }
}


setInterval(updateBlock, 1000);

document.addEventListener('click', checkWin);