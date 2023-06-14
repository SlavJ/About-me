// // This will ask 'Please tell me your name'
// let username = prompt("Welcome to my webpage! What is your name?");
// let confirmation = confirm("Hello " + username);

// // Asking the time
// function time() {
//   let time = prompt(username + ", do you know what the time is?");
//   if (time < 12 && time > 0) {
//     alert("morning");
//   } else if (time > 12 && time < 24) {
//     alert("afternoon");
//   } else if (time == 12) {
//     alert("its midday");
//   } else {
//     alert("thats not an hour");
//   }
// }
// time();

// // Quizing the user
// function q1() {
//   let q1 = prompt(
//     username +
//       ", It's quiz time! Your 1st question is: What is my favourite colour for trainers?"
//   );
//   if (q1 == "Black") {
//     alert("Yes lad you got it coorect!");
//   } else {
//     alert("Nah thats not the right answer");
//   }
// }
// q1();

// function q2() {
//   let q2 = prompt(
//     username +
//       ", Question number 2: What country do I originate from? Is it A Latvia, B Estonia or C Lithuania, please put down your answer as A,B or C"
//   );
//   if (q2 == "A") {
//     alert("Nope I'm not from there");
//   } else if (q2 == "B") {
//     alert("Yes that's correct");
//   } else if (q2 == "C") {
//     alert("Nope I'm not from there");
//   } else {
//     alert("That's not even one of the answers");
//   }
// }
// q2();

// function q3() {
//   let q3 = prompt(
//     "Your next question is: Where did I used to live? Is it A Ipswich, B Bedford, C Cambridge or D Luton, please put down your answer as A,B,C or D"
//   );
//   if (q3 == "A") {
//     alert(
//       "Nope, I live in the same county as Ipswich currently but the answer is incorrect"
//     );
//   } else if (q3 == "B") {
//     alert("Thats the correct answer!");
//   } else if (q3 == "C") {
//     alert("Nope thats not the correct answer");
//   } else if (q3 == "D") {
//     alert(
//       "Incorrect, however the right answer is a place that is in the same county as Luton so your not far off"
//     );
//   } else {
//     alert("You haven't answered the question properly");
//   }
// }
// q3();

// let myNumber = 8;
// function q4() {
//   let q4 = prompt("The next question is: How many pairs of shoes do I own?");
//   if (q4 == 8) {
//     alert("Well done you guessed correctly!");
//   } else if (q4 > 8) {
//     alert("Too high, although I wouldn't mind more pairs");
//   } else if (q4 < 8) {
//     alert("Nope thats too low");
//   } else {
//     alert("thats not a number silly");
//   }
// }
// q4();

function q4() {
  // Asks the first question
  let q4 = prompt("The next question is: How many pairs of shoes do I own?");
  // This is a loop that will tell them they are correct and stop or tell them they are incorrect and let them guess up to three more times
  for (let i = 0; i < 3; i++) {
    if (q4 == 8) {
      alert("Well done you guessed correctly!");
      break;
    } else if (q4 > 8) {
      alert("Too high, although I wouldn't mind more pairs");
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
    }
  }
}
q4();
