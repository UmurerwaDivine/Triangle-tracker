function myTriangle(){
    var sideOne=document.getElementById("nber").value;
    var sideTwo=document.getElementById("nber1").value;
    var sideThree=document.getElementById("nber2").value;
    var triangle=["Equilateral triangle","Isoscele triangle","scalene triangle"]
 
    if(sideOne === "" || sideTwo === "" || sideThree === "") {
        alert("Please enter three values");
    }
    if(sideOne+sideTwo>sideThree && sideOne+sideThree>sideTwo && sideTwo+sideThree>sideOne){
       
     if(sideOne===sideTwo && sideTwo===sideThree && sideTwo===sideOne){
       alert(triangle[0]);
       }
      else if(sideOne===sideTwo || sideTwo===sideThree || sideOne===sideThree ){
       alert(triangle[1]);
       }
   else if(sideOne!==sideTwo || sideOne!==sideThree || sideTwo!==sideThree){
       alert(triangle[2]);
   }
  }
   else {
    ("this not a triangle"); 
}
}

function myReset() {
    document.getElementById("myForm").reset();
}

