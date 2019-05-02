


    // variables needed 
    var crystalOne = crys1();
    var crystalTwo = crys2();
    // var crystalThree = crys3();
    // var crystalFour = crys4();
    var pointsBox = 0;
    var targetNum = compNum();
    var userNum =[];
    var currentScore= sumArray();
    var wins = 0;
    var loses = 0;

    // creating random number for the computer
    function compNum() {
        return Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    }

    // function to get the sum of the userNum array
    function sumArray(userNum) {
        var sum = 0;

        // keeps saying userNum is undefined
        
        for (i = 0; i < userNum.length; i++) {
            sum = sum + userNum[i];
        }
        return sum;
    }
  
    // functions for each crystal
    function crys1() { 
        return Math.floor(Math.random()*12)+1;
    }
    function crys2() { 
        return Math.floor(Math.random()*7)+1;
    }
    // function crys3() { 
    //     return Math.floor(Math.random()*11)+1;
    // }
    // function crys4() { 
    //     return Math.floor(Math.random()*9)+1;
    // }
    // function pointsTotal(){

    // }
    
    // javascript to be run
    $(document).ready(function () {

    console.log("ready!");
    console.log(targetNum);
   
    if (currentScore < targetNum) {

console.log();
        
            // function for crystal one 
            $("#crys-1").on("click", function () {
                userNum.push(crystalOne);
                console.log(userNum.reduce(reducer));
                $("#points").text(sum);
                
            });


        
    }else if(currentScore === targetNum){

    }else{

    }
    
});

