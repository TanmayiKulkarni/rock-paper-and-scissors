let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#your");
const compscorepara=document.querySelector("#comp");

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText="The Game was a draw";
    msg.style.backgroundColor="#081b31";
}

const getCompChoice = () =>{
    //rock,paper,scissor
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex]
}
const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win");
        msg.innerText="You Win !!";
        msg.style.backgroundColor="green";
        userScore++;
        userscorepara.innerText=userScore;

    }
    else{
        console.log("You Lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
        compScore++;
        compscorepara.innerText=compScore;
    }
}


const playGame =(userchoice) =>{
    console.log("user choice: ",userchoice);
    const compChoice=getCompChoice();
    console.log("Comp choice: ",compChoice);
    if(userchoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice=="rock"){
            //scissor or paper
            userWin=compChoice==="paper"? false:true;

        }
        else if(userchoice=="paper"){
            //rock, scissor
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            //rock paper
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin);
        }
        
    }

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});