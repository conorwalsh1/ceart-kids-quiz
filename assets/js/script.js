const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
const buttonA = document.getElementById('btn--a');
const buttonB = document.getElementById('btn--b');
const buttonC = document.getElementById('btn--c');
const buttonD = document.getElementById('btn--d');

var questionCounter = 0;

/**
 * This function will start the quiz by removing the welcome message
 * and replacing it with questions and answers and by replacing the 
 * 'Start Quiz' button with a 'Next' button.
 */

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

/**
 * This function will populate the questions and their subsequent set 
 * of answers each time it is called.
 */

function generateQuestion(questionCounter) {
    questionContainer.innerHTML = questionSelection[questionCounter].question;
    buttonA.innerHTML = questionSelection[questionCounter].answer[0];
    buttonB.innerHTML = questionSelection[questionCounter].answer[1];
    buttonC.innerHTML = questionSelection[questionCounter].answer[2];
    buttonD.innerHTML = questionSelection[questionCounter].answer[3];
 }

 /**
  * This function will generate the next question and set of answers once the 
  * 'Next' button is clicked. It will increment by one each time until it reaches 
  * 10 which is the amount of questions in the quiz. Once the quiz has ended, it 
  * clears the questions and answer buttons and displays a closing message to allow
  * the user know that the quiz has ended. By clicking the 'Next' button, the colour
  * that shows for when an answer is either correct or incorrect will clear whilst
  * the question is subsequently loaded.
  */

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
        document.getElementById('closing-message-1').style.display = 'block';
        return;
    }
    generateQuestion(questionCounter);
    clearCorrectColor();
}

nextButton.addEventListener('click', generateNextQuestion);

/**
 * This function detects whether the user has clicked the right answer or not. 
 * It does this by comparing the answer button the user clicks with the 
 * correct answer set in the questionSelection variable. If the user is 
 * correct, the button selected will turn green and the 'Correct' score tally
 * will increment by one, whilst if they are incorrect, the button will turn 
 * red and the 'Incorrect' score tally will increment by one.
 */

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

/**
 * This function is called within the generateNextQuestion function
 * when a user clicks the "Next" button. It will reset the colour 
 * of the button or buttons selected before the next set of questions and 
 * answers load.
 */

function clearCorrectColor() {
    document.getElementById('btn--a').style.backgroundColor = "white";
    document.getElementById('btn--b').style.backgroundColor = "white";
    document.getElementById('btn--c').style.backgroundColor = "white";
    document.getElementById('btn--d').style.backgroundColor = "white";
}

/**
 * This function increments the Correct score tally by 1 if the
 * user clicks the correct answer. It was taken from the 'Love Maths'
 * walkthrough project.
 */

function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct-number").innerText);
    document.getElementById("correct-number").innerText = ++oldScore;
}

/**
 * This function increments the Incorrect score tally by 1 if the
 * user clicks the incorrect answer or answers. It was taken from the 'Love Maths'
 * walkthrough project.
 */

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