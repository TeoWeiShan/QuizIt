# QuizIt
The name of this project is QuizIt!. We created this website utilising OpenTDB api to create a fun little quiz for everyone to enjoy at their time. Given that many of us are stuck at home for the most part now, we can all play some quizzes amuse ourselves when we are bored.

Our pitch/demo can be found [here](https://drive.google.com/file/d/1tqKKw0DC4rYHgvexd2j9z213IgWb3mT8/view)

## Design Process
Our design process is for it to be simple so that everyone can use it to have fun. It is more so targeted at younger people, usually school-going as they would have more time than working adults, to play this quiz when they are at home with idle time.

Blue is used as an overall as it usually is used in representing education, which is what this website is about. Round features are commonly used to make have a visual appeal that the game is user-friendly and great for beginners.

(User Stories)
- As a student who does not have much to do at home, I would like a quick and simple game to play to pass time.

- As someone who is looking to test myself on some quiz questions and have some fun, I would like a seamless and uncluttered quiz game that allows for me to play without difficulty.

- As an adult and parent looking for a simple game to play with my children, I would like a game that is easy to understand and play with younger children as well as be educational for them, such that we can have fun and at the same time learn a thing or two. 

[Wireframe](https://github.com/TeoWeiShan/QuizIt/blob/main/QuizIt!%20wireframes%20artboard.xd)

## Features

### Existing Features
#### Homepage
- Landing page where players can navigate to play the quiz or check their scores on the leaderboard.

#### Quiz 
- Selector segement for players to adjust the number of questions and difficulty of the game to enhance their game play experience.
- Quiz segement for players to test their knowledege.

#### End
- Displays total points scored
- Save button for players to save and keep track of their score locally
- Navigation buttons for players to choose either to exit or continue playing the game.

#### Leaderboard
- Displays total score from previous saved sessions.
- Clear button to clear leaderboard.

## Features Left to Implement
- Online Database for Online Leaderboards

## Technologies Used
- [Visual Studio Code](https://code.visualstudio.com/)
    - The project uses **Visual Studio Code** to program the webpage.
- HTML
    - The project uses **HTML** to create the website.
- [JavaScript](https://www.javascript.com/)
    - The project uses **JavaScript** to allow interactivity on the website. 
- [JSON](https://www.json.org/json-en.html)
    - The project uses **JSON** to store and retrieve local data.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Adobe XD](https://www.adobe.com/sea/products/xd.html)
    - The project uses **Adobe XD** to make wireframes for viewing.
- [Open Trivia Database API](https://opentdb.com/)
    - The project uses **Spoonacular API** to obtain data that is provided rapidly.
- [W3C MarkUp Validation](https://validator.w3.org/)
    - The project uses **W3C MarkUp Validation** to validate HTML.
- [W3C Link Checking](https://validator.w3.org/)
    - The project uses **W3C Link Checking** to validate links included in the HTML.
- [JSHint](https://jshint.com/)
    - The project uses **JSHint** to validate JavaScript used on the website.
- [Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/)
    - The project uses **Color Contrast Accessibility Validator** to validate color contrast on the website.
- [typosaurus](https://typosaur.us/)
    - The project uses **typosaurus** to check for spelling errors.

## Testing
- HTML validator using [this website](https://validator.w3.org/)
- CSS validator using [this website](https://jigsaw.w3.org/css-validator/)
- JS validator using [this website](https://jshint.com/)

1. Home page:
    1. Click on 'Start' button, should link to quiz.html starting with the difficulty selection
    2. Click on 'Leaderboard' button, should link to leaderboard.html showing the scores that were set

2. Leaderboard:
    1. Check that all saved scores are displayed
    2. 'Clear' button: If there are any saved scores, button should be displayed, else it would not show. Upon clicking the button, all saved scores and their displays should be erased.
    3. 'Home' button: Verify that clicking it links back to the Home page

3. Quiz page - Difficulty selection:
    1. Number of questions input box: Try to enter keys other than numerical digits, verify that it is not inputted
    2. Number of questions input box: Try entering a number that is not in range 1-50, relevant error message should be displayed
    3. Number of questions input box: Try leaving the input box empty, error message should be displayed
    4. Difficulty input box: Verify that options available from a dropdown-menu are 'Easy'/'Medium'/'Hard'
    5. Submit with all valid inputs, verify that it progresses on to the questions

4. Quiz page - Loader:
    1. If API is not retrivable (External response code not equals to 200 or internal response code not equals to 0), "API retrival error" alert should pop up and redirect them to the Home page
    2. If API is retrivable, loader should appear to initialise question
    3. Loader should disappear and questions should pop up after quesions have been loaded

5. Quiz page - Questions:
    1. Test selecting a wrong answer, selected option box should turn red
    2. Test selecting the right answer, selected option box should turn green, points should increase by 1-3 based on difficulty selected.
    3. Test selecting an option, box will retain color for a short while before the question and option is beinf replaced with a new one
    3. After completing the last question, redirect user to to End page

6. End of Quiz page:
    1. 'Save' button: Upon pressing, verify that a record has been saved in the Leaderboard(leaderboard.html), and button should disappear
    2. 'Play Again' button: Verify that clicking it links back to the Quiz page difficulty selection
    3. 'Go Home' button: Verify that clicking it links back to the Home page

## Deployment
[Website](https://teoweishan.github.io/QuizIt/)

All files can be downloaded in [ZIP format](https://teoweishan.github.io/TeoWeiShan/QuizIt/archive/main.zip)

urlAPI can be changed in quiz.js to include your own API Key.

## Credits
This website is done by Sew Jing Wen and Teo Wei Shan

### Content
- [API](https://opentdb.com/)
- [JQuery](https://jquery.com)
- [Lottie animations](https://lottiefiles.com/)
### Media
- Favicon (Sew Jing Wen)
### Codes
- [W3Schools](https://www.w3schools.com/)
- [Stephen H. Hulme](https://github.com/shulme801)
- [James Q Quick](https://www.jamesqquick.com/)
- [Number of questions validation](https://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery)
### Acknowledgements
Inspirations for this project were received from another Quiz type website/app called Kahoot! and Ngee Ann Polytechnic School of ICT Interactive Development Department.