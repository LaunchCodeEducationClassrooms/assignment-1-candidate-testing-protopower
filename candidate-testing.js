

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["1) Who was the first American Woman in space? ", "2) True or False: 5000 meters == 5 kilometers ", "3) (5+3)/2*10=? ", "4) Given the Array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require("readline-sync");
let candidateName = input.question("What is your Name? ");
console.log("Candidate Name: " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for ( let i = 0; i < questions.length; i++) {
  const input = require("readline-sync");
    candidateAnswers[i] = input.question(questions[i]);
    console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log(candidateAnswers);
  let grade = (0);
  for ( let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade = grade + 1;
    } else{
      grade = grade + 0;
    }
  }
console.log("<<< Overall Grade: " + (grade / 5 * 100) + "% (" + grade + " out of 5 responses correct) <<<");
  
console.log(grade);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};