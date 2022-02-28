const fieldSets = document.getElementsByTagName("fieldset");
function setAnswsers() {
  return new Promise((res) => {
    for (let i = 0; i < fieldSets.length; i++) {
      const answsers = fieldSets[i].querySelectorAll("span");
      answsers[Math.floor(Math.random() * 4)].click();
    }
    res();
  });
}
function submitAnswers() {
  return new Promise((res) => {
    const submits = document.querySelectorAll(".submit");
    for (let i = 0; i < submits.length; i++) {
      submits[i].click();
    }
    res();
  });
}
function displayCorrectAnswers() {
  const displayBtns = document.querySelectorAll(".problem-action-btn");
  for (let i = 0; i < displayBtns.length; i++) {
    displayBtns[i].click();
  }
}
function copyCorrectAnswers() {
  let text = "";
  const isCorrect = (label) => Boolean(label.querySelector(".correct"));
  for (let i = 0; i < fieldSets.length; i++) {
    const labels = fieldSets[i].getElementsByTagName("label");
    const legend = fieldSets[i].getElementsByTagName("legend");
    text += legend[0].textContent + "\n";
    for (let j = 0; j < labels.length; j++) {
      if (isCorrect(labels[j])) {
        text += "   " + labels[j].childNodes[4].nodeValue.trim() + "\n";
      }
    }
    text += "\n\n";
  }
  console.log(text);
}
function justPrintResults() {
  setTimeout(displayCorrectAnswers, 1000);
  setTimeout(copyCorrectAnswers, 4000);
}
async function hackEpam() {
  await setAnswsers();
  await submitAnswers();
  justPrintResults();
}
