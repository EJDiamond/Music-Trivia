// Element Variables
const openRules = document.getElementById('rule-btn');
const rules_container = document.getElementById('rules_container');
const closeRules = document.getElementById('exit');
const openQuiz = document.getElementById('play-btn');
const closeQuiz = document.getElementById('exit1');
const question = document.getElementById('question');
const answers = Array.from(document.querySelectorAll('.answer'));
const scoreText = document.getElementById('score');
const openLeaderBoard = document.getElementById('leader-btn');
const closeLeaderBoard = document.getElementById('exit3');
const hideHomepage = document.getElementById('homepage_section');
const showHomepage = document.getElementById('homepage_section');
const finalScore = document.getElementById('final_score');
const username = document.getElementById('username');
const saveScore = document.getElementById('saveScore');
const playAgain = document.getElementById('playAgain');
const quizContainer = document.getElementById('quiz_container');
const highScoresList = document.getElementById('highScoresList');
const progressCounter = document.getElementById('progressCounter');
const closeEndOfQuiz = document.getElementById('exit2');
const leaderboard = document.getElementById('leaderboard');
let show_score_modal = document.getElementById('quiz_completed');
const clearLeaderboard = document.getElementById('clear');


// Game Variables
let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let pointScore = 0;
let availableQuestions = [];
const SCORE_POINTS = 1;
const MAX_QUESTIONS= 20;

// Rule book button to open modal and button to exit using event listener
openRules.addEventListener('click', () => {
    rules_container.classList.add('show');
    hideHomepage.style.display="none";
});

closeRules.addEventListener('click', () => {
    rules_container.classList.remove('show');
    showHomepage.style.display="flex";
});

// Play button to open quiz modal and button to exit using event listener
openQuiz.addEventListener('click', () => {
    quizContainer.classList.add('show');
    hideHomepage.style.display="none";
    scoreText.innerText = 0;
    startQuiz()
});

closeQuiz.addEventListener('click', () => {
    quizContainer.classList.remove('show');
    showHomepage.style.display="flex";
});

//Leader board button to open leaderboard using event listener
openLeaderBoard.addEventListener('click', () => {
    leaderboard.classList.add('show');
    hideHomepage.style.display="none";
});

closeLeaderBoard.addEventListener('click', () => {
    leaderboard.classList.remove('show');
    showHomepage.style.display="flex";
});

// Event Listener for entering the username, in order for the save username button to be enabled
username.addEventListener("keyup", () => {
     console.log(username.value);
     saveScore.disabled = !username.value; 
 });

// Event Listener for play again button to reset and open quiz
playAgain.addEventListener('click', () => {
    quizContainer.classList.add('show');
    show_score_modal.style.display="none";
    scoreText.innerText = 0;
    startQuiz();
});

//Event Listener to close end of quiz score container
closeEndOfQuiz.addEventListener('click', () => {
    show_score_modal.style.display="none";
    showHomepage.style.display="flex";
});

// Event listener to clear leaderboard
clearLeaderboard.addEventListener('click', () => {
    localStorage.clear('highscores');
    window.location.reload();
});

// Array of questions
let questions = [
    {
        question: 'What British rock band pioneered the use of the light show?',
        ans1: "Pink Floyd",
        ans2: "The Who",
        ans3: "Led Zepplin",
        ans4: "The Beatles",
        correct: 1,
    },
    {
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
];

// Function to start quiz setting score and question count to zero
function startQuiz () {
    availableQuestions = [...questions];
    questionCounter = 0;
    pointScore = 0;
    renderNewQuestion();
}

// Function to render new question resetting the question coutner when quiz is complete or exited
function renderNewQuestion () {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        let hide_quiz_container = document.getElementById('quiz_container');
        hide_quiz_container.classList.remove('show');
        show_score_modal.style.display="flex";
        hideHomepage.style.display="none";
        questionCounter = 0;
    }

    // Progress counter to increment as the question counter increases
    questionCounter++;
    progressCounter.innerText = questionCounter + "/" + MAX_QUESTIONS;

    // Variable to present random questions
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    console.log(currentQuestion);
    if (currentQuestion != {}) {
        question.innerText = currentQuestion.question;
        }

    // Assigning answers to relevant question
    answers.forEach(ans => {
        const number = ans.dataset.number;
        ans.innerText = currentQuestion['ans' + number];
    }); 

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

// Function to check if the correct answer has been selected
answers.forEach(ans => {
    ans.addEventListener ('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        //Check to see if answer is correct or incorrect
        let classtoApply = selectedAnswer == currentQuestion.correct ? 'correct' : 'incorrect';

        // If the correct answer is selected the points are incremented by one
        if(classtoApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        // Changes the color of the the answer depending whether it is correct or incorrect
        selectedChoice.classList.add(classtoApply);

        //Reset and present next question
        setTimeout(() => {
            selectedChoice.classList.remove(classtoApply);
            renderNewQuestion();        
        }, 1000);
    });
});

// Function to increase the userscore 
function incrementScore(num) {
    pointScore +=num;
    scoreText.innerText = pointScore;

    finalScore.innerText = pointScore;
}

// Quiz completed final score section
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Function to save user score to local storage
document.getElementById("saveScore").onclick = function() {saveHighScore();};
function saveHighScore() {
    const score = {
        score: finalScore.innerText,
        name: username.value
    };

    highScores.push(score);
    
    // Function to sort highscore from high to low and spice to show only top 6 highescores
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(6);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Return to homepage section when user has saved score  
    window.location.assign('index.html');
}


// Use map to convert the arrays items to strings and into new array
highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name}  -  ${score.score}</li>`;
    })
    .join("");

// Event listener to start quiz once DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    startQuiz ();  
});


    