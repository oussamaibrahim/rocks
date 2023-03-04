let counter = 0 ; 
function getComputerChoice(){
    let choice = Math.floor((Math.random() *3) + 1 );
    
     if (choice === 1){  
      return "Rocks";}
      else if (choice === 2){
        return "Scisors";}
      else {
        return "Paper";}
}



function playRound(playerSelection) {
    
    const computerSelection =  getComputerChoice();
   
   if (playerSelection.toLowerCase() === "rocks"  && computerSelection == "Rocks")
   {return "It's a tie";}
   else if (playerSelection.toLowerCase() === "rocks"  && computerSelection == "Scisors")
     {counter++;
      return "You Win! Rocks beats Scisors";
    
    } 
     else if (playerSelection.toLowerCase() === "rocks"  && computerSelection == "Paper")
     {return "You Lose! Paper beats Rocks";} 
     else if (playerSelection.toLowerCase() == "paper"  && computerSelection == "Paper")
     {return "It's a tie";} 
     else if (playerSelection.toLowerCase() == "paper"  && computerSelection == "Rocks")
     {counter++;
      return "You Win! Paper beats Rocks";
      
    } 
     else if (playerSelection.toLowerCase() == "paper"  && computerSelection == "Scisors")
     {return "You Lose! Scisors beats paper";} 
     else if (playerSelection.toLowerCase() == "scisors"  && computerSelection == "Scisors")
     {return "It's a tie";} 
     else if (playerSelection.toLowerCase() == "scisors"  && computerSelection == "Rocks")
     {return "You Lose! Rocks beats Scisors";} 
     else  (playerSelection.toLowerCase() == "scisors"  && computerSelection == "Paper")
     {counter++
      return "You Win! Scisors beats Paper"  ;
      
    } 

    
   }

   let result = document.querySelector('.results');
   

   let rocks = document.querySelector('.rocks');
   rocks.addEventListener('click' , () => {
      
   game(counter);  
   result.innerHTML+=playRound(rocks.className)+ '<br>';

   });
   let  paper = document.querySelector('.paper');
   paper.addEventListener('click' , () =>{
    result.innerHTML+=playRound(paper.className)+'<br>';

   });
   
   let scisors = document.querySelector('.scisors');
   scisors.addEventListener('click' , () => {
    result.innerHTML += playRound(scisors.className)+ '<br>';
   } );
  



   function game (counter){ 
    if (counter === 5 ){
   
     let gamestatus = document.querySelector('div.gamestatus');
      gamestatus.innerHTML+= "you win the game!!!" ;   }
  }