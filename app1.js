let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".imagecontainer");
let messg=document.querySelector("#messg");
let uscore=document.querySelector("#userscore");
let cscore=document.querySelector("#compscore");



const gencomChoice=()=>{
    
    const options=["stone","paper","scissor"];
    const useridx=Math.floor(Math.random()*3);
    return options[useridx];
};

const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win !");
        messg.innerText="You Win !"
    userscore++;
    uscore.innerText=userscore;
      }
    else {
            console.log("You Loose");
           messg.innerText="You Loose";
           compscore++;
           cscore.innerText=compscore;
        }
    
    
}

const playgame=(userChoice)=>{
    console.log("User Choice",userChoice);
    const compChoice=gencomChoice();
    console.log("Computer Choice",compChoice);


    if(userChoice===compChoice){
        console.log("Match Draw");
        messg.innerText="Match Draw";
    }
    else{
        let userWin=true;
        if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else if(userChoice==="stone")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else{
            userWin=compChoice==="stone"?false:true;
        }
        showWinner(userWin);
    }
   
}








choices.forEach((imagecontainer) => {
console.log(imagecontainer);
imagecontainer. addEventListener("click", ()=>{
    const userChoice=imagecontainer.getAttribute("Id");
   

    playgame(userChoice);}
);
});
