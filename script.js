/* Rutherford Labbe: 12-18-2023 */

    /* ------------------------------------------------------------- NOTES --------------------------------------------------------------- */

        // Clear the content inside the parent div
        //parentDiv.innerHTML = "";

        // Add a class attribute to the div
        //divElement.classList.add("myDiv");

        // Add an id attribute to the div
        //divElement.id = "uniqueDivId";

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    // Generate a random integer between 1 and 2 (inclusive)
    let randomInteger = Math.floor(Math.random() * 2) + 1;

    // Side boxes for the X and O */
    let Xmark = document.getElementById('x_mark');
    let Omark = document.getElementById('o_mark');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Attachs a div to a variable name */
    var restartContainer = document.getElementById('restart_card');

    /* Creates a h1 element */
    var markXWins = document.createElement('h1');
    markXWins.textContent = "X 😁 X"

    /* Add an id attribute to X _ X h1 */
    markXWins.id = "x_wins";

    /* Creates a h1 element */
    var markOWins = document.createElement('h1');
    markOWins.textContent = "O 😁 O"

    /* Add an id attribute to O _ O h1 */
    markOWins.id = "o_wins";

    /* Creates a h1 element */
    var gameTie = document.createElement('h1');
    gameTie.textContent = " 🤭 "

    /* Add an id attribute to O _ O h1 */
    gameTie.id = "tie";

    /* Creates a div element */
    var playAgain = document.createElement('div');
    playAgain.textContent = "Restart"

    /* Add an id attribute to restart div */
    playAgain.id = "restart_button";

    /* Append h1 to div element */
    restartContainer.appendChild(markXWins);

    /* Append h1 to div element */
    restartContainer.appendChild(markOWins);

    /* Append h1 to div element */
    restartContainer.appendChild(gameTie);

    /* Append div to div element */
    restartContainer.appendChild(playAgain);

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Attachs a div to a variable name */
    var playContainer = document.getElementById('title_card');

    /* Attachs a div to a variable name */
    var startButton = document.getElementById('start_button');

    /* Attachs a div to a variable name */
    var squareBox = document.getElementById('square_box');

    /* Hit the start button to start the game */
    startButton.addEventListener('click', function(){
        /* The Tic-Tac-Toe box appears */
        squareBox.style.visibility = 'visible';

        /* Hides play card from player's view */
        playContainer.style.visibility = 'hidden';

        /* Determines which box is highlighted for the side boxes - X or O */
        if(randomInteger == 1){
            Xmark.style.backgroundColor = "initial";
        }else if(randomInteger == 2){
            Omark.style.backgroundColor = "initial";
        }
    });

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Hit the restart button to restart the game */
    playAgain.addEventListener('click', function(){

        /* Hides restart card from player's view */
        restartContainer.style.visibility = 'hidden';

        /* Reveals play card */
        playContainer.style.visibility = 'visible';

        /* Reloads page to clear everything */
        location.reload();
    });

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectOne = false;
    var oMarkSelectOne = false;

    /* Sets initial values for box One */
    var boxOne = document.getElementById('box_1');
    var x_Mark_One = document.getElementById('x_mark_1');
    var o_Mark_One = document.getElementById('o_mark_1');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectTwo = false;
    var oMarkSelectTwo = false;

    /* Sets initial values for box Two */
    var boxTwo = document.getElementById('box_2');
    var x_Mark_Two = document.getElementById('x_mark_2');
    var o_Mark_Two = document.getElementById('o_mark_2');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectThree = false;
    var oMarkSelectThree = false;

    /* Sets initial values for box Three */
    var boxThree = document.getElementById('box_3');
    var x_Mark_Three = document.getElementById('x_mark_3');
    var o_Mark_Three = document.getElementById('o_mark_3');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectFour = false;
    var oMarkSelectFour = false;

    /* Sets initial values for box Four */
    var boxFour = document.getElementById('box_4');
    var x_Mark_Four = document.getElementById('x_mark_4');
    var o_Mark_Four = document.getElementById('o_mark_4');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectFive = false;
    var oMarkSelectFive = false;

    /* Sets initial values for box five */
    var boxFive = document.getElementById('box_5');
    var x_Mark_Five = document.getElementById('x_mark_5');
    var o_Mark_Five = document.getElementById('o_mark_5');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectSix = false;
    var oMarkSelectSix = false;

    /* Sets initial values for box Six */
    var boxSix = document.getElementById('box_6');
    var x_Mark_Six = document.getElementById('x_mark_6');
    var o_Mark_Six = document.getElementById('o_mark_6');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectSeven = false;
    var oMarkSelectSeven = false;

    /* Sets initial values for box Seven */
    var boxSeven = document.getElementById('box_7');
    var x_Mark_Seven = document.getElementById('x_mark_7');
    var o_Mark_Seven = document.getElementById('o_mark_7');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectEight = false;
    var oMarkSelectEight = false;

    /* Sets initial values for box Eight */
    var boxEight = document.getElementById('box_8');
    var x_Mark_Eight = document.getElementById('x_mark_8');
    var o_Mark_Eight = document.getElementById('o_mark_8');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    var xMarkSelectNine = false;
    var oMarkSelectNine = false;

    /* Sets initial values for box Nine */
    var boxNine = document.getElementById('box_9');
    var x_Mark_Nine = document.getElementById('x_mark_9');
    var o_Mark_Nine = document.getElementById('o_mark_9');

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    let hasBeenClicked = false;

    /* First box holder */
    function handleClickBoxOne() {

        // Check if the click event has already been handled
        if (!hasBeenClicked) {

            /* Sets initial value to false */
            xMarkSelectOne;
            oMarkSelectOne;

            if(randomInteger == 1){
                x_Mark_One.style.opacity = '1';
                xMarkSelectOne = true;
            }
            if(randomInteger == 2){
                o_Mark_One.style.opacity = '1';
                oMarkSelectOne = true;
            }

            // Change initial value from false to true
            boxOneSelect = true;

            if(boxOneSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClicked = true;
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first row is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectTwo !== false && xMarkSelectThree !== false){

            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row One - X - 3 Times: X wins");
        }

        /* If the first row is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectTwo !== false && oMarkSelectThree !== false){

            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */


        /* If the first column is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectFour !== false && xMarkSelectSeven !== false){

            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column One - X - 3 Times: X wins");
        }

        /* If the first column is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectFour !== false && oMarkSelectSeven !== false){

            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first diagonal is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectFive !== false && xMarkSelectNine !== false){

            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';


            console.log("Diagonal One - X - 3 Times: X wins");
        }

        /* If the first diagonal is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectFive !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';


            console.log("Diagonal One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxOne.addEventListener('click', handleClickBoxOne);

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    let hasBeenClickedTwo = false;

    /* Second box holder */
    function handleClickBoxTwo() {

        // Check if the click event has already been handled
        if (!hasBeenClickedTwo) {

            /* Sets initial value to false */
            xMarkSelectTwo;
            oMarkSelectTwo;

            if(randomInteger == 1){
                x_Mark_Two.style.opacity = '1';
                xMarkSelectTwo = true;
            }
            if(randomInteger == 2){
                o_Mark_Two.style.opacity = '1';
                oMarkSelectTwo = true;
            }

            // Change initial value from false to true
            boxTwoSelect = true;

            if(boxTwoSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedTwo = true;

        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first row is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectTwo !== false && xMarkSelectThree !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row One - X - 3 Times: X wins");
        }

        /* If the first row is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectTwo !== false && oMarkSelectThree !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second column is full of X's than X is the winner */
        if(xMarkSelectTwo !== false && xMarkSelectFive !== false && xMarkSelectEight !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column Two - X - 3 Times: X wins");
        }

        /* If the second column is full of O's than O is the winner */
        if(oMarkSelectTwo !== false && oMarkSelectFive !== false && oMarkSelectEight !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxTwo.addEventListener('click', handleClickBoxTwo);

    /* -------------------------------------------------------- Section Divider ---------------------------------------------------------- */

    /* Sets initial value to false */
    let hasBeenClickedThree = false;

    /* Third box holder */
    function handleClickBoxThree() {

        /* Sets initial value to false */
        xMarkSelectThree;
        oMarkSelectThree;

        // Check if the click event has already been handled
        if (!hasBeenClickedThree) {

            if(randomInteger == 1){
                x_Mark_Three.style.opacity = '1';
                xMarkSelectThree = true;
            }
            if(randomInteger == 2){
                o_Mark_Three.style.opacity = '1';
                oMarkSelectThree = true;
            }

            // Change initial value from false to true
            boxThreeSelect = true;

            if(boxThreeSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedThree = true;

        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first row is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectTwo !== false && xMarkSelectThree !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row One - X - 3 Times: X wins");
        }

        /* If the first row is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectTwo !== false && oMarkSelectThree !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the third column is full of X's than X is the winner */
        if(xMarkSelectThree !== false && xMarkSelectSix !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column Three - X - 3 Times: X wins");
        }

        /* If the third column is full of O's than O is the winner */
        if(oMarkSelectThree !== false && oMarkSelectSix !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column Three - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second diagonal is full of X's than X is the winner */
        if(xMarkSelectThree !== false && xMarkSelectFive !== false && xMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';


            console.log("Diagonal Two - X - 3 Times: X wins");
        }

        /* If the second diagonal is full of O's than O is the winner */
        if(oMarkSelectThree !== false && oMarkSelectFive !== false && oMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';


            console.log("Diagonal Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxThree.addEventListener('click', handleClickBoxThree);

    /* ---------------------------------- Section Divider ------------------------------------ */

    /* Sets initial value to false */
    let hasBeenClickedFour = false;

    /* Fourth box holder */
    function handleClickBoxFour() {

        /* Sets initial value to false */
        xMarkSelectFour;
        oMarkSelectFour;

        // Check if the click event has already been handled
        if (!hasBeenClickedFour) {

            if(randomInteger == 1){
                x_Mark_Four.style.opacity = '1';
                xMarkSelectFour = true;
            }
            if(randomInteger == 2){
                o_Mark_Four.style.opacity = '1';
                oMarkSelectFour = true;
            }

            // Change initial value from false to true
            boxFourSelect = true;

            if(boxFourSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedFour = true;
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second row is full of X's than X is the winner */
        if(xMarkSelectFour !== false && xMarkSelectFive !== false && xMarkSelectSix !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row Two - X - 3 Times: X wins");
        }

        /* If the second row is full of O's than O is the winner */
        if(oMarkSelectFour !== false && oMarkSelectFive !== false && oMarkSelectSix !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first column is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectFour !== false && xMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column One - X - 3 Times: X wins");
        }

        /* If the first column is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectFour !== false && oMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxFour.addEventListener('click', handleClickBoxFour);

    /* ---------------------------------- Section Divider ------------------------------------ */

    /* Sets initial value to false */
    let hasBeenClickedFive = false;

    /* Fifth box holder */
    function handleClickBoxFive() {

        /* Sets initial value to false */
        xMarkSelectFive;
        oMarkSelectFive;

        // Check if the click event has already been handled
        if (!hasBeenClickedFive) {

            if(randomInteger == 1){
                x_Mark_Five.style.opacity = '1';
                xMarkSelectFive = true;
            }
            if(randomInteger == 2){
                o_Mark_Five.style.opacity = '1';
                oMarkSelectFive = true;
            }

            // Change initial value from false to true
            boxFiveSelect = true;

            if(boxFiveSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedFive = true;
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second row is full of X's than X is the winner */
        if(xMarkSelectFour !== false && xMarkSelectFive !== false && xMarkSelectSix !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row Two - X - 3 Times: X wins");
        }

        /* If the second row is full of O's than O is the winner */
        if(oMarkSelectFour !== false && oMarkSelectFive !== false && oMarkSelectSix !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second column is full of X's than X is the winner */
        if(xMarkSelectTwo !== false && xMarkSelectFive !== false && xMarkSelectEight !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column Two - X - 3 Times: X wins");
        }

        /* If the second column is full of O's than O is the winner */
        if(oMarkSelectTwo !== false && oMarkSelectFive !== false && oMarkSelectEight !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first diagonal is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectFive !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';


            console.log("Diagonal One - X - 3 Times: X wins");
        }

        /* If the first diagonal is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectFive !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';


            console.log("Diagonal One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second diagonal is full of X's than X is the winner */
        if(xMarkSelectThree !== false && xMarkSelectFive !== false && xMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';


            console.log("Diagonal Two - X - 3 Times: X wins");
        }

        /* If the second diagonal is full of O's than O is the winner */
        if(oMarkSelectThree !== false && oMarkSelectFive !== false && oMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';


            console.log("Diagonal Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxFive.addEventListener('click', handleClickBoxFive);


    /* ---------------------------------- Section Divider ------------------------------------ */

    /* Sets initial value to false */
    let hasBeenClickedSix = false;

    /* Sixth box holder */
    function handleClickBoxSix() {

        /* Sets initial value to false */
        xMarkSelectSix;
        oMarkSelectSix;

        // Check if the click event has already been handled
        if (!hasBeenClickedSix) {

            if(randomInteger == 1){
                x_Mark_Six.style.opacity = '1';
                xMarkSelectSix = true;
            }
            if(randomInteger == 2){
                o_Mark_Six.style.opacity = '1';
                oMarkSelectSix = true;
            }

            // Change initial value from false to true
            boxSixSelect = true;

            if(boxSixSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedSix = true;
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second row is full of X's than X is the winner */
        if(xMarkSelectFour !== false && xMarkSelectFive !== false && xMarkSelectSix !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row Two - X - 3 Times: X wins");
        }

        /* If the second row is full of O's than O is the winner */
        if(oMarkSelectFour !== false && oMarkSelectFive !== false && oMarkSelectSix !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the third column is full of X's than X is the winner */
        if(xMarkSelectThree !== false && xMarkSelectSix !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column Three - X - 3 Times: X wins");
        }

        /* If the third column is full of O's than O is the winner */
        if(oMarkSelectThree !== false && oMarkSelectSix !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column Three - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxSix.addEventListener('click', handleClickBoxSix);


    /* ---------------------------------- Section Divider ------------------------------------ */

    /* Sets initial value to false */
    let hasBeenClickedSeven = false;

    /* Seventh box holder */
    function handleClickBoxSeven() {

        /* Sets initial value to false */
        xMarkSelectSeven;
        oMarkSelectSeven;

        // Check if the click event has already been handled
        if (!hasBeenClickedSeven) {

            if(randomInteger == 1){
                x_Mark_Seven.style.opacity = '1';
                xMarkSelectSeven = true;
            }
            if(randomInteger == 2){
                o_Mark_Seven.style.opacity = '1';
                oMarkSelectSeven = true;
            }

            // Change initial value from false to true
            boxSevenSelect = true;

            if(boxSevenSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedSeven = true;
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the Third row is full of X's than X is the winner */
        if(xMarkSelectSeven !== false && xMarkSelectEight !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row Three - X - 3 Times: X wins");
        }

        /* If the Third row is full of O's than O is the winner */
        if(oMarkSelectSeven !== false && oMarkSelectEight !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row Three - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first column is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectFour !== false && xMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column One - X - 3 Times: X wins");
        }

        /* If the first column is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectFour !== false && oMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column One - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second diagonal is full of X's than X is the winner */
        if(xMarkSelectThree !== false && xMarkSelectFive !== false && xMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';


            console.log("Diagonal Two - X - 3 Times: X wins");
        }

        /* If the second diagonal is full of O's than O is the winner */
        if(oMarkSelectThree !== false && oMarkSelectFive !== false && oMarkSelectSeven !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';


            console.log("Diagonal Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxSeven.addEventListener('click', handleClickBoxSeven);


    /* ---------------------------------- Section Divider ------------------------------------ */

    /* Sets initial value to false */
    let hasBeenClickedEight = false;

    /* Eighth box holder */
    function handleClickBoxEight() {

        /* Sets initial value to false */
        xMarkSelectEight;
        oMarkSelectEight;

        // Check if the click event has already been handled
        if (!hasBeenClickedEight) {

            if(randomInteger == 1){
                x_Mark_Eight.style.opacity = '1';
                xMarkSelectEight = true;
            }
            if(randomInteger == 2){
                o_Mark_Eight.style.opacity = '1';
                oMarkSelectEight = true;
            }

            // Change initial value from false to true
            boxEightSelect = true;

            if(boxEightSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedEight = true;
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the Third row is full of X's than X is the winner */
        if(xMarkSelectSeven !== false && xMarkSelectEight !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row Three - X - 3 Times: X wins");
        }

        /* If the Third row is full of O's than O is the winner */
        if(oMarkSelectSeven !== false && oMarkSelectEight !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row Three - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the second column is full of X's than X is the winner */
        if(xMarkSelectTwo !== false && xMarkSelectFive !== false && xMarkSelectEight !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column Two - X - 3 Times: X wins");
        }

        /* If the second column is full of O's than O is the winner */
        if(oMarkSelectTwo !== false && oMarkSelectFive !== false && oMarkSelectEight !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column Two - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    // Add a click event listener
    boxEight.addEventListener('click', handleClickBoxEight);


    /* ---------------------------------- Section Divider ------------------------------------ */

    /* Sets initial value to false */
    let hasBeenClickedNine = false;

    /* Ninth box holder */
    function handleClickBoxNine() {

        /* Sets initial value to false */
        xMarkSelectNine;
        oMarkSelectNine;

        // Check if the click event has already been handled
        if (!hasBeenClickedNine) {

            if(randomInteger == 1){
                x_Mark_Nine.style.opacity = '1';
                xMarkSelectNine = true;
            }
            if(randomInteger == 2){
                o_Mark_Nine.style.opacity = '1';
                oMarkSelectNine = true;
            }

            // Change initial value from false to true
            boxNineSelect = true;

            if(boxNineSelect !== false){
                if (randomInteger === 1) {
                    randomInteger = 2;
                  } else {
                    randomInteger = 1;
                  }
            }

            if(randomInteger == 1){
                Xmark.style.backgroundColor = "initial";
                Omark.style.backgroundColor = "var(--Stratos)";
            }else if(randomInteger == 2){
                Omark.style.backgroundColor = "initial";
                Xmark.style.backgroundColor = "var(--Stratos)";
            }

            /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

            // Set the flag to true, indicating that the click has been handled
            hasBeenClickedNine = true;
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the Third row is full of X's than X is the winner */
        if(xMarkSelectSeven !== false && xMarkSelectEight !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Row Three - X - 3 Times: X wins");
        }

        /* If the Third row is full of O's than O is the winner */
        if(oMarkSelectSeven !== false && oMarkSelectEight !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Row Three - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the third column is full of X's than X is the winner */
        if(xMarkSelectThree !== false && xMarkSelectSix !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Column Three - X - 3 Times: X wins");
        }

        /* If the third column is full of O's than O is the winner */
        if(oMarkSelectThree !== false && oMarkSelectSix !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Column Three - O - 3 Times: O wins");
        }

        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* If the first diagonal is full of X's than X is the winner */
        if(xMarkSelectOne !== false && xMarkSelectFive !== false && xMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that X won */
            restartContainer.style.visibility = 'visible';
            markXWins.style.display = 'block';

            console.log("Diagonal One - X - 3 Times: X wins");
        }

        /* If the first diagonal is full of O's than O is the winner */
        if(oMarkSelectOne !== false && oMarkSelectFive !== false && oMarkSelectNine !== false){
            /* The Tic-Tac-Toe box disappears */
            squareBox.style.visibility = 'hidden';

            /* Shows player that O won */
            restartContainer.style.visibility = 'visible';
            markOWins.style.display = 'block';

            console.log("Diagonal One - O - 3 Times: O wins");
        }
        /* ------------------------------------------------ Section Divider ------------------------------------------------------ */

        /* Extract any variable name from the above function */
        tieCount();

    }

    /* Tie game function */
    function tieCount(){

            /* Incase of a tie game */
            if(hasBeenClicked !== false && hasBeenClickedTwo !== false && hasBeenClickedThree !== false && hasBeenClickedFour !== false && hasBeenClickedFive !== false && hasBeenClickedSix !== false && hasBeenClickedSeven !== false && hasBeenClickedEight !== false && hasBeenClickedNine !== false){

                /* The Tic-Tac-Toe box disappears */
                squareBox.style.visibility = 'hidden';

                /* Show a tie game */
                restartContainer.style.visibility = 'visible';
                gameTie.style.display = 'block';

                 /* If a diagonal win occurs whether for X and O than the game tie text doesn't show */
                if(markXWins.style.display == 'block' || markOWins.style.display == 'block'){
                    /* Removes tie game text from view */
                    gameTie.style.display = 'none';
                }
            }

    }

    // Add a click event listener
    boxNine.addEventListener('click', handleClickBoxNine);

    /* ------------------------------------------------ Section Divider ------------------------------------------------------ */






