document.addEventListener('DOMContentLoaded', function () {

    
    
    // get board div
    let board = document.getElementById("board");

    // get bord children
    let boardDivs = board.getElementsByTagName("div");
    
    
    for (let i = 0; i < boardDivs.length; i++) {
        
            boardDivs[i].className = "square";
    
    }

    let currentPlayer = "X";

    let square = document.getElementsByClassName("square");

    var played = new Array(9);
    
    
    for (let i = 0; i < square.length; i++) {

        // Add event listener to each square
        square[i].addEventListener("click", function () {
        
            if (square[i].innerHTML == "") {

                if (currentPlayer == "X") {

                    square[i].classList.add("X");
                    played[i] = "X";
                    square[i].innerHTML = "X";
                    currentPlayer = "O";    

                } else {

                    square[i].classList.add("O");
                    played[i] = "O";
                    square[i].innerHTML = "O";
                    currentPlayer = "X"
                }
            }
        });

        // Add hover class if mouse is over the square
        square[i].addEventListener("mouseover", function() {
            square[i].classList.add("hover");
        })

        // Removes hover class if mouse is not on the square
        square[i].addEventListener("mouseout", function() {
            square[i].classList.remove("hover");
        })
    }
});