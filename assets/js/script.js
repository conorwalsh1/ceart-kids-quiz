const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion() 
})

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion() 
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1 )
    nextButton.classList.remove('hide')

}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function incrementScore () {
    
}

const questions = [
    {
        question: 'Question. If you have "dhá úll", how many apples do you have?',
        answers: [
        { text: '1', correct: false },
        { text: '2', correct: true },
        { text: '3', correct: false },
        { text: '4', correct: false }
        ]
    },
    {
        question: 'Question. If a house is painted the colour "dearg", what colour is it?',
        answers: [
            { text: 'Black', correct: false },
            { text: 'Red', correct: true },
            { text: 'Blue', correct: false },
            { text: 'Pink', correct: false }
            ]
    },
    {
        question: 'Question. "Bó" is the name of what farm animal?',
        answers: [
            { text: 'Cow', correct: true },
            { text: 'Pig', correct: false },
            { text: 'Sheep', correct: false },
            { text: 'Goat', correct: false }
            ]
    },
    {
        question: 'Question. "Uisce" is the name for what kind of drink?',
        answers: [
            { text: 'Milk', correct: false },
            { text: 'Orange Juice', correct: false },
            { text: 'Water', correct: true },
            { text: 'Tea', correct: false }
            ]
    },
    {
        question: 'Question. If I go to the "siopa", where am I going?',
        answers: [
            { text: 'Cinema', correct: false },
            { text: 'Shop', correct: true },
            { text: 'Library', correct: false },
            { text: 'Beach', correct: false }
            ]
    },
    {
        question: 'Question. If Oisín said his hair is the colour "dubh", what colour is his hair?',
        answers: [
            { text: 'Black', correct: true },
            { text: 'Blonde', correct: false },
            { text: 'Brown', correct: false },
            { text: 'Ginger', correct: false }
            ]
    },
    {
        question: 'Question. If the sky is the colour "gorm", what colour is the sky?',
        answers: [
            { text: 'Blue', correct: true },
            { text: 'Yellow', correct: false },
            { text: 'Grey', correct: false },
            { text: 'Black', correct: false }
            ]
    },
    {
        question: 'Question. "Corcaigh" is the name of which Irish county?',
        answers: [
            { text: 'Dublin', correct: false },
            { text: 'Cork', correct: true },
            { text: 'Limerick', correct: false },
            { text: 'Galway', correct: false }
            ]
    },
    {
        question: 'Question. Who is the "muinteoir" in the classroom?',
        answers: [
            { text: 'Pupil', correct: false },
            { text: 'Teacher', correct: true },
            { text: 'Principal', correct: false },
            { text: 'Parent', correct: false }
            ]
    },
    {
        question: 'Question. What is the Irish word for "bed"?',
        answers: [
            { text: 'Leaba', correct: false },
            { text: 'Leanach', correct: true },
            { text: 'Leabhar', correct: false },
            { text: 'Lean', correct: false }
            ]
    },
]


