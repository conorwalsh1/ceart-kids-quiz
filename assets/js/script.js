const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question');
const welcomeMessage = document.getElementById('welcome-message');
const closingMessage = document.getElementById('closing-message');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreNumber =document.getElementById('score-number');
const buttonA = document.getElementById('btn--a');
const buttonB = document.getElementById('btn--b');
const buttonC = document.getElementById('btn--c');
const buttonD = document.getElementById('btn--d');

var score = 0;
let i = 0;
var questionCounter = 0;
var questLength = questionCounter.length

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
    console.log('Next question loaded')
    questionCounter++
      if (questionCounter == 10) {
          console.log('Quiz End');
          document.getElementById('question').style.display = 'none';
          document.getElementById('next-btn').style.display = 'none';
          document.getElementById('btn--a').style.display = 'none';
          document.getElementById('btn--b').style.display = 'none';
          document.getElementById('btn--c').style.display = 'none';
          document.getElementById('btn--d').style.display = 'none';
          document.getElementById('closing-message').style.display = 'block'

        }
    generateFirstQuestion(questionCounter);
    clearCorrectColor()
}

nextButton.addEventListener('click', generateNextQuestion);

function correctAnswer() {
    var theAnswer = questionSelection[questionCounter].correct
    if (theAnswer == true) {
        style.backgroundColor = "green"
    } else {
        style.backgroundColor = "red"
    }
}
buttonA.onclick = correctAnswer();
buttonB.onclick = correctAnswer();
buttonC.onclick = correctAnswer();
buttonD.onclick = correctAnswer();






    // document.getElementById('btn--b').style.backgroundColor = "green"
    // document.getElementById('btn--a').style.backgroundColor = "red"
    // document.getElementById('btn--c').style.backgroundColor = "red"
    // document.getElementById('btn--d').style.backgroundColor = "red"
    // }

    // buttonB.addEventListener('click', incrementScore())

function clearCorrectColor() {
    document.getElementById('btn--a').style.backgroundColor = "white"
    document.getElementById('btn--b').style.backgroundColor = "white"
    document.getElementById('btn--c').style.backgroundColor = "white"
    document.getElementById('btn--d').style.backgroundColor = "white"
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score-number").innerText);
    document.getElementById("score-number").innerText = ++oldScore;
}



// function finalResult () {
//     if (questionSelection[questionCounter].question = null) {
//         alert(`Congratulations! You scored ${oldScore}/10! Great effort!`)
//     }
// }

var questionSelection = [
    {
        'question' : 'Question 1. If you have "dhá úll", how many apples do you have?',
        'answer' : ['1', '2', '3', '4'],
        'correct' : '2'
    }, 
    {
        'question' : 'Question 2. If a house is painted the colour "dearg", what colour is it?',
        'answer' : ['Black', 'Pink', 'Blue', 'Red'],
        'correct' : 'Red'
    },
    {
        'question' : 'Question 3. "Bó" is the name of what farm animal?',
        'answer' : ['Pig', 'Sheep', 'Cow', 'Goat'],
        'correct' : 'Cow'
    },
    {
        'question' : 'Question 4. "Uisce" is the name for what kind of drink?',
        'answer' : ['Water', 'Milk', 'Orange Juice', 'Tea'],
        'correct' : 'Water'
    },
    {
        'question' : 'Question 5. If I go to the "siopa", where am I going?',
        'answer' : ['Cinema', 'Shop', 'Library', 'Beach'],
        'correct' : 'Shop'
    },
    {
        'question' : "Question 6. John's hair is the colour 'dubh', what colour is John's hair?",
        'answer' : ['Blonde', 'Brown', 'Black', 'Ginger'],
        'correct' : 'Black'
    },
    {
        'question' : 'Question 7. If the sky is the colour "gorm", what colour is the sky?',
        'answer' : ['Yellow', 'Black', 'Grey', 'Blue'],
        'correct' : 'Blue'
    },
    {
        'question' : 'Question 8. "Corcaigh" is the name of which Irish county?',
        'answer' : ['Dublin', 'Cork', 'Limerick', 'Galway'],
        'correct' : 'Cork'
    },
    {
        'question' : 'Question 9. Who is the "muinteoir" in the classroom?',
        'answer' : ['Teacher', 'Pupil', 'Principal', 'Parent'],
        'correct' : 'Teacher'
    },
    {
        'question' : 'Question 10. What is the Irish word for "bed"?',
        'answer' : ['Leanach', 'Leabhar', 'Leaba', 'Lean'],
        'correct' : 'Leaba'
    }
]