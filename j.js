// This will ask 'Please tell me your name'
let username = prompt("Welcome to my webpage! What is your name?");
let confirmation = confirm("Hello " + username);

// Asking the time
function time() {
  let time = prompt(username + ", do you know what the time is?");
  if (time < 12) {
    document.write("morning");
  } else if (time > 12) {
    document.write("afternoon");
  } else {
    document.write("its midday");
  }
}
time();

//
