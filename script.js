function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
  "const futureReimagined =${Imagination} ${Development} = A Future Reimagined",
  "console.log(futureReimagined);",
];

const el = document.getElementById("animated-text");

let sleepTime = 100;
let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i);
    }
  }
};
writeLoop();
