const quizButton = document.getElementById('quiz-button');
const studentInfo = document.getElementById('student-info');
const form = document.getElementById('student-form');

quizButton.addEventListener('click', () => {
  studentInfo.style.display = 'block';  // Show student info section
  document.getElementById('welcome').style.display = 'none'; // Hide welcome section
});

// Add form validation and quiz logic here based on your needs

form.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Handle form data (name, email) and potentially redirect or show quiz questions
  
  // Example: Alert with submitted information
  // alert(`Name: ${form.name.value}, Email: ${form.email.value}`);
  document.getElementById('main-quiz').style.display = 'block';
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('student-info').style.display = 'none';

   // Generate answered buttons
   const answeredButtons = document.getElementById('answeredQuestions').querySelector('.answered-buttons');
   answeredButtons.innerHTML = ''; // Clear existing buttons (optional)
   
   // Loop to create buttons for each question (replace 50 with your actual number of questions)
   for (let i = 1; i <= 50; i++) {
     const button = document.createElement('button');
     button.textContent = i; // Set button text to question number
     button.id = `btn-${i}`; // Set unique button ID
     answeredButtons.appendChild(button);
   }
});
