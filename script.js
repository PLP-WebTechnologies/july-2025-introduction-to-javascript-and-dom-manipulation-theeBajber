let age = 18;
let message = "";

if (age >= 18) {
  message = "You are an adult.";
} else {
  message = "You are a minor.";
}
console.log(message);
document.getElementById("output").textContent = message;

function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatString(str) {
  return str.trim().toUpperCase();
}

console.log("Total: $" + calculateTotal(10, 3));
console.log(formatString("   hello world   "));

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
}

let counter = 3;
while (counter > 0) {
  console.log("Countdown:", counter);
  counter--;
}

const toggleBtn = document.getElementById("toggleBtn");
const countdownBtn = document.getElementById("countdownBtn");
const addItemBtn = document.getElementById("addItemBtn");
const outputDiv = document.getElementById("output");
const list = document.getElementById("list");

toggleBtn.addEventListener("click", function () {
  outputDiv.classList.toggle("highlight");
});

countdownBtn.addEventListener("click", function () {
  let countdown = 5;
  outputDiv.textContent = "Countdown: " + countdown;
  let interval = setInterval(function () {
    countdown--;
    outputDiv.textContent = "Countdown: " + countdown;
    if (countdown === 0) {
      clearInterval(interval);
      outputDiv.textContent = "Time's up!";
    }
  }, 1000);
});

addItemBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});
