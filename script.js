// This calls the element that is the button that needs to be pressed to initiate a diceroll
    let diceroll = document.getElementById('rolldice')
//This gets the initial image
    let myDiceImage = document.getElementById('myDice')

    // This is my array of dice which i'll use to randomly select a dice from.
     let theDice = [{
        src: "../img/dice1.png",
        width: "300",
        height: "300",
     },{
         src:"../img/dice2.png",
         width: "300",
         height: "300",
     }, {
        src:"../img/dice3.png",
        width: "300",
        height: "300",
     }, {
        src:"../img/dice4.png",
        width: "300",
        height: "300",
     }, {
        src:"../img/dice5.png",
        width: "300",
        height: "300",
     }, {
        src:"../img/dice6.png",
        width: "300",
        height: "300",
     }];
        let total = 0;
// This listens for a click which then generates a random image from my array. Then reports result on status.
     diceroll.addEventListener("click", function(){
        let randNum = Math.floor(Math.random() * theDice.length) 
        // This changes my first image  to a random image from the array
        total += randNum + 1
        let status = document.getElementById("status")
        status.innerHTML = `You rolled ${randNum + 1}`;
        score.innerHTML = `Total score is ${total}`;
        //This shows score and total score
        myDiceImage.src = theDice[randNum].src;
        if (randNum ==0){
            score.innerHTML = "You rolled a 1 Game over"
        }
        else if (total >= 21){
            score.innerHTML = ("You win")
            //This sets end game conditions
        }
      });
     
      
    

  
      


  