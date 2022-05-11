# Music Triva

A trivia quiz, testing the users knowledge of all things musical.

[View the live project here](https://ejdiamond.github.io/Music-Trivia/)

![Responsive Design Image](assets/images/responsive-design.png)
## User Experience (UX)

### User stories

**First Time Visitor Goals**

- As a First Time Visitor, I want to be aesthetically pleased and quickly understand the purpose of the site.
- As a First Time Visitor, I want to be able to easily find the rules of the quiz and understand how to play.
- As a First Time Visitor, I want to be get on with answering the quiz questions.
- As a First Time Visitor, I want to see the question number and my score as I progress through the quiz.

**Returning Visitor Goals**

- As a Returning Visitor, I want to have highscores logged to see progression.

**Frequent User Goals**

- As a Frequent User, I want to check my highscores.
- As a Frequent User, I want to be able to clear highscores so more can be entered.

## Design

### Colour Scheme

The main colours used are yellow (#eecf71), black and white, these colours compliment each other well, producing a clean, bold design.

### Typography

The Permanent Marker and Overpass fonts are the main fonts used throughout the whole website. Cursive is the fallback for Permanent Marker, and sans serif for Overpass, in case for any reason the font isn't being imported into the site correctly. Permanent Marker is a bold and playful font suited well for a game/ quiz, Overpass is a simple but attractive font making it perfect for a question and answer format.

### Imagery

- The background image used throught the quiz is a photograph of a speaker wall, which fits the theme of the quiz and makes for an interesting background.
- The [favicon](https://github.com/EJDiamond/Music-Trivia/blob/main/assets/images/favicon.png), matches the theme of the page, using the yellow background with a musical note representing the music trivia. 

### Wireframe

The [wireframes](https://github.com/EJDiamond/Music-Trivia/blob/9cd1e20489405d1ebf1d981022d163feb6c2b1db/assets/images/wireframe-project-2.png) show the intial page where the user can select to play, read rules or view the leaderboard. Once 'play' is selected the player then has the option to select a level, intially only the first level is unlocked and once passed, level two will be available, with level three being accessed once the second level is passed.

The quiz is opened once the level is selected, taking the user to the first question. When an answer is hovered over the slection turns white, if the answer selected is correct it will turn green, if incorrect, it will turn red.

The option to exit the quiz is presented as a button at each stage.

The wireframe was created in Adobe Illustrator, using one artboard to display the seperate modals throughout the quiz. The same fonts were downloaded to the Adobe library and the background image from pexels to get a real feel as to what the quiz would look like.

# Features

### Existing Features

-__Homepage Section__

The hompage is clear, simplistic and easy to nagivate through. The buttons change to white as they are hovered over making it clear to see what is being selected. 

![Homepage](/assets/images/homepage.png)

-__Rule book__

The rules are presented in a concise list making them clear and easy to understand. When viewd on smaller screens the user is able to scroll through them. 

![Rulebook](/assets/images/rules.png)

-__Quiz section__

The quiz section clearly displays the question counter out of twenty in the top right of the page and the user score in the top right, the counter incrementing as the quiz progresses and the score increasing by one for each correct answer. If the correct answer is selected the answer box border turns green and if incorrect it will turn red. The exit quiz buttom is in the bottom right and will return the user to homepage without saving progress.

![Quiz](/assets/images/correct-incorrect.png)

-__End of quiz__

As the user comes to the end of the quiz, they are presented with a form in which they can enter their name to save their score. They can also choose to play again, taking them back to question one, or exit without saving and return to the homepage. 

![End of quiz](/assets/images/end-of-quiz.png)

-__Leaderboard__

The leaderboard is reached by clicking the leaderboard button on the homepage, the top 6 highscores are logged here if the user has chosen to save score. Pressing clear will clear the local storage in turn clearing the leaderboard and returning the user to the homepage.

![Leaderboard](/assets/images/leaderboard.png)

### Future Features

Possible changes to the game:
- Additional questions
- A shuffle through questions so the game is able to be played over and over without the user remembering the answers.

# Frameworks, Libraries and Programmes Used

- [Google Fonts](https://fonts.google.com/)
   - Used to import Permanent Marker and Overpass fonts into the css style sheet and used throughout the site.

- [Github](https://github.com/)
   - Used to save project code from Git.

- [Adobe Illustrator](https://www.adobe.com/)
   - Used to create 
      - favicon
      - wireframes

# Testing

## Homepage

   - The three buttons on the homepage all link to the relevant containers, so the correct section of the page pops up when button click is performed.

## Buttons

   - All exit buttons return to the homepage.
   - The save button saves the users name and highscores to the local storage which then display in the leaderboard.
   - The clear button on the leaderboard effectively clears the local storage.

## Responsiveness

   - When the user is viewing on different size screens the content changes dependent on the screen.
   - Screen sizes 646px width and below the font sizes are decreased for a better user experience.
   - Screen sizes 474 px width and below, the rule book uses a scroll bar so the user can scroll the rules without the font size being too small.
   - The flex containers mean the height and width of the modal box are decreased automatically on smaller devices.
   - The form and buttons on the end of quiz container are displayed in a column to suit smaller devices.

   ![Responsiveness](assets/images/responsive-scroll.png)

## Validator Testing

- HTML
   - No errors were shown when passed through the HTML [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fejdiamond.github.io%2FMusic-Trivia%2F)

- CSS
   - No errors were shown when passed through the [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fejdiamond.github.io%2FMusic-Trivia%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- Javascript
   - No errors were shown when passed through [JSHint](https://github.com/EJDiamond/Music-Trivia/blob/main/assets/images/jshint-results.png)

- Chromes Lighthouse
   - ![Chromes Lighthouse report](assets/images/lighthouse-report.png)

## Testing User Stories From User Experience Section

- __First Time Visitor Goals__

   - a) As a First Time Visitor, I want to be aesthetically pleased and quickly understand the purpose of the site.
      - The homepage of the site is simplistic and easy to navigate meaning you can start playing the game quickly.
      - The user can quickly selected different buttons and navigate to the different elements of the page.

   - b) As a First Time Visitor, I want to be able to easily find the rules of the quiz and understand how to play.
      - The rule book button on the homepage, take you to the rules which are listed for easy reading.
      - For smaller devices the rules can be scrolled through.

   - c) As a First Time Visitor, I want to be get on with answering the quiz questions.
      - The play button is located in the centre of the screen so as the user can instantly begin the game.

   - d) As a First Time Visitor, I want to see the question number and my score as I progress through the quiz.
      - The progression counter is shown in the top left, and allows the user to know at what point in the quiz they are at.
      - The score, displayed on the right increases as the user selcets correct answers.
    
- __Returning Visitor Goals__

   - a) As a Returning Visitor, I want to have highscores logged to see progression.
      - The user has the option to save the score once the quiz is completed.
      - If the user has socred higher than the top 6 previous scores, their score will be visible in the leaderboard.

- __Frequent User Goals__

   - a) As a Frequent User, I want to check my highscores.
      -  The user is able to click the leaderboard button on the hompage and see the highscores that have been logged.

   - b) As a Frequent User, I want to be able to clear highscores so more can be entered.
      - The user is able to press the clear button on the leaderboard so as that the board is cleared and the user can start the high scores again.

# Deployment

The site was deployed through Github pages using the following steps:
   - Open the Github repository
   - Click the settings button
   - Scroll down and hit the git hub page setting button
   - From the source dropdown, select main branch
   - The site delpoys automatically and can be found via the following link: [Music Trivia](https://ejdiamond.github.io/Music-Trivia/)

# Credits

## Content

- A javascript quiz making tutorial was used, altered and expanded upon to help build the site [YouTube Tutorial](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2788s)
- Instructions for how to store in the local storage were used from [YouTube Tutorial](https://www.youtube.com/watch?v=jfOv18lCMmw)
- An open trivia database was used to gather questions for the quiz [Quiz Database](https://opentdb.com/api_config.php)

## Media

- Image used across the background of site was taken from [Pexels](https://www.pexels.com/)









