// score for quiz
let quizScore = 0;

// This will ask 'Please tell me your name'
let username = prompt("Welcome to my webpage! What is your name?");
let confirmation = confirm("Hello " + username);

// Asking the time
function time() {
  let time = prompt(username + ", do you know what the time is?");
  if (time < 12 && time > 0) {
    alert("morning");
  } else if (time > 12 && time < 24) {
    alert("afternoon");
  } else if (time == 12) {
    alert("its midday");
  } else {
    alert("thats not an hour");
  }
}
time();

// Quizing the user
function q1() {
  let q1 = prompt(
    username +
      ", It's quiz time! Your 1st question is: What is my favourite colour for trainers?"
  ).toLowerCase();
  if (q1 == "black") {
    alert("Yes lad you got it coorect!");
    quizScore += 1;
  } else {
    alert("Nah thats not the right answer");
  }
}
q1();

function q2() {
  let q2 = prompt(
    username +
      ", Question number 2: What country do I originate from? Is it A Latvia, B Estonia or C Lithuania, please put down your answer as a,b or c"
  ).toLowerCase();
  if (q2 == "a") {
    alert("Nope I'm not from there");
  } else if (q2 == "b") {
    alert("Yes that's correct");
    quizScore += 1;
  } else if (q2 == "c") {
    alert("Nope I'm not from there");
  } else {
    alert("That's not even one of the answers");
  }
}
q2();

function q3() {
  let q3 = prompt(
    "Your next question is: Where did I used to live? Is it A Ipswich, B Bedford, C Cambridge or D Luton, please put down your answer as A,B,C or D"
  ).toLowerCase();
  if (q3 == "a") {
    alert(
      "Nope, I live in the same county as Ipswich currently but the answer is incorrect"
    );
  } else if (q3 == "b") {
    alert("Thats the correct answer!");
    quizScore += 1;
  } else if (q3 == "c") {
    alert("Nope thats not the correct answer");
  } else if (q3 == "d") {
    alert(
      "Incorrect, however the right answer is a place that is in the same county as Luton so your not far off"
    );
  } else {
    alert("You haven't answered the question properly");
  }
}
q3();

function q4() {
  // Asks the first question
  let q4 = prompt("The next question is: How many pairs of shoes do I own?");
  // This is a loop that will tell them they are correct and stop or tell them they are incorrect and let them guess up to three more times
  for (let i = 0; i < 3; i++) {
    if (q4 == 8) {
      alert("Well done you guessed correctly!");
      quizScore += 1;
      break;
    } else if (q4 > 8) {
      alert("Too high");
      q4 = prompt("The next question is: How many pairs of shoes do I own?");
    } else if (q4 < 8) {
      alert("Nope thats too low");
      q4 = prompt("The next question is: How many pairs of shoes do I own?");
    } else {
      alert("thats not a number silly");
      q4 = prompt("The next question is: How many pairs of shoes do I own?");
    }
    if (i == 2) {
      alert("Unfortunately you have run out of guesses :/");
      break;
    }
  }
}
q4();

//Question using arrays
let brand = ["adidas", "nike", "jordan", "off white"];

for (let i = 5; i >= 0; i--) {
  let attempts = i + 1;
  let q5 = prompt(
    "Name a brand of shoes that I own, you only need to get one of them correct, you will have " +
      attempts +
      " attempts to guess correctly"
  ).toLowerCase();
  for (let j = 0; j < brand.length; j++) {
    if (brand[j] === q5) {
      alert("Well done you guessed a correct answer");
      quizScore += 1;
      break;
    } else if (q5) {
      alert("Incorrect, try again");
    }
  }

  if (i === 0) {
    alert("Oh no you've run out of guesses!");
    break;
  }
}
// Ending score for the quiz
alert("You have got " + quizScore + " questions correct!");
