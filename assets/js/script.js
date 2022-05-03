

const open = document.getElementById('rule-btn');
const rules_container = document.getElementById('rules_container');
const close = document.getElementById('exit');
const openLevelOptions = document.getElementById('play-btn');
const level_container = document.getElementById('level_container');
const closeLevelOptions = document.getElementById('exit1');
const levelOneOpen = document.getElementById('level-one-btn');
const levelTwoOpen = document.getElementById('level-two-btn');
const levelThreeOpen = document.getElementById('level-three-btn');
const closeLevelOne = document.getElementById("exit1");

// Array of questions for level 1 

const levelOneQuestions = [{
        question: "Who had a 1983 hit with the song &#039;Africa&#039;?",
        ans1:"Toto",
        ans2:"Foreigner",
        ans3:"Steely Dan",
        ans4:"Journey",
        correct:"1"
    },
    {
        question: "&quot;Some people call me the space cowboy&quot; is the first line from what song?",
        ans1:"Fandango",
        ans2:"The Joker",
        ans3:"Take The Money and Run",
        ans4:"Fly Like an Eagle",
        correct:"2" 
    },
    {
        question: "Ringo Starr of The Beatles mainly played what instrument?",
        ans1:"Bass",
        ans2:"Guitar",
        ans3:"Piano",
        ans4:"Drums",
        correct:"4"
    },
    {
        question: "Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?",
        ans1:"Justin Bieber",
        ans2:"Selena Gomez",
        ans3:"Ellie Goulding",
        ans4:"The Weeknd",
        correct:"1"
    },
    {
        question: "Whose signature guitar technique is called the &quot;windmill&quot;?",
        ans1:"Jimmy Page",
        ans2:"Eddie Van Halen",
        ans3:"Pete Townshend",
        ans4:"Jimi Hendrix",
        correct:"3"
    },
    {
        
        question: "Who is the lead singer of the band Coldplay?",
        ans1: "Chris Martin",
        ans2:"Chris Isaak",
        ans3:"Chris Wallace",
        ans4:"Chris Connelly",
        correct:"1"
    },
    {
        question: "How many members are there in the band Nirvana?",
        ans1:"Two",
        ans2:"Four",
        ans3:"Five",
        ans4:"Three",
        correct:"4"
    },
    {
        question: "What is the name of Finnish DJ Darude&#039;s hit single released in October 1999?",
        ans1:"Dust Devil",
        ans2:"Sandstorm",
        ans3:"Sirocco",
        ans4:"Khamsin",
        correct:"2"
    },
    {
        question: "Which artist released the 2012 single &quot;Harlem Shake&quot;, which was used in numerous YouTube videos in 2013?",
        ans1:"Baauer",
        ans2:"RL Grime",
        ans3:"NGHTMRE",
        ans4:"Flosstradamus",
        correct:"1"
    },
    {
        question: "Brian May was the guitarist for which band?",
        ans1:"Pink Floyd",
        ans2:"Rolling Stones",
        ans3:"The Doors",
        ans4:"Queen",
        correct:"4"
    },
    {
        question: "Which of these is NOT the name of an album released by English singer-songwriter Adele?",
        ans1:"19",
        ans2: "12",
        ans3:"21",
        ans4:"25",
        correct:"2"
    },
    {
        question: "Which of these is the name of a song by Tears for Fears?",
        ans1:"Shout",
        ans2:"Scream",
        ans3:"Yell",
        ans4:"Shriek",
        correct:"1"
    },
    {
        question: "From which country did the song &quot;Gangnam Style&quot; originate from?",
        ans1:"Japan",
        ans2:"North Korea",
        ans3:"South Korea",
        ans4:"China",
        correct:"3"
    },
    {
        question: "According to a song by Belinda Carlisle, Heaven is a place on what?",
        ans1:"Earth",
        ans2:"Venus",
        ans3:"Mars",
        ans4:"Uranus",
        correct:"1"
    },
    {
        question: "What album did Bon Iver release in 2016?",
        ans1:"Bon Iver, Bon Iver",
        ans2: "Blood Bank EP",
        ans3:"22, A Million",
        ans4:"For Emma, Forever Ago",
        correct:"3"
    },
    {
        question: "Who was featured in the song &quot;Words&quot; by Feint? ",
        ans1:"Anna Yvette ",
        ans2:"Laura Brehm",
        ans3:"Danyka Nadeau",
        ans4:"Veela",
        correct:"2"
    },
    {
        question: "What was the best selling album of 2015?",
        ans1:"Fetty Wap, Fetty Wap",
        ans2:"Taylor Swift, 1989",
        ans3:"Justin Bieber, Purpose",
        ans4:"Adele, 25",
        correct:"4"
    },
    {
        question: "Who performed &quot;I Took A Pill In Ibiza&quot;?",
        ans1:"Avicii",
        ans2:"Mike Posner",
        ans3:"Robbie Williams",
        ans4:"Harry Styles",
        correct:"2"
    },
    {
        question: "The band Muse released their first album, Showbiz, in what year?",
        "correct_answer": "1999",
        an1:"1998",
        ans2:"2000",
        ans3:"1999",
        ans4:"2001",
        correct:"3"
    },
    {
        question: "What Led Zeppelin album contains &quot;Stairway to Heaven&quot;?",
        ans1:"Led Zeppelin IV",
        ans2:"Houses of the Holy",
        ans3:"Physical Graffiti",
        ans4:"Led Zeppelin III",
        correct:"1"
    }
]

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

// Function to start level one


    levelOneOpen.addEventListener ('click',() => {
        level_container_one.classList.add('show');
});

