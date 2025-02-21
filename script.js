function playGame(playerChoice){
    const choice = ["keo","bua","bao"];
    const computerChoice = Choice[Math.floor(Math.random()*choices.length)];

    let result = "";
    if(playerChoice === computerChoice) {
        result = "Hòa";
    } else if(
        (playerChoice === "keo" && computerChoice === "bao") ||
        (playerChoice === "bua" && computerChoice === "keo") ||
        (playerChoice === "bao" && computerChoice === "bua")
    ) {
        result = "Bạn thắng";
    }
    else if {
        result = "Bạn thua";
    }
    document.getElementgetbyId("result").innerText= 
    'Bạn chọn: ${playerChoice.toUpperCase()} -Máy chọn: ${playerChoice.toUpperCase()} \n Kết quả: ${result}';
}
