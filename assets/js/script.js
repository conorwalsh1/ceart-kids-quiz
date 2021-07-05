const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const buttonA = document.getElementById('btn--a');
const buttonB = document.getElementById('btn--b');
const buttonC = document.getElementById('btn--c');
const buttonD = document.getElementById('btn--d');

var score = 0;
let i = 0;
var questionCounter = 0;

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

    generateFirstQuestion(questionCounter);
    
}
startButton.addEventListener('click', startQuiz);

function generateFirstQuestion(questionCounter) {
    let firstQuestion = questionSelection[questionCounter];
    questionContainer.innerHTML = questionSelection[questionCounter].question;
    let firstAnswerA = questionSelection[questionCounter];
    buttonA.innerHTML = questionSelection[questionCounter].answer[0];
    let firstAnswerB = questionSelection[questionCounter];
    buttonB.innerHTML = questionSelection[questionCounter].answer[1];
    let firstAnswerC = questionSelection[questionCounter];
    buttonC.innerHTML = questionSelection[questionCounter].answer[2];
    let firstAnswerD = questionSelection[questionCounter];
    buttonD.innerHTML = questionSelection[questionCounter].answer[3];
 }

function generateNextQuestion() {
    questionCounter++;
    generateFirstQuestion(questionCounter);
    clearCorrectColor()
}

nextButton.addEventListener('click', generateNextQuestion);

function correctAnswer() {
    document.getElementById('btn--b').style.backgroundColor = "green"
    document.getElementById('btn--a').style.backgroundColor = "red"
    document.getElementById('btn--c').style.backgroundColor = "red"
    document.getElementById('btn--d').style.backgroundColor = "red"
    }

    buttonB.addEventListener('click', incrementScore())

function clearCorrectColor() {
    document.getElementById('btn--a').removeAttribute("style");
    document.getElementById('btn--a').style.backgroundColor = "red"
    document.getElementById('btn--c').style.backgroundColor = "red"
    document.getElementById('btn--d').style.backgroundColor = "red"
}


    

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score-number").innerText);
    document.getElementById("score-number").innerText = ++oldScore;
}



function finalResult () {

}

var questionSelection = [
    {
        'question' : 'Question. If you have "dhá úll", how many apples do you have?',
        'answer' : ['1', '2', '3', '4']
    }, 
    {
        'question' : 'Question. If a house is painted the colour "dearg", what colour is it?',
        'answer' : ['Black', 'Red', 'Blue', 'Pink']
    },
    {
        'question' : 'Question. "Bó" is the name of what farm animal?',
        'answer' : ['Cow', 'Pig', 'Sheep', 'Goat']
    },
    {
        'question' : 'Question. "Uisce" is the name for what kind of drink?',
        'answer' : ['Milk', 'Orange Juice', 'Water', 'Tea']
    },
    {
        'question' : 'Question. If I go to the "siopa", where am I going?',
        'answer' : ['Cinema', 'Shop', 'Library', 'Beach']
    },
    {
        'question' : 'Question. If Oisín said his hair is the colour "dubh", what colour is his hair?',
        'answer' : ['Black', 'Blonde', 'Brown', 'Ginger']
    },
    {
        'question' : 'Question. If the sky is the colour "gorm", what colour is the sky?',
        'answer' : ['Blue', 'Yellow', 'Grey', 'Black']
    },
    {
        'question' : 'Question. "Corcaigh" is the name of which Irish county?',
        'answer' : ['Dublin', 'Cork', 'Limerick', 'Galway']
    },
    {
        'question' : 'Question. Who is the "muinteoir" in the classroom?',
        'answer' : ['Pupil', 'Teacher', 'Principal', 'Parent']
    },
    {
        'question' : 'Question. What is the Irish word for "bed"?',
        'answer' : ['Leaba', 'Leanach', 'Leabhar', 'Lean']
    }
]