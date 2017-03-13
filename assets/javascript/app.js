  $(document).ready(function(){
   
    $("#start").click(function(){
      $("#startPage").hide();

      $("#game").fadeIn();
      run();
    });




    //  Set our number counter 
    var timer = 30;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);
    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);
   

    var userChoiceOne;
    var userChoiceTwo;
    var userChoiceThree;
    var userChoicefour;
    
    var answerOne=1;
    var answerTwo=3;
    var answerThree=2;
    var answerFour=4;
    var correctChoices=0;
    var incorrectChoices =0;


    $("#oneChoice1").one("click",function(){
      var  userChoiceOneFirst = 1;
      if (userChoiceOneFirst === answerOne){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");
      }
      else{
      incorrectChoices++;
      }

    });

     $("#oneChoice2").one("click",function(){
      var userChoiceOneSecond = 2;
      if (userChoiceOneSecond === answerOne){
        correctChoices++;
         $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

      $("#oneChoice3").one("click",function(){
      var userChoiceOneThird = 3;
      if (userChoiceOneThird === answerOne){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

       $("#oneChoice4").one("click",function(){
      var userChoiceOneFourth = 4;
      if (userChoiceOneFourth === answerOne){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });



       $("#twoChoice1").one("click",function(){
      var  userChoiceTwoFirst = 1;
      if (userChoiceTwoFirst === answerTwo){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");
      }
      else{
      incorrectChoices++;
      }

    });

     $("#twoChoice2").one("click",function(){
      var userChoiceTwoSecond = 2;
      if (userChoiceTwoSecond === answerTwo){
        correctChoices++;
         $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

      $("#twoChoice3").one("click",function(){
      var userChoiceTwoThird = 3;
      if (userChoiceTwoThird === answerTwo){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

       $("#twoChoice4").one("click",function(){
      var userChoiceTwoFourth = 4;
      if (userChoiceTwoFourth === answerTwo){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });


$("#threeChoice1").one("click",function(){
      var  userChoiceThreeFirst = 1;
      if (userChoiceThreeFirst === answerThree){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");
      }
      else{
      incorrectChoices++;
      }

    });

     $("#threeChoice2").one("click",function(){
      var userChoiceThreeSecond = 2;
      if (userChoiceThreeSecond === answerThree){
        correctChoices++;
         $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

      $("#threeChoice3").one("click",function(){
      var userChoiceThreeThird = 3;
      if (userChoiceThreeThird === answerThree){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

       $("#threeChoice4").one("click",function(){
      var userChoiceThreeFourth = 4;
      if (userChoiceThreeFourth === answerThree){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });



$("#fourChoice1").one("click",function(){
      var  userChoiceFourFirst = 1;
      if (userChoiceFourFirst === answerFour){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");
      }
      else{
      incorrectChoices++;
      }

    });

     $("#fourChoice2").one("click",function(){
      var userChoiceFourSecond = 2;
      if (userChoiceFourSecond === answerFour){
        correctChoices++;
         $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

      $("#fourChoice3").one("click",function(){
      var userChoiceFourThird = 3;
      if (userChoiceFourThird === answerFour){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

       $("#fourChoice4").one("click",function(){
      var userChoiceFourFourth = 4;
      if (userChoiceFourFourth === answerFour){
        correctChoices++;
        $("#display").html("You have " + correctChoices+ 
        " correct !");

      }
      else{
      incorrectChoices++;
      }

    });

       $("#done").click(function done(){
        stop();
        //$("#game").hide();
        //$("#donePage").fadeIn();
       });

    

    function run() {
      intervalId = setInterval(decrement, 1000);

    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      timer--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2> Time Remaining : " + timer + "</h2>");
      //  Once number hits zero...
      if (timer === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        //alert("Time Up!");
        timer = 30;
      }
    }
 
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      $("#game").hide();
        $("#donePage").fadeIn();


      $("#display").html("GAME OVER : You had " + correctChoices + " right and " + incorrectChoices + " wrong ");
      $("#doneDisplay").html("GAME OVER : You had " + correctChoices + " right and " + incorrectChoices + " wrong ");

    }

    

  });