//question and options database, stored in a multidimensional array
var q1 =["There are currently vaccines for the following coronaviruses:","GONORHOEA","COVID","SARS AND MERS","NONE OF THE ABOVE"];
var q2 =["About what percentage of infected people recover without needing hospital treatment according to the World Health Organisation website?","60%","70%","80%","90%"];
var q3 =["How does weather seem to affect the novel coronavirus?","The virus can’t survive in hot, humid climates.","Cold temperatures can kill the virus.","Not yet known","Different strains react differently"];
var q4 =["Which one of these is not a symtom of COVID-19?","Fever","Cold","Nasal Congestion","Blurry Vision"];
var q5 =["What is the lifetime of the virus on Plastic goods?","72 hours and more","45 minutes","24 hours","8 hours"];
var q6 =["What does the virus affect first?","Instagram","College","Lungs","Heart"];
var q7 =["Workers with increased exposure-risk include those employed in which industry:","Healthcare","Aviation Industry","Waste Management","ALL OF THE ABOVE"];
var q8 =["What is the required and mandated period for quarantine?","As long as I want","20 days","14 days","What is quarantine?:)"];
var q9 =["Where did the first case of COVID appear?","Mexico","Hogwarts","Wuhan","Jurrasic Park"];
var q10 =["Which age group has been dealt with the worst blow by covid?","Under 10 years","50-65 years","Over 65 years","Age is no barrier!"];

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

  //function to assign the previous question data to previous question elements
    function assignPrev(){
      if(tracker<=9) // checking if it exceeds
      {
        tracker--;
        x[0].innerHTML=quiz[tracker][0];
        var i;
        for(i=0;i<y.length;i++)
        {
            y[i].innerHTML=quiz[tracker][i+1];
        }

      }

    }
