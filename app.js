var q1 =["There are currently vaccines for the following coronaviruses:","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q2 =["2","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q3 =["3","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q4 =["4","3","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q5 =["5","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q6 =["6","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q7 =["7","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q8 =["8","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q9 =["9","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q10 =["10","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];

var quiz=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

var tracker=0;


  var x=document.getElementsByClassName("question");
  x[0].innerHTML=quiz[0][0];
  var y=document.getElementsByClassName("option");  //OPTIMISE IT LATER
  for(i=0;i<y.length;i++)
  {
      y[i].innerHTML=quiz[tracker][i+1];
  }

//function to assign the next question data to next question elements
  function assignNext(){
    if(tracker<=9) // checking if it exceeds
    {
      tracker++;
      x[0].innerHTML=quiz[tracker][0];
      var i;
      for(i=0;i<y.length;i++)
      {
          y[i].innerHTML=quiz[tracker][i+1];
      }

    }

  }
