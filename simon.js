let gameSeq = [];
let userSeq = [];

let score = [];

let btns = ["red","green","yellow","purple"];

let gameStarted = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
    if (gameStarted == false){
        console.log("Game Started!");
        gameStarted = true;
    }
    levelUp();
});

function GameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randInx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    GameFlash(randBtn);
}

function checkBtn(idx){
    // console.log(`current Level: ${level}`);
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to Start `;
        // let scores = score.push(level);
        // let result = Math.max(scores);
        // h2.append(`Highest Score is ${result}`);
        document.querySelector('body').style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor ="white";
        },500);
        reset();
        
    }
}


function btnPress(){
    let btn = this;
    // GameFlash(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    gameStarted = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

function highscore(){
    console.log(` score ${level}`);
}