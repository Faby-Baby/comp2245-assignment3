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
    
    let status = document.getElementById("status");
    
    for (let i = 0; i < square.length; i++) {

        // Add event listener to each square
        square[i].addEventListener("click", function () {
        
            if (square[i].innerHTML == "") {

                if (currentPlayer == "X") {

                    square[i].classList.add("X");
                    played[i] = "X";
                    square[i].innerHTML = "X";

                   if (checkrow(square) || checkcol(square) || checkdiag(square)) {
    
                        status.innerHTML = `Congratulations! ${currentPlayer} is the Winner`;
                        status.className = "you-won";
                    }

                    currentPlayer = "O";    

                } else {

                    square[i].classList.add("O");
                    played[i] = "O";
                    square[i].innerHTML = "O";
                    if (checkrow(square) || checkcol(square) || checkdiag(square)) { 
           
                        status.innerHTML = `Congratulations! ${currentPlayer} is the Winner`;
                        status.className = "you-won";
                    }

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

// Checks rowss for match
function checkrow (square) {

        if  (square[0].innerHTML != "") {

             if (square[0].innerHTML == square[1].innerHTML && square[0].innerHTML == square[2].innerHTML) {
                return true;
             }
        }

        if (square[3].innerHTML != "") {

            if (square[3].innerHTML == square[4].innerHTML && square[3].innerHTML == square[5].innerHTML) {
                return true;
            } 
          
        }

        if (square[6].innerHTML != "") {

           if (square[6].innerHTML == square[7].innerHTML && square[6].innerHTML == square[8].innerHTML){
            return true;
           }
        }
}

// Checks columns for match
function checkcol(square) {
    
    if  (square[0].innerHTML != "") {

        if (square[0].innerHTML == square[3].innerHTML && square[0].innerHTML == square[6].innerHTML) {
           return true;
        }
   }

   if (square[1].innerHTML != "") {

       if (square[1].innerHTML == square[4].innerHTML && square[1].innerHTML == square[7].innerHTML) {
           return true;
       } 
     
   }

   if (square[2].innerHTML != "") {

      if (square[2].innerHTML == square[5].innerHTML && square[2].innerHTML == square[8].innerHTML){
       return true;
      }
   }
    
}

// Checks diagonals for match
function checkdiag(square) {

    if (square[4].innerHTML != "") {

        if ((square[0].innerHTML == square[4].innerHTML && square[0].innerHTML == square[8].innerHTML) || (square[2].innerHTML == square[4].innerHTML && square[2].innerHTML == square[6].innerHTML)) {
            return true;
        }
    }
}
    