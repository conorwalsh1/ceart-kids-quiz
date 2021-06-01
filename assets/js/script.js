const question = document.querySelector('#question')
const answerText = Array.from(document.querySelector('.answer-text'))
const scoreText = document.querySelector('.score-number')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter= 0
let availableQuestions = []

let questions = [
    {
        question: '1. If you have "dhá úll", how many apples do you have?',
        answerText: '1',
        answerText: '2',
        answerText: '3',
        answer: 2,
    },
    {
        question: '2. If a house is the colour "dearg", what colour is it?',
        answerText: 'Black',
        answerText: 'Red',
        answerText: 'Blue',
        answer: 2,
    },
    {
        question: '3. "Bó" is the name of what farm animal?',
        answerText: 'Cow',
        answerText: 'Pig',
        answerText: 'Sheep',
        answer: 1,
    },
    {
        question: '4. "Uisce" is the name for what kind of drink?',
        answerText: 'Milk',
        answerText: 'Orange Juice',
        answerText: 'Water',
        answer: 3,
    },
    {
        question: '5. If I go to the "siopa", where am I going?',
        answerText: 'Cinema',
        answerText: 'Shop',
        answerText: 'Library',
        answer: 2,
    },
    {
        question: '6. If Oisín said his hair is the colour "fionn", what colour is his hair?',
        answerText: 'Red',
        answerText: 'Black',
        answerText: 'Blonde',
        answer: 3,
    },
    {
        question: '7. If the sky is the colour "gorm", what colour is the sky?',
        answerText: 'Blue',
        answerText: 'Yellow',
        answerText: 'Grey',
        answer: 1,
    },
    {
        question: '8. "Corcaigh" is the name of which Irish county?',
        answerText: 'Dublin',
        answerText: 'Cork',
        answerText: 'Limerick',
        answer: 2,
    },
    {
        question: '9. Who is the "muinteoir" in the classroom?',
        answerText: 'Pupil',
        answerText: 'Teacher',
        answerText: 'Principal',
        answer: 2,
    },
    {
        question: '10. What is the Irish word for "bed"?',
        answerText: 'Leaba',
        answerText: 'Leanabh',
        answerText: 'Seomra',
        answer: 1,
    },
]