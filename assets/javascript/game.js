


    // variables needed 
    var crystalOne = Math.floor(Math.random()*12)+1;
    var crystalTwo = Math.floor(Math.random()*12)+1;
    var crystalThree = Math.floor(Math.random()*12)+1;
    var crystalFour = Math.floor(Math.random()*12)+1;
    var pointsBox = 0;
    $('#points').text(pointsBox);
    var userNum = 0;
    var wins = 0;
    var loses = 0;


    var compNum = function () {
        Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    }
    // variables for where text goes

    // do I need to define these?
    var pointsText = document.getElementById("points");
    var winsText = document.getElementById("wins");
    var lossestext = document.getElementById("losses");

    // javascript to be run
    $(document).ready(function () {

    console.log("ready!");

    if (userNum < compNum) {

        // function for crystal one 10 points
        $("#crys-1").on("click", function () {
            console.log("crystal1 clicked");
            pointsBox += 10;
           

        });
    }
});