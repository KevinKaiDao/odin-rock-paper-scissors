function getComputerChoice(){
    let rnd = Math.floor(Math.random() * 3) + 1;
    if (rnd == 1){
        console.log("rock");
    }else if (rnd == 2){
        console.log("paper");
    }else {
        console.log("scissors");
    }
}

getComputerChoice();