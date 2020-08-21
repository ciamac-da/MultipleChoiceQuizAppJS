// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What type of language HTML is?",
        imgSrc : "img/html.png",
        choiceA : "Markup language",
        choiceB : "Scripting language",
        choiceC : "Programming language",
        choiceD : "Network protocol",
        correct : "A"
    },{
        question : "Fundamental HTML Block is known as?",
        imgSrc : "img/html.png",
        choiceA : "HTML Element",
        choiceB : "HTML Attribute",
        choiceC : "HTML Body",
        choiceD : "HTML Tag",
        correct : "D"
    },{
        question : "Which HTML attribute is used to define inline styles?",
        imgSrc : "img/html.png",
        choiceA : "Style",
        choiceB : "Div",
        choiceC : "Font",
        choiceD : "Styles",
        correct : "A"
    },{
        question : "Which of the following method is used to get meta information of a resource?",
        imgSrc : "img/html.png",
        choiceA : "Top",
        choiceB : "Get",
        choiceC : "Head",
        choiceD : "Grab",
        correct : "C"
    },{
        question : "Choose the correct HTML tag for the smallest heading",
        imgSrc : "img/html.png",
        choiceA : "Small heading",
        choiceB : "H6",
        choiceC : "Heading small",
        choiceD : "H1",
        correct : "B"
    },{
        question : "Where is the correct place to insert a Javascript Code in HTML?",
        imgSrc : "img/html.png",
        choiceA : "Both of C and D",
        choiceB : "None of these",
        choiceC : "Head section",
        choiceD : "Body section",
        correct : "A"
    },{
        question : "The attribute of form tag is :",
        imgSrc : "img/html.png",
        choiceA : "Method",
        choiceB : "Both of A and D",
        choiceC : "None of these",
        choiceD : "Action",
        correct : "B"
    },{
        question : "The attribute of form tag is :",
        imgSrc : "img/html.png",
        choiceA : "Method",
        choiceB : "Both of A and D",
        choiceC : "None of these",
        choiceD : "Action",
        correct : "B"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },{
        question : "Which of the following tag is used for javascript?",
        imgSrc : "img/js.png",
        choiceA : "Footer",
        choiceB : "Article",
        choiceC : "Canvas",
        choiceD : "Body",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
