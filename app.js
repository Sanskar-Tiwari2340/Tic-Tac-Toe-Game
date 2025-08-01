let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let turnO = true;  // true means it's O's turn, false means it's X's turn

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {                
    box.addEventListener("click", () => {       
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O"; 
            turnO = false; 
        }
        else
        {
            box.innerText = "X"; 
            turnO = true;
        }
        box.disabled = true;  // Disable the box after it's clicked
        checkWinner();
    });                                
});                   

const checkWinner = () => {
    for (let pattern of winningCombinations){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                console.log("Winner is: " + pos1);
            }
        }
    }
}