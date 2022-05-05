// Element Variables

const open = document.getElementById('rule-btn');
const rules_container = document.getElementById('rules_container');
const close = document.getElementById('exit');
const openLevelOptions = document.getElementById('play-btn');
const level_container = document.getElementById('level_container');
const closeLevelOptions = document.getElementById('exit1');
const levelOneOpen = document.getElementById('level-one-btn');
const levelTwoOpen = document.getElementById('level-two-btn');
const levelThreeOpen = document.getElementById('level-three-btn');
const level_container_one = document.getElementById('level_container_one');
const levelOneClose = document.getElementById('exit2');
const question = document.getElementById('question');
const answers = Array.from(document.querySelectorAll('.answer'));
const scoreText = document.getElementById('score');


// Game Variables

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0
let pointScore = 0;
let availableQuestions = []
const SCORE_POINTS = 1
const MAX_QUESTIONS= 20

// Rule book button to open modal and button to exit

open.addEventListener('click', () => {
    rules_container.classList.add('show');
});

close.addEventListener('click', () => {
    rules_container.classList.remove('show');
});

// Play button to open level selector modal and button to exit

openLevelOptions.addEventListener('click', () => {
    level_container.classList.add('show');
});

closeLevelOptions.addEventListener('click', () => {
    level_container.classList.remove('show');
});

// Level 1 button to open level 1 and button to exit

levelOneOpen.addEventListener('click', () => {
    level_container_one.classList.add('show');
});

levelOneClose.addEventListener('click', () => {
    level_container_one.classList.remove('show');
});

// Array of questions for level 1 

let levelOneQuestions = [{
        question: 'Who had a 1983 hit with the song "Africa"?',
        ans1: "Toto",
        ans2: "Foreigner",
        ans3: "Steely Dan",
        ans4: "Journey",
        correct: 1,
    },
    {
        question: '"Some people call me the space cowboy" is the first line from what song?',
        ans1: "Fandango",
        ans2: "The Joker",
        ans3: "Take The Money and Run",
        ans4: "Fly Like an Eagle",
        correct: 2,
    },
    {
        question: "Ringo Starr of The Beatles mainly played what instrument?",
        ans1: "Bass",
        ans2: "Guitar",
        ans3: "Piano",
        ans4: "Drums",
        correct: 4,
    },
    {
        question: "Which of the following songs is not a written by Greenday?",
        ans1: "In to Deep",
        ans2: "Basketcase",
        ans3: "Holiday",
        ans4: "Welcome to Paradise",
        correct: 1,
    },
    {
        question: "Whose signature guitar technique is called the 'windmill'?",
        ans1: "Jimmy Page",
        ans2: "Eddie Van Halen",
        ans3: "Pete Townshend",
        ans4: "Jimi Hendrix",
        correct: 3,
    },
    {
        
        question: "Who is the lead singer of the band Coldplay?",
        ans1: "Chris Martin",
        ans2: "Chris Isaak",
        ans3: "Chris Wallace",
        ans4: "Chris Connelly",
        correct: 1,
    },
    {
        question: "How many members are there in the band Nirvana?",
        ans1: "Two",
        ans2: "Four",
        ans3: "Five",
        ans4: "Three",
        correct: 4,
    },
    {
        question: "What is the name of Finnish DJ Darude's hit single released in October 1999?",
        ans1: "Dust Devil",
        ans2: "Sandstorm",
        ans3: "Sirocco",
        ans4: "Khamsin",
        correct: 2,
    },
    {
        question: 'Which artist released the 2012 single "Harlem Shake", which was used in numerous YouTube videos in 2013?',
        ans1: "Baauer",
        ans2: "RL Grime",
        ans3: "NGHTMRE",
        ans4: "Flosstradamus",
        correct: 1,
    },
    {
        question: "Brian May was the guitarist for which band?",
        ans1: "Pink Floyd",
        ans2: "Rolling Stones",
        ans3: "The Doors",
        ans4: "Queen",
        correct: 4,
    },
    {
        question: "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
        ans1: "19",
        ans2: "12",
        ans3: "21",
        ans4: "25",
        correct: 2,
    },
    {
        question: "Which of these is the name of a song by Tears for Fears?",
        ans1: "Shout",
        ans2: "Scream",
        ans3: "Yell",
        ans4: "Shriek",
        correct: 1,
    },
    {
        question: 'From which country did the song "Gangnam Style" originate from?',
        ans1: "Japan",
        ans2: "North Korea",
        ans3: "South Korea",
        ans4: "China",
        correct: 3,
    },
    {
        question: "According to a song by Belinda Carlisle, Heaven is a place on what?",
        ans1: "Earth",
        ans2: "Venus",
        ans3: "Mars",
        ans4: "Uranus",
        correct: 1,
    },
    {
        question: "What album did Bon Iver release in 2016?",
        ans1: "Bon Iver, Bon Iver",
        ans2: "Blood Bank EP",
        ans3: "22, A Million",
        ans4: "For Emma, Forever Ago",
        correct: 3,
    },
    {
        question: 'Who was featured in the song "Words" by Feint?',
        ans1: "Anna Yvette ",
        ans2: "Laura Brehm",
        ans3: "Danyka Nadeau",
        ans4: "Veela",
        correct: 2,
    },
    {
        question: "What was the best selling album of 2015?",
        ans1: "Fetty Wap, Fetty Wap",
        ans2: "Taylor Swift, 1989",
        ans3: "Justin Bieber, Purpose",
        ans4: "Adele, 25",
        correct: 4,
    },
    {
        question: 'Who performed "I Took A Pill In Ibiza"?',
        ans1: "Avicii",
        ans2: "Mike Posner",
        ans3: "Robbie Williams",
        ans4: "Harry Styles",
        correct: 2,
    },
    {
        question: "The band Muse released their first album, Showbiz, in what year?",
        "correct_answer": "1999",
        ans1: "1998",
        ans2: "2000",
        ans3: "1999",
        ans4: "2001",
        correct: 3,
    },
    {
        question: 'What Led Zeppelin album contains "Stairway to Heaven"?',
        ans1: "Led Zeppelin IV",
        ans2: "Houses of the Holy",
        ans3: "Physical Graffiti",
        ans4: "Led Zeppelin III",
        correct: 1,
    }
]

// Function to start quiz
function startQuiz () {
    availableQuestions = [...levelOneQuestions];
    questionCounter = 0;
    scores = 0;
    renderNewQuestion();
}

// Function to present new question
function renderNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        let show_score_modal = document.getElementById('level_completed').modal();
        show_score_modal.style.display="flex"
};  

// Variable to present random questions
const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

// Assigning answers to relevant question
answers.forEach(ans => {
    const number = ans.dataset['number'];
    ans.innerText = currentQuestion['ans' + number];
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true;

}

// Function to check if the correct answer has been selected

answers.forEach(ans => {
    ans.addEventListener ('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        //check if answer is correct
        let classtoApply = selectedAnswer == currentQuestion.correct ? 'correct' : 'incorrect'

        if(classtoApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classtoApply)

        //reset and present next question
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classtoApply)
            renderNewQuestion()
            
        }, 1000)
    })
})

incrementScore = num => {
    pointScore +=num
    scoreText.innerText = pointScore
}

startQuiz ()