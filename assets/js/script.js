const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const buttonB = document.getElementById('btn--b');
const scoreTracker = document.getElementById('score-number');

var score = 0;
let i = 0;

function startQuiz() {
    console.log('The quiz has started!')
    var btnGrid = document.getElementsByClassName('btn-grid');
    for (var i = 0; i < btnGrid.length; i += 1){
    btnGrid[i].style.display = 'block';
}
    document.getElementById('next-btn', 'question').style.display = 'block'
    document.getElementById('start-btn').style.display = 'none'
    document.getElementById('welcome-message').style.display = 'none'
    document.getElementById('question').style.display = 'block'
    document.getElementById('question').innerHTML = questionSelection1.question;
    document.getElementById('btn--a').innerHTML = answerSelection1.answer[0];
    document.getElementById('btn--b').innerHTML = answerSelection1.answer[1];
    document.getElementById('btn--c').innerHTML = answerSelection1.answer[2];
    document.getElementById('btn--d').innerHTML = answerSelection1.answer[3];
}
startButton.addEventListener('click', startQuiz);

function nextQuestion() {
    

nextButton.addEventListener('click', nextQuestion()) 
}

function correctAnswer() {
        document.getElementById('btn--b').style.backgroundColor = "green"
        document.getElementById('btn--a').style.backgroundColor = "red"
        document.getElementById('btn--c').style.backgroundColor = "red"
        document.getElementById('btn--d').style.backgroundColor = "red"
    }

    buttonB.addEventListener('click', incrementScore())

    

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score-number").innerText);
    document.getElementById("score-number").innerText = ++oldScore;
}



function finalResult () {

}

var questionSelection1 = 
    {
        'question' : 'Question. If you have "dhá úll", how many apples do you have?'
    }
var answerSelection1 =
    {
        'answer' : ['1', '2', '3', '4']
    }   
        
var questionSelection2 = 
    {
        'question' : 'Question. If a house is painted the colour "dearg", what colour is it?'
    }

var answerSelection2 =
    {
        'answer' : ['Black', 'Red', 'Blue', 'Pink']
    }   

    function secondQuestion() {
        document.getElementById('question').innerHTML = questionSelection2.question;
        document.getElementById('btn--a').innerHTML = answerSelection2.answer[0];
        document.getElementById('btn--b').innerHTML = answerSelection2.answer[1];
        document.getElementById('btn--c').innerHTML = answerSelection2.answer[2];
        document.getElementById('btn--d').innerHTML = answerSelection2.answer[3];
} 

var questionSelection3 = 
    {
        'question' : 'Question. "Bó" is the name of what farm animal?'
    }

var answerSelection3 =
    {
        'answer' : ['Cow', 'Pig', 'Sheep', 'Goat']
    }
 
var questionSelection4 = 
    {
        'question' : 'Question. "Uisce" is the name for what kind of drink?'
    }

var answerSelection4 =
    {
        'answer' : ['Milk', 'Orange Juice', 'Water', 'Tea']
    }

var questionSelection5 = 
    {
        'question' : 'Question. If I go to the "siopa", where am I going?'
    }

var answerSelection5 =
    {
        'answer' : ['Cinema', 'Shop', 'Library', 'Beach']
    }

var questionSelection6 = 
    {
        'question' : 'Question. If Oisín said his hair is the colour "dubh", what colour is his hair?'
    }

var answerSelection6 =
    {
        'answer' : ['Black', 'Blonde', 'Brown', 'Ginger']
    }

var questionSelection7 = 
    {
        'question' : 'Question. If the sky is the colour "gorm", what colour is the sky?'
    }

var answerSelection7 =
    {
        'answer' : ['Blue', 'Yellow', 'Grey', 'Black']
    }

var questionSelection8 = 
    {
        'question' : 'Question. "Corcaigh" is the name of which Irish county?'
    }

var answerSelection8 =
    {
        'answer' : ['Dublin', 'Cork', 'Limerick', 'Galway']
    }

var questionSelection9 = 
    {
        'question' : 'Question. Who is the "muinteoir" in the classroom?'
    }

var answerSelection9 =
    {
        'answer' : ['Pupil', 'Teacher', 'Principal', 'Parent']
    }

var questionSelection10 = 
    {
        'question' : 'Question. What is the Irish word for "bed"?'
    }

var answerSelection10 =
    {
        'answer' : ['Leaba', 'Leanach', 'Leabhar', 'Lean']
    }