function myTriangle(){
    var sideOne=document.getElementById("nber").value;
    var sideTwo=document.getElementById("nber").value;
    var sideThree=document.getElementById("nber").value;
   if(sideOne===sideTwo && sideOne===sideThree){
       alert("This triangle is Equilateral");
   }
   else if(sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree ){
       alert("This triangle is isoscele");
   }
  // else if()
   else{
       ("this not a triangle");
   }
}

