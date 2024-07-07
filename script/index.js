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
