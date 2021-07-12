const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
const correctNumber =document.getElementById('correct-number');
const buttonA = document.getElementById('btn--a');
const buttonB = document.getElementById('btn--b');
const buttonC = document.getElementById('btn--c');
const buttonD = document.getElementById('btn--d');

var questionCounter = 0;

function startQuiz() {
    console.log('The quiz has started!');
    var btnGrid = document.getElementsByClassName('btn-grid');
    for (var i = 0; i < btnGrid.length; i += 1){
    btnGrid[i].style.display = 'block';
}
    document.getElementById('next-btn', 'question').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('question').style.display = 'block';

    generateQuestion(questionCounter);
    
}
startButton.addEventListener('click', startQuiz);

function generateQuestion(questionCounter) {
    questionContainer.innerHTML = questionSelection[questionCounter].question;
    buttonA.innerHTML = questionSelection[questionCounter].answer[0];
    buttonB.innerHTML = questionSelection[questionCounter].answer[1];
    buttonC.innerHTML = questionSelection[questionCounter].answer[2];
    buttonD.innerHTML = questionSelection[questionCounter].answer[3];
 }

function generateNextQuestion() {
    console.log('Next question loaded');
    questionCounter++;
      if (questionCounter == 10) {
          console.log('Quiz End');
          document.getElementById('question').style.display = 'none';
          document.getElementById('next-btn').style.display = 'none';
          document.getElementById('btn--a').style.display = 'none';
          document.getElementById('btn--b').style.display = 'none';
          document.getElementById('btn--c').style.display = 'none';
          document.getElementById('btn--d').style.display = 'none';
             if (correctNumber == 5) {
                 console.log('Message 1');
                document.getElementById('closing-message-1').style.display = 'block';
             } else {
                console.log('Message 2');
                document.getElementById('closing-message-2').style.display = 'block';
             }
          ;
          
        }
    generateQuestion(questionCounter);
    clearCorrectColor();
}

nextButton.addEventListener('click', generateNextQuestion);

function correctAnswer(e) {
    let selectedButton = e.target;
    var theAnswer = questionSelection[questionCounter].correct;
    var userAnswer = selectedButton.innerHTML;
    if (userAnswer == theAnswer) {
        console.log('Answer is correct');
        incrementScore();
        selectedButton.style.backgroundColor = "green";
    } else {
        console.log('Answer is wrong');
        incrementIncorrectScore();
        selectedButton.style.backgroundColor = "red";
    }
}

buttonA.addEventListener('click', correctAnswer);
buttonB.addEventListener('click', correctAnswer);
buttonC.addEventListener('click', correctAnswer);
buttonD.addEventListener('click', correctAnswer);

function clearCorrectColor() {
    document.getElementById('btn--a').style.backgroundColor = "white";
    document.getElementById('btn--b').style.backgroundColor = "white";
    document.getElementById('btn--c').style.backgroundColor = "white";
    document.getElementById('btn--d').style.backgroundColor = "white";
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct-number").innerText);
    document.getElementById("correct-number").innerText = ++oldScore;
}

function incrementIncorrectScore() {
    let wrongScore = parseInt(document.getElementById("incorrect-number").innerText);
    document.getElementById("incorrect-number").innerText = ++wrongScore;
}

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
];