let userScore = 0;
let comoScore = 0;

const choices = document.querySelectorAll('.choic');
const msg = document.querySelector('#msg');
const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#comp-score');

const gencompchoic = () => {
    let option = ['Rock', 'paper', 'scissors'];
    const randindx = Math.floor(Math.random() * 3);
    return option[randindx];
};
const gameDraw = () => {
    msg.innerText = 'Game Draw Play again';
    msg.style.backgroundColor = '#081b31';
};
const showWiner = (userwin, userChoic, compchoic) => {
    if (userwin) {
        msg.innerText = `You win! Your ${userChoic} beat ${compchoic}`;
        msg.style.backgroundColor = 'green';
        userScore++;
        userScorepara.innerText = userScore;
    } else {
        msg.innerText = `You Lose ${compchoic} beat Your ${userChoic}`;
        msg.style.backgroundColor = 'red';
        comoScore++;
        compScorepara.innerText = comoScore;
    }
};

const playGame = (userChoic) => {
    console.log('user choic=', userChoic);
    //Genrat computer choice
    const compchoic = gencompchoic();
    console.log('computer choic is', compchoic);
    if (userChoic === compchoic) {
        //Game was Draw
        gameDraw();
    } else {
        let userWin = true;
        if (userChoic === 'rock') {
            //scissors, paper
            userWin = compchoic === 'paper' ? false : true;
        } else if (userChoic === 'paper') {
            //rock, scissors
            userWin = compchoic === 'scissors' ? false : true;
        } else {
            //rock, paper
            userWin = compchoic === 'rock' ? false : true;
        }
        showWiner(userWin, userChoic, compchoic);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
