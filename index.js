// Select and save all elements in constants
const start     = document.getElementById("start");
const quiz      = document.getElementById("quiz");
const question  = document.getElementById("question");
const qImg      = document.getElementById("qImg");
const choiceA   = document.getElementById("A");
const choiceB   = document.getElementById("B");
const choiceC   = document.getElementById("C");
const counter   = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress  = document.getElementById("progress");
const scoreDiv  = document.getElementById("scoreContainer");


// Here our questions Array!
let questions = [
    {
        question : "What does HTML stand for?",
        imgsrc   : "img/html.png",
        choiceA  : "Correct",
        choiceB  : "Wrong",
        choiceC  : "Wrong",
        correct  :  "A"
    },
    {
        question : "What does CSS stand for?",
        imgsrc   : "img/css.png",
        choiceA  : "Wrong",
        choiceB  : "Correct",
        choiceC  : "Wrong",
        correct  :  "B"
    },
    {
        question : "What does JAVASCRIPT stand for?",
        imgsrc   : "img/js.png",
        choiceA  : "Wrong",
        choiceB  : "Wrong",
        choiceC  : "Correct",
        correct  :  "C"
    },
];



// Let create some Variables

// To get the last question!
const lastQuestion   = question.length -1;
// We can keep track running question!
let runningQuestion  = 0;

// we need a render function for our questions!
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML     = "<img src="+ q.imgsrc + ">";
    choiceA.innerHTML  = q.choiceA;
    choiceB.innerHTML  = q.choiceB;
    choiceC.innerHTML  = q.choiceC;
}

start.style.display = "none";
renderQuestion();
quiz.style.display  = "block";
renderProgress();

// Render progress
function renderProgress(){
    for( let qIndex = 0; qIndex <= lastQuestion;
        qIndex++){
            progress.innerHTML += "<div class='prog' id="+
            qIndex +"></div>";
        }
}

// Counter render
let count;
const questionTime = 10; // 10s
const gaugeWidth   = 150; //150px
const gaugeUnit    = gaugeWidth / questionTime;