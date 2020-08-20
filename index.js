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