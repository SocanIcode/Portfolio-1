const textArray = [
  { text: "building clean,", id: "blue" },
  { text: "efficient,", id: "yellow" },
  { text: "innovative digital solutions,", id: "green" },
  { text: "<br>", id: "" }, 
  { text: "—one line of code at a time.", id: "tag" }
];

const animatedText = document.getElementById("animated-text");

let wordIndex = 0;
let charIndex = 0;
let speed = 100; // Typing speed in milliseconds
let pauseTime = 2000; // Pause before restarting

function typeText() {
  if (wordIndex < textArray.length) {
    let currentWord = textArray[wordIndex];

    if (currentWord.text === "<br>") {
      animatedText.innerHTML += "<br>"; // Add line break
      wordIndex++;
      setTimeout(typeText, speed);
    } else {
      let spanTag = `<span id="${currentWord.id}">${currentWord.text.slice(0, charIndex + 1)}</span>`;

      // Clear previous text and re-add each typed character
      animatedText.innerHTML = textArray
        .slice(0, wordIndex)
        .map(word => `<span id="${word.id}">${word.text}</span>`)
        .join(" ") + " " + spanTag;

      charIndex++;

      if (charIndex < currentWord.text.length) {
        setTimeout(typeText, speed);
      } else {
        charIndex = 0;
        wordIndex++;
        setTimeout(typeText, speed);
      }
    }
  } else {
    setTimeout(resetAnimation, pauseTime);
  }
}

function resetAnimation() {
  animatedText.innerHTML = "";
  wordIndex = 0;
  charIndex = 0;
  setTimeout(typeText, 500);
}

window.onload = typeText;

document.querySelectorAll("a").forEach(link => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

