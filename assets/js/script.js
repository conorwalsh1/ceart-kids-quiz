function startQuiz(questions) {
    console.log('The quiz has started!')
    document.getElemensByClassName('btn--a', 'btn--b', 'btn--c', 'btn--d', 'next-btn').display;
    
}

let startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);

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
            { text: 'Leaba', correct: true },
            { text: 'Leanach', correct: false },
            { text: 'Leabhar', correct: false },
            { text: 'Lean', correct: false }
            ]
    },
]


