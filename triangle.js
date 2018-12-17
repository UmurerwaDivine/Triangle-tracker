function myTriangle(){
    var sideOne=document.getElementById("nber").value;
    var sideTwo=document.getElementById("nber1").value;
    var sideThree=document.getElementById("nber2").value;
  
    if(sideOne === "" || sideTwo === "" || sideThree === "") {
        alert("Please enter three values");
    }
  else if(sideOne===sideTwo && sideOne===sideThree){
       alert("This triangle is Equilateral");
   }
   else if(sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree ){
       alert("This triangle is Isoscele");
   }
   else if(sideOne+sideTwo>sideThree && sideOne+sideThree>sideTwo && sideTwo+sideThree>sideOne){
       alert("This triangle is scalene")
   }
   else /*if(sideOne+sideTwo<=sideThree || sideOne+sideThree<=sideTwo || sideTwo+sideThree<=sideOne)*/{
    ("this not a triangle"); 
}
  
}
function myReset() {
    document.getElementById("myForm").reset();
}

