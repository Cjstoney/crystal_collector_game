


// variables needed 
var crystalOne = crys1();
var crystalTwo = crys2();
var crystalThree = crys3();
var crystalFour = crys4();
var pointsBox = 0;
var targetNum = compNum();
var userNum = [];
var currentScore = 0;
var wins = 0;
var losses = 0;

// creating random number for the computer

function compNum() {
    return Math.floor(Math.random() * ((120 - 19) + 1) + 19);
}

// function to get the sum of the userNum array

function sumArray(array) {
    var sum = 0;
    for (i = 0; i < userNum.length; i++) {
        sum = sum + userNum[i];
    }
    return sum;
}

// functions for each crystal

function crys1() {
    return Math.floor(Math.random() * 12) + 1;
}
function crys2() {
    return Math.floor(Math.random() * 7) + 1;
}
function crys3() {
    return Math.floor(Math.random() * 11) + 1;
}
function crys4() {
    return Math.floor(Math.random() * 9) + 1;
}

// function for a game reset
function reset() {
    compNum();
    console.log("the number is now " + targetNum);
    crys1();
    console.log(crystalOne);
    crys2();
    console.log(crystalTwo);
    crys3();
    console.log(crystalThree);
    crys4();
    console.log(crystalFour);
    currentScore = 0;
}


// javascript to be run

$(document).ready(function () {
    console.log("ready!");
    console.log(targetNum);
    console.log(currentScore);

    // displaying the random number to guess

    $("#random-number").html("Your target number is: " + targetNum);

    // function for crystal one 

    $("#crys-1").on("click", function () {
        userNum.push(crystalOne);
        console.log("crystal one is " + crystalOne);
        currentScore = sumArray(userNum);
        $("#points").text(currentScore);
        console.log(currentScore);
        if (currentScore === targetNum) {
            wins++;
            alert("Winner!");
            $("#wins").html("Wins: " + wins);
            reset();
            
        } else if (currentScore > targetNum) {
            losses++;
            alert("I'm sorry, you lost this round")
            $("#losses").html("Losses: " + losses);
            reset();
           
        }
    });
    
    // function for crystal two

    $("#crys-2").on("click", function () {
        userNum.push(crystalTwo);
        console.log("cyrstal two is " + crystalTwo);
        currentScore = sumArray(userNum);
        $("#points").text(currentScore);
        if (currentScore === targetNum) {
            wins++;
            alert("Winner!");
            $("#wins").html("Wins: " + wins);
            reset();
           
        } else if (currentScore > targetNum) {
            losses++;
            alert("I'm sorry, you lost this round")
            $("#losses").html("Losses: " + losses);
            reset();
           
        }
    });

    // function for crystal three
    
    $("#crys-3").on("click", function () {
        userNum.push(crystalThree);
        console.log("crystal three is " + crystalThree);
        currentScore = sumArray(userNum);
        $("#points").text(currentScore);
        if (currentScore === targetNum) {
            wins++;
            alert("Winner!");
            $("#wins").html("Wins: " + wins);
            reset();
            
        } else if (currentScore > targetNum) {
            losses++;
            alert("I'm sorry, you lost this round")
            $("#losses").html("Losses: " + losses);
            reset();
            
        }
    });
    
    // function for crystal four
    
    $("#crys-4").on("click", function () {
        userNum.push(crystalFour);
        console.log("crystal four is " + crystalFour);
        currentScore = sumArray(userNum);
        $("#points").text(currentScore);
        if (currentScore === targetNum) {
            wins++;
            alert("Winner!");
            $("#wins").html("Wins: " + wins);
            reset();
            
        } else if (currentScore > targetNum) {
            losses++;
            alert("I'm sorry, you lost this round")
            $("#losses").html("Losses: " + losses);
            reset();
            
        }
    });

});

