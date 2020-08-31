//question and options database, stored in a multidimensional array
var q1 = ["There are currently vaccines for the following coronaviruses:", "GONORHOEA", "COVID", "SARS AND MERS", "NONE OF THE ABOVE", 2];
var q2 = ["About what percentage of infected people recover without needing hospital treatment according to the World Health Organisation website?", "60%", "70%", "80%", "90%", 2];
var q3 = ["How does weather seem to affect the novel coronavirus?", "The virus can’t survive in hot, humid climates.", "Cold temperatures can kill the virus.", "Not yet known", "Different strains react differently", 0];
var q4 = ["Which one of these is not a symtom of COVID-19?", "Fever", "Cold", "Nasal Congestion", "Blurry Vision", 3];
var q5 = ["What is the lifetime of the virus on Plastic goods?", "72 hours and more", "45 minutes", "24 hours", "8 hours", 0];
var q6 = ["What does the virus affect first?", "Instagram", "College", "Lungs", "Heart", 2];
var q7 = ["Workers with increased exposure-risk include those employed in which industry:", "Healthcare", "Aviation Industry", "Waste Management", "ALL OF THE ABOVE", 3];
var q8 = ["What is the required and mandated period for quarantine?", "As long as I want", "20 days", "14 days", "What is quarantine?:)", 2];
var q9 = ["Where did the first case of COVID appear?", "Mexico", "Hogwarts", "Wuhan", "Jurrasic Park", 2];
var q10 = ["Which age group has been dealt with the worst blow by covid?", "Under 10 years", "50-65 years", "Over 65 years", "Age is no barrier!", 1];

var quiz = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var randomtracker =[0,1,2,3,4,5,6,7,8,9];


//function to randomly shuffle randomtracker array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;


  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(randomtracker);

var tracker = 0;
var score = 0;

var x = document.getElementsByClassName("question");
x[0].innerHTML = quiz[randomtracker[tracker]][0];
var y = document.getElementsByClassName("option"); //OPTIMISE IT LATER
for (i = 0; i < y.length; i++) {
    y[i].innerHTML = quiz[randomtracker[tracker]][i + 1];
}


var name=window.prompt("Your name is ");

//function to check if correct or wrong
function check(id) {
    var t = quiz[randomtracker[tracker]][5];
    if (id.innerHTML == quiz[randomtracker[tracker]][t + 1]) {

        //change format
        id.style.background = "rgb(0, 255, 0)";
        score++;
        if (tracker < 9)
            alert("Correct answer! Do press NEXT to proceed.");
        else
            alert("Correct Answer! PRESS SCORE!!!!");


    } else {
        id.style.background = "#ff3333";
        if (tracker < 9)
            alert("Sorry! Wrong answer! Don't give up though. Do press NEXT to proceed.");
        else
            alert("Sorry! Wrong answer! PRESS SCORE!!!!");


    }
}

//display SCORE
function score1() {
    alert(name+ " YOUR SCORE IS " + score);
}

//randomly orienting the questions



//function to assign the next question data to next question elements
function assignNext() {

  tracker++;



    if (tracker <9) // checking if it exceeds
    {


              x[0].innerHTML = quiz[randomtracker[tracker]][0];
              var i;
              for (i = 0; i < y.length; i++) {
              y[i].style.background = "orange";
              y[i].innerHTML = quiz[randomtracker[tracker]][i + 1];
        }

    }
    else
    {
          var k = document.getElementsByClassName("disabled");
      k[0].classList.remove("disabled");

      x[0].innerHTML = quiz[randomtracker[tracker]][0];
      var i;
      for (i = 0; i < y.length; i++) {
          y[i].style.background = "orange";
          y[i].innerHTML = quiz[randomtracker[tracker]][i + 1];
    }

}

}

//function to assign the previous question data to previous question elements
function assignPrev() {
    if (tracker <= 9) // checking if it exceeds
    {
        tracker--;
        x[0].innerHTML = quiz[randomtracker[tracker]][0];
        var i;
        for (i = 0; i < y.length; i++) {
            y[i].innerHTML = quiz[randomtracker[tracker]][i + 1];
        }

    }

}



var mins = 2;


        var secs = mins * 60;


        function countdown() {
            setTimeout('Decrement()', 60);
        }


        function Decrement() {
            if (document.getElementById) {
                minutes = document.getElementById("minutes");
                seconds = document.getElementById("seconds");

                if (seconds < 59) {
                    seconds.value = secs;
                }


                else {
                    minutes.value = getminutes();
                    seconds.value = getseconds();
                }

                if (mins < 1) {
                    minutes.style.color = "red";
                    seconds.style.color = "red";
                }

                if (secs <= 0) {
                    alert(name + ' Time up! Your score is ' + score);

                    minutes.value = 0;
                    seconds.value = 0;
                }

                else {
                    secs--;
                    setTimeout('Decrement()', 1000);
                }
            }
        }

        function getminutes() {

            mins = Math.floor(secs / 60);
            return mins;
        }

        function getseconds() {

            return secs - Math.round(mins * 60);
        }
