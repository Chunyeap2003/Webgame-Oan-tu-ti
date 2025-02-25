function playGame(playerChoice){
    const choices = ["keo","bua","bao"];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

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
    else {
        result = "Bạn thua";
    }

    document.getElementById("result").innerText = 
    `Bạn chọn: ${playerChoice.toUpperCase()} </b> - Máy chọn: ${computerChoice.toUpperCase()} </b> Kết quả: ${result}`;
}
