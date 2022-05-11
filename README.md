# Music Triva

[View the live project here](https://ejdiamond.github.io/Music-Trivia/)

![Responsive Design Image](assets/images/responsive-design.png)
## User Experience (UX)

### User stories

**First Time Visitor Goals**

- As a First Time Visitor, I want to be aesthetically pleased and quickly understand the purpose of the site.
- As a First Time Visitor, I want to be able to easily find the rules of the quiz and understand how to play.
- As a First Time Visitor, I want to be get on with answering the quiz questions.

**Returning Visitor Goals**

- As a Returning Visitor, I want to be able to select new levels of the game when the previous is passed.
- As a Returning Visitor, I want to have highscores logged to see progression.

**Frequent User Goals**

- As a Frequent User, I want to check my highscores.
- As a Frequent User, I want to unlock all levels of the game and be able to play any.
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

The [wireframes](https://github.com/EJDiamond/Music-Trivia/blob/main/assets/images/wireframe-music-trivia.png) show the intial page where the user can select to play, read rules or view the leaderboard. Once 'play' is selected the player then has the option to select a level, intially only the first level is unlocked and once passed, level two will be available, with level three being accessed once the second level is passed.

The quiz is opened once the level is selected, taking the user to the first question. When an answer is hovered over the slection turns white, if the answer selected is correct it will turn green, if incorrect, it will turn red.

The option to exit the quiz is presented as a button at each stage.

# Frameworks, Libraries and Programmes Used

- [Google Fonts](https://fonts.google.com/)
   - Used to import Abril Fatface and Poppins fonts into the css style sheet and used throughout the site.

- [Font Awesome](https://fontawesome.com/)
   - Used to import icons used in:
         - the footer of the page for social icons, sign up and to top button.
         - the locations section for marking different types of walks.

- [Github](https://github.com/)
   - Used to save project code from Git.

- [Adobe Illustrator](https://www.adobe.com/)
   - Used to create 
      - logo used in the header image.
      - wireframes

# Testing

## Navigation Bar and Footer

   - The navigation bar and footer contain effective links which move aorund the sight successfully.
   - The newsletter in footer only ssubmit when filled in with an email and when submited the code institute form dump page opens.

## Buttons

   - All anchors across the site link to the relevant sections they were intended to navigate to.

## Responsiveness

   - When the user is viewing on different size screens the content changes dependent on the screen.
   - Below screen width 780px elements of the design including the header, footer and other body content, take the direction of column using a flex both, meaning when the screen size is reduced to this size the user simply has to scroll down.
   - The background hero image is changed from a cover to contain background so as the user can still experience the full image on smaller screens.

   ![Responsiveness](assets/images/responsive_one.png)

## Validator Testing

- HTML
   - No errors were shown when passed through the HTML [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fejdiamond.github.io%2FMusic-Trivia%2F)

- CSS
   - No errors were shown when passed through the [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fejdiamond.github.io%2FMusic-Trivia%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- Javascript
   - No errors were shown when passed through [JSHint](


## Unfixed Bugs

- On some mobile devices the hero outer section pushes down the all about section leaving space between the two.

## Testing User Stories From User Experience Section

- __First Time Visitor Goals__

   - a) As a First Time Visitor, I want to easily understand the main purpose of the site.
      - The logo and hero image/text are eyecatching andeffective in displaying what the site is for.
      - The user has the option to scroll down or navigate to other pages.

   - b) As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
      - The navigation bar in the header is clear and uses :hover to show the user which page they are currently on.
      - The three pages are kept consistent by using the same nav links and layout for them.

   - c) As a First Time Visitor, I want to locate their social media links to see their followings and connect with local people.
      - The social media links are displayed clearly in the footer with easily recognised icons.
      - The social links open blank pages so as not to direct the user away from the site.

- __Returning Visitor Goals__

   - a) As a Returning Visitor, I want to find information about weekly meet ups.
      - Information on weekly meet ups is displayed clearly on the sites home page, the user simply scrolls down from the heading.
      - Alternatively, the user can use the events link in the navigation bar to save time scrolling.

   - b) As a Returning Visitor, I want to find the best way to get in contact and sign up for weekly events.
      - Sign up for newsletter forms are located in the footer on each page with icon buttons clearly showing what is achived by filling it in.
      - The sign up page is clear and concise with inputs for first and last name as well as email and phone number. 

- __Frequent User Goals__

   - a) As a Frequent User, I want to check to see if the existing weekly events have had any changes made.
      -  The events section is clearly laid out with all the main information including locations, times and dates.
      - The location page gives more detailed information on all events.

   - b) As a Frequent User, I want to sign up to the Newsletter so that I am emailed with any newly scheduled events.
      - Sign up for newsletter forms are located in the footer on each page with icon buttons clearly showing what is achived by filling it in.

# Deployment

The site was deployed through Github pages using the following steps:
   - Open the Github repository
   - Click the settings button
   - Scroll down and hit the git hub page setting button
   - From the source dropdown, select main branch
   - The site delpoys automatically and can be found via the following link:
      - [Music Trivia](https://ejdiamond.github.io/Music-Trivia/)

# Credits

## Content

- Instructions for how to use flex boxes were used from a [YouTube Tutorial](https://www.youtube.com/watch?v=e2RQM4pE8uI)
- Instructions for how to create a pure CSS modal pop up were used from a [YouTube Tutorial](https://www.youtube.com/watch?v=QButPwQ51wQ&list=PL_pBKMVHaanEK6aQOJkn2qWoOS9d_p2iy&index=1)
- Instructions for how to create a 404 error page were taken from a [Github tutorial](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

## Media

- Image used across the background of site were taken from [Pexels](https://www.pexels.com/)









