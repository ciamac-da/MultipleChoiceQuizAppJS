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
const alertMsg = document.getElementById("alertMsg");
// create our questions
let questions = [
    { // html 1
        question : "What type of language HTML is?",
        imgSrc : "img/html.png",
        choiceA : "Markup language",
        choiceB : "Scripting language",
        choiceC : "Programming language",
        choiceD : "Network protocol",
        correct : "A"
    },{ // html 2
        question : "Fundamental HTML Block is known as?",
        imgSrc : "img/html.png",
        choiceA : "HTML Element",
        choiceB : "HTML Attribute",
        choiceC : "HTML Body",
        choiceD : "HTML Tag",
        correct : "D"
    },{ // html 3
        question : "Which HTML attribute is used to define inline styles?",
        imgSrc : "img/html.png",
        choiceA : "style",
        choiceB : "div",
        choiceC : "font",
        choiceD : "styles",
        correct : "A"
    },{ // html 4
        question : "Which of the following method is used to get meta information of a resource?",
        imgSrc : "img/html.png",
        choiceA : "top",
        choiceB : "get",
        choiceC : "head",
        choiceD : "grab",
        correct : "C"
    },{ // html 5
        question : "Choose the correct HTML tag for the smallest heading",
        imgSrc : "img/html.png",
        choiceA : "Small heading",
        choiceB : "h6",
        choiceC : "Heading small",
        choiceD : "h1",
        correct : "B"
    },{ // html 6
        question : "Where is the correct place to insert a Javascript Code in HTML?",
        imgSrc : "img/html.png",
        choiceA : "Both of C and D",
        choiceB : "None of these",
        choiceC : "Head section",
        choiceD : "Body section",
        correct : "A"
    },{ // html 7
        question : "The attribute of form tag is:",
        imgSrc : "img/html.png",
        choiceA : "method",
        choiceB : "Both of A and D",
        choiceC : "None of these",
        choiceD : "action",
        correct : "B"
    },{ // html 8
        question : "Choose the correct HTML element to define emphasized text",
        imgSrc : "img/html.png",
        choiceA : "italic",
        choiceB : "i",
        choiceC : "em",
        choiceD : "strong",
        correct : "C"
    },{ // html 9
        question : "What is the correct HTML element for inserting a line break?",
        imgSrc : "img/html.png",
        choiceA : "br",
        choiceB : "lb",
        choiceC : "break",
        choiceD : "hr",
        correct : "A"
    },{ // html 10
        question : "HTML status code is:",
        imgSrc : "img/html.png",
        choiceA : "Three-digit",
        choiceB : "One-digit",
        choiceC : "Four-digit",
        choiceD : "Two-digit",
        correct : "A"
    },{ // css 1
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Computer Style Sheets",
        choiceB : "Creative Style Sheets",
        choiceC : "Cascading Style Sheets",
        choiceD : "Colorful Style Sheets",
        correct : "C"
    },{ // css 2
        question : "How do you insert a comment in a CSS file?",
        imgSrc   : "img/css.png",
        choiceA  : "// comment",
        choiceB  : "// comment //",
        choiceC  : "' comment",
        choiceD  : "/* comment*/",
        correct  : "D"
    },{ //css 3
        question : "Which property is used to change the background color?",
        imgSrc : "img/css.png",
        choiceA : "bgcolor",
        choiceB : "background-color",
        choiceC : "color",
        choiceD : "Background-color",
        correct : "B"
    },{ //css 4
        question : "Which CSS property is used to change the text color of an element?",
        imgSrc : "img/css.png",
        choiceA : "color",
        choiceB : "fgcolor",
        choiceC : "text-color",
        choiceD : "text-font",
        correct : "A"
    },{ //css 5
        question : "Which CSS property controls the text size?",
        imgSrc : "img/css.png",
        choiceA : "text-size",
        choiceB : "font-style",
        choiceC : "text-style",
        choiceD : "font-size",
        correct : "D"
    },{ //css 6
        question : "Which property is used to change the font of an element?",
        imgSrc : "img/css.png",
        choiceA : "font-style",
        choiceB : "font-weight",
        choiceC : "font-family",
        choiceD : "font-background",
        correct : "C"
    },{ //css 7
        question : "How do you make the text bold?",
        imgSrc : "img/css.png",
        choiceA : "font-weight:bold;",
        choiceB : "style:bold;",
        choiceC : "font:bold;",
        choiceD : "text:bold;",
        correct : "A"
    },{ //css 8
        question : "How do you select an element with id demo?",
        imgSrc : "img/css.png",
        choiceA : ".demo",
        choiceB : "#demo",
        choiceC : "demo",
        choiceD : "*demo",
        correct : "B"
    },{ //css 9
        question : "How do you select elements with class name 'test'?",
        imgSrc   : "img/css.png",
        choiceA  : "test",
        choiceB  : ".test",
        choiceC  : "#test",
        choiceD  : "*test",
        correct  : "B"
    },{ //css 10
        question : "How do you select all &#60;p&#62; elements where the parent is a &#60;div&#62;element?",
        imgSrc   : "img/css.png",
        choiceA  : "div + p",
        choiceB  : "div &#62; p",
        choiceC  : "div p",
        choiceD  : "div.p",
        correct  : "B"
    },{ // javascript 1
        question : "Which of the following tag is used for javascript?",
        imgSrc : "img/js.png",
        choiceA : "Footer",
        choiceB : "Article",
        choiceC : "Canvas",
        choiceD : "Body",
        correct : "C"
    },{ // javascript 2
        question : "Inside which HTML element do we put the JavaScript?",
        imgSrc : "img/js.png",
        choiceA : "&#60script&#62;",
        choiceB : "&#60;js&#62;",
        choiceC : "&#60;scripting&#62;",
        choiceD : "&#60;javascript&#62;",
        correct : "A"
    },{ // javascript 3
        question : "How do you create a function in JavaScript?",
        imgSrc : "img/js.png",
        choiceA : "function;myFunction()",
        choiceB : "function=myFunction()",
        choiceC : "function:myFunction()",
        choiceD : "function myFunction()",
        correct : "D"
    },{ // javascript 4
        question : "How to write an IF statement in JavaScript?",
        imgSrc : "img/js.png",
        choiceA : "if i==5 then",
        choiceB : "if i=5",
        choiceC : "if(i==5)",
        choiceD : "if i=5 then",
        correct : "C"
    },{ // javascript 5
        question : "How does a WHILE loop start?",
        imgSrc : "img/js.png",
        choiceA : "while(i<=10)",
        choiceB : "while(i<=10;i++)",
        choiceC : "while i= 1 to 10",
        choiceD : "while(i= 1 to 10)",
        correct : "A"
    },{ // javascript 6
        question : "How does a FOR loop start?",
        imgSrc : "img/js.png",
        choiceA : "for(i<=5;i++)",
        choiceB : "for(i=0;i<5;i++)",
        choiceC : "for i = 1 to 5",
        choiceD : "for(i=0;i<=5)",
        correct : "B"
    },{ // javascript 7
        question : "How can you add a comment in a JavaScript?",
        imgSrc : "img/js.png",
        choiceA : "/comment",
        choiceB : "'comment",
        choiceC : "&#60;!--comment--&#62;",
        choiceD : "//comment",
        correct : "D"
    },{ // javascript 8
        question : "How do you round the number 7.25, to the nearest integer?",
        imgSrc : "img/js.png",
        choiceA : "Math.round(7.25)",
        choiceB : "Math.rnd(7.25)",
        choiceC : "round(7.25)",
        choiceD : "rnd(7.25)",
        correct : "A"
    },{ // javascript 9
        question : "How do you find the number with the highest value of x and y?",
        imgSrc : "img/js.png",
        choiceA : "ceil(x,y)",
        choiceB : "Math.ceil(x,y)",
        choiceC : "Math.Max(x,y)",
        choiceD : "top(x,y)",
        correct : "C"
    },{ // javascript 10
        question : "Which operator is used to assign a value to a variable?",
        imgSrc : "img/js.png",
        choiceA : "-",
        choiceB : "*",
        choiceC : "x",
        choiceD : "=",
        correct : "D"
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
    }// This is how to change backgroundColor of timeGauge based on different "px"!
    let px = parseInt(timeGauge.style.width)
    if(px > 75 && px <= 120){
        timeGauge.style.backgroundColor = "orange"
        alertMsg.innerHTML =  'Make your decision!';
    }else if(px > 120 && px  <= 150 ){
        timeGauge.style.backgroundColor = "red"
        alertMsg.innerHTML =  'hurry up!';
    }else{
        timeGauge.style.backgroundColor = "green"
        alertMsg.innerHTML =  '';
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
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "flex";
    scoreDiv.style.justifyContent = "center";
    scoreDiv.style.textAlign = "center";
    scoreDiv.style.fontSize = "2em";
    scoreDiv.style.alignItems = "center";


    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    // choose different texts based on the scorePerCent
    let PerCentMsg = (scorePerCent >= 80) ? "<p>Awesome!</p>" :
                     (scorePerCent >= 60) ? "<p>Bravo!</p>" :
                     (scorePerCent >= 40) ? "<p>Hmmm Not Bad!</p>" :
                     (scorePerCent >= 20) ? "<p>Study more buddy!</p>" :
                     "<p>Disaster!!!</p>";


    //if( img === "img/5.png"){
    //    scoreDiv.innerHTML += "<p>Awesome!</p>"
    //}
    //if( img === "img/4.png"){
    //    scoreDiv.innerHTML += "<p>Bravo!</p>"
    //}
    //if( img === "img/3.png"){
    //    scoreDiv.innerHTML += "<p>hmmm Not Bad!</p>"
    //}
    //if( img === "img/2.png"){
    //    scoreDiv.innerHTML += "<p>Study more and come back again buddy!</p>"
    //}
    //if( img === "img/1.png"){
    //    scoreDiv.innerHTML += "<p>Disaster!!!</p>"
    //}


    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p class='newP'>"+ PerCentMsg + scorePerCent +"%</p>";
}