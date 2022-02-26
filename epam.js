function beforeMagic(){
    const btns = document.querySelectorAll(".problem-action-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].click();
    }
}

function magic() {
  let text = ''
  const isCorrect = (label) => Boolean(label.querySelector(".correct"));
  const fieldSets = document.getElementsByTagName("fieldSet");
  for (let i = 0; i < fieldSets.length; i++) {
    const labels = fieldSets[i].getElementsByTagName("label");
    const legend = fieldSets[i].getElementsByTagName("legend");
    text += legend[0].textContent + "\n";
    for (let j = 0; j < labels.length; j++) {
      if (isCorrect(labels[j])) {
        text += '   ' + labels[j].childNodes[4].nodeValue.trim() + '\n';
      }
    }
    text += '\n\n';
  }
  return text;
}

function hackEpam() {
    beforeMagic();
    setTimeout(() => console.log(magic()), 4000);
}

hackEpam();