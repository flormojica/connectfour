let currentPlayer = "red";

const columns = document.querySelectorAll(".column");

const players={
    true: "red",
    false:"blue"
}
for(let i=0; i < columns.length; i++){
    const column= columns[i];
    column.onclick = function () {
        if(currentPlayer == "red"){
            currentPlayer = "blue";
        }
        else{
            currentPlayer="red"
        }
    const checker = document.createElement("div");
    checker.classList.add("checker",currentPlayer);
    column.appendChild(checker);
    redTurn = players[!currentPlayer];

console.log(currentPlayer);
}
}
