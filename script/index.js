document.addEventListener('DOMContentLoaded', () => {
  const quizButton = document.getElementById('quiz-button');
  const studentInfo = document.getElementById('student-info');
  const form = document.getElementById('student-form');
  const answeredQuestions = document.getElementById('answeredQuestions');
  const mainQuiz = document.getElementById('main-quiz');
  const welcomeSection = document.getElementById('welcome');

  if (quizButton && studentInfo && welcomeSection) {
    quizButton.addEventListener('click', () => {
      studentInfo.style.display = 'block';  // Show student info section
      welcomeSection.style.display = 'none'; // Hide welcome section
    });
  }

  if (form && answeredQuestions && mainQuiz) {
    form.addEventListener('submit', (event) => {
      // Prevent default form submission behavior
      event.preventDefault();
      
      // Show main quiz section
      mainQuiz.style.display = 'block';
      // Hide welcome and student info sections
      welcomeSection.style.display = 'none';
      studentInfo.style.display = 'none';
      
      // Show answered questions section
      answeredQuestions.style.display = 'block';
      
      // Generate answered buttons
      const answeredButtons = answeredQuestions.querySelector('.answered-buttons');
      if (answeredButtons) {
        answeredButtons.innerHTML = ''; // Clear existing buttons (optional)
        
        // Loop to create buttons for each question (replace 50 with your actual number of questions)
        for (let i = 1; i <= 50; i++) {
          const button = document.createElement('button');
          button.textContent = i; // Set button text to question number
          button.id = `btn-${i}`; // Set unique button ID
          button.classList.add('answered-button'); // Add class for easier styling
          answeredButtons.appendChild(button);
        }
      }
    });
  }

  // Define the markAnswered function
  window.markAnswered = function(button, questionNumber) {
    // Deselect any previously selected options for this question
    const questionTags = document.querySelector(`[data-question-number="${questionNumber}"]`);
    if (questionTags) {
      const buttons = questionTags.querySelectorAll('button');
      buttons.forEach(btn => btn.classList.remove('selected-option'));
    }
    
    // Mark the selected button as answered
    button.classList.add('selected-option');
    
    // Mark the corresponding button in the answered questions section
    const answeredButton = document.getElementById(`btn-${questionNumber}`);
    if (answeredButton) {
      answeredButton.classList.add('answered');
    }
  };
});

// Question page navigation
const questionPages = document.querySelectorAll('.question-page');

function showPage(pageIndex) {
  questionPages.forEach((page, index) => {
    page.style.display = index === pageIndex ? 'block' : 'none';
  });
}

//Calculate the total number of question pages(assuming 5 questions per page)
const numQuestionPages = Match.ceil(50 / 5);

//Generate an array of button groups based on the number of question pages
const pageButtons = [];
for (let i = 0; i < numQuestionPages; i++) {
  const buttonGroup = [];
  for (let j = 1; j <= 5; j++) {
    const buttonNumber = (i * 5) + j;

    if (buttonNumber <= 50) {
      buttonGroup.push(buttonNumber);
    }
  }
  pageButtons.push(buttonGroup);
}

//Add event listener for navigation buttons
pageButtons.forEach(buttons, pageIndex) ==> {
  buttons.forEach(buttonNumber => {
    document.getElementById(`btn-${buttonNumber}`).addEventListener('click', () => showPage(pageIndex));
  });
}

// Assume the first question page is displayed initially
// showPage(0);

// Add event listeners for navigation buttons
//  const pageButtons = [
// [1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10],
// [11, 12, 13, 14, 15],
// [16, 17, 18, 19, 20],
// [21, 22, 23, 24, 25],
// [26, 27, 28, 29 ,30],
// [31, 32, 33, 34, 35],
// [36, 37, 38, 39, 40],
// [41, 42, 43, 44, 45],
// [46, 47, 48, 49, 50],
// ];

// pageButtons.forEach((buttons, pageIndex) => {
//   buttons.forEach(buttonNumber => {
//     const buttonIndex = Math.ceil(buttonNumber / 5) - 1; // Calculate the button index based on question number
//     document.getElementById(`btn-${buttonNumber}`).addEventListener('click', () => showPage(buttonIndex));
//   });
// });