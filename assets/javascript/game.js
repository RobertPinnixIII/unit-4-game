




var targetNumber = [];
for (var i =0, t=1; i<t; i++) {
    targetNumber.push(Math.round(Math.random() * (120 - 19) + 19));

}
console.log(targetNumber);

var counter = 0;






   
   var crystalarray1 = (Math.round(Math.random() * (12 - 1) + 1))
   ;
   
   
   
   console.log(crystalarray1);

    
    
    var crystalarray2 =   (Math.round(Math.random() * (12 - 1) + 1));
    
   
    console.log(crystalarray2);

    var crystalarray3 = (Math.round(Math.random() * (12 - 1) + 1));
    
    
    console.log(crystalarray3);

    var crystalarray4 = (Math.round(Math.random() * (12 - 1) + 1));
    

    console.log(crystalarray4);





    var totalscore = (crystalarray1)  + (crystalarray2)  + (crystalarray3)  + (crystalarray4);
    
      
    
    


console.log("totalscore");





   















//jquery here
$(document).ready(function(){

    $(".number").html("<h2>" + targetNumber + "</h2>");
    $(".number").addClass("number");

    $(".Crystal1").click(function(){
    $(".scorebox").append(   totalscore  );
    
    
    console.log("crystal1")

    });

    $(".Crystal2").click(function(){
        $(".scorebox").append( totalscore);
        console.log("crystal2")
    });


    $(".Crystal3").click(function(){
        $(".scorebox").append(totalscore);
        console.log("crystal3")
    });
    
    $(".Crystal4").click(function(){
        $(".scorebox").append(totalscore);
        console.log("crystal4")

        

        
    });


    /*need to figure out how you get all the clcks added up as
    one number. this is the part that giving me the hardest time.
    the rest i know hw to write.  need to output wins and losses, and 
    set a reset function for game over win or lose. i know how to do all of
    that exept getting the clicks to add up. its extremely frustrating.*/ 

    



    


   
    


    


    














});