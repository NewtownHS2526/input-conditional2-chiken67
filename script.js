// ============================================
// ACTIVITY 2: THE GREAT LAKES QUIZ
// ============================================

// --------------------------------------------
// STEP 1: SELECT DOM ELEMENTS
// --------------------------------------------
const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

// --------------------------------------------
// STEP 2: CREATE VARIABLES TO TRACK GAME STATE
// --------------------------------------------
let score = 0;
let champlain = false;

// --------------------------------------------
// STEP 3: CREATE THE ANSWER-CHECKING FUNCTION
// --------------------------------------------
const checkAnswer = () => {
  // Get the current value from the text input
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);

  // We check for each lake. 
  // Note: For a better user experience, we usually use .toLowerCase() 
  // so the user doesn't have to worry about capitalization.
  
  if (currentAnswer === "Lake Superior" || currentAnswer === "Superior") {
    outputBox.innerHTML += "<h3>Lake Superior</h3><p>The largest freshwater lake in the world by surface area!</p>";
    score++;
    statusBox.textContent = "Correct! Superior is the king of the lakes.";
    statusBox.style.color = "green";

  } else if (currentAnswer === "Lake Michigan" || currentAnswer === "Michigan") {
    outputBox.innerHTML += "<h3>Lake Michigan</h3><p>The only Great Lake located entirely within the United States.</p>";
    score++;
    statusBox.textContent = "Nice! You found Lake Michigan.";
    statusBox.style.color = "green";

  } else if (currentAnswer === "Lake Huron" || currentAnswer === "Huron") {
    outputBox.innerHTML += "<h3>Lake Huron</h3><p>It has the longest shoreline of any of the Great Lakes.</p>";
    score++;
    statusBox.textContent = "Correct! Huron is beautiful.";
    statusBox.style.color = "green";

  } else if (currentAnswer === "Lake Erie" || currentAnswer === "Erie") {
    outputBox.innerHTML += "<h3>Lake Erie</h3><p>The shallowest and warmest of all the Great Lakes.</p>";
    score++;
    statusBox.textContent = "Spot on! That's Lake Erie.";
    statusBox.style.color = "green";

  } else if (currentAnswer === "Lake Ontario" || currentAnswer === "Ontario") {
    outputBox.innerHTML += "<h3>Lake Ontario</h3><p>The smallest Great Lake in surface area, but it's very deep!</p>";
    score++;
    statusBox.textContent = "You got it! Ontario found.";
    statusBox.style.color = "green";

  } else if (currentAnswer === "Lake Champlain" || currentAnswer === "Champlain") {
    // Secret bonus answer!
    outputBox.innerHTML += "<h3>Lake Champlain</h3><p>BONUS! For a few weeks in 1998, this was officially the 6th Great Lake.</p>";
    champlain = true;
    statusBox.textContent = "You found the secret bonus lake!";
    statusBox.style.color = "blue";

  } else {
    // If no conditions match, show an error message
    statusBox.textContent = "That's not one of the Great Lakes (or check your spelling)!";
    statusBox.style.color = "red";
  }

  // After checking the answer, verify if the game is complete
  checkScore();

  // Reset the text box for the next answer
  textBox.value = "";
};

// --------------------------------------------
// STEP 4: CREATE THE SCORE-CHECKING FUNCTION
// --------------------------------------------
const checkScore = () => {
  if (score === 5) {
    statusBox.textContent = "Congratulations! You found all 5 Great Lakes!";
    statusBox.style.color = "darkgreen";
  }
  
  if (score === 5 && champlain) {
    statusBox.textContent = "Master of the Lakes! You found all 5 AND the secret bonus lake!";
    statusBox.style.fontWeight = "bold";
    
    // Disable the text box since the game is complete
    textBox.disabled = true;
    textBox.placeholder = "Quiz Complete!";
  }
};

// --------------------------------------------
// STEP 5: ADD AN EVENT LISTENER
// --------------------------------------------
// Listen for the "change" event (triggered when user hits Enter)
textBox.addEventListener("change", checkAnswer);