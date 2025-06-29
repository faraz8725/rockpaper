/*let btn1=document.querySelector("#btn1");
let currmode="light";
btn1.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
})*/

let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompChoice=()=>{
    const options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
};
const drawGame=()=>{
    console.log("Game is draw")
    msg.innerText="game is draw";
    msg.style.backgroundColor="black";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        userscorepara.innerText=userScore;
       msg.innerText="U are winner"; 
       msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText="Try again you lose";
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choose",userChoice);
    const compChoice=gencompChoice();
    console.log("computer choose",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});