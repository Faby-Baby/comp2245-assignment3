document.addEventListener('DOMContentLoaded', function () {

    
    
    // get board div
    let board = document.getElementById("board");

    // get bord children
    let boardDivs = board.getElementsByTagName("div");
    
    
    for (let i = 0; i < boardDivs.length; i++) {
        
            boardDivs[i].className = "square";
    
    }
});