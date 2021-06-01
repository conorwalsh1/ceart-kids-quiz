const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    currentQuestionIndex = 0
    
}

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionElement.innerText = question.question
}

function selectAnswer () {

}

function incrementScore () {
    
}

const questions = [
    {
        question: '1. If you have "dhá úll", how many apples do you have?',
        answers: [
        { text: '1', correct: false },
        { text: '2', correct: true },
        { text: '3', correct: false }
        ]
    },
    {
        question: '2. If a house is painted the colour "dearg", what colour is it?',
        answers: [
            { text: 'Black', correct: false },
            { text: 'Red', correct: true },
            { text: 'Blue', correct: false }
            ]
    },
    {
        question: '3. "Bó" is the name of what farm animal?',
        answers: [
            { text: 'Cow', correct: true },
            { text: 'Pig', correct: false },
            { text: 'Sheep', correct: false }
            ]
    },
    {
        question: '4. "Uisce" is the name for what kind of drink?',
        answers: [
            { text: 'Milk', correct: false },
            { text: 'Orange Juice', correct: false },
            { text: 'Water', correct: true }
            ]
    },
    {
        question: '5. If I go to the "siopa", where am I going?',
        answers: [
            { text: 'Cinema', correct: false },
            { text: 'Shop', correct: true },
            { text: 'Library', correct: false }
            ]
    },
    {
        question: '6. If Oisín said his hair is the colour "fionn", what colour is his hair?',
        answers: [
            { text: 'Black', correct: false },
            { text: 'Blonde', correct: true },
            { text: 'Brown', correct: false }
            ]
    },
    {
        question: '7. If the sky is the colour "gorm", what colour is the sky?',
        answers: [
            { text: 'Blue', correct: true },
            { text: 'Yellow', correct: false },
            { text: 'Grey', correct: false }
            ]
    },
    {
        question: '8. "Corcaigh" is the name of which Irish county?',
        answers: [
            { text: 'Dublin', correct: false },
            { text: 'Cork', correct: true },
            { text: 'Limerick', correct: false }
            ]
    },
    {
        question: '9. Who is the "muinteoir" in the classroom?',
        answers: [
            { text: 'Pupil', correct: false },
            { text: 'Teacher', correct: true },
            { text: 'Principal', correct: false }
            ]
    },
    {
        question: '10. What is the Irish word for "bed"?',
        answers: [
            { text: 'Leaba', correct: false },
            { text: 'Leanach', correct: true },
            { text: 'Leabhar', correct: false }
            ]
    },
]


