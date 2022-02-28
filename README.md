# hack-kulikov
**Only magic no hacking!!!**
### Purpose : ###
This code do magic on Learn.epam.com and prints the results of the test to the console. 
### How to use : ###
Copy all the functions and put them in the browser console.

If you passed the test and want to copy the correct answers :
```javascript
function justPrintResults() {
  setTimeout(displayCorrectAnswers, 1000);
  setTimeout(copyCorrectAnswers, 4000);
}

justPrintResults()
```
If you lazy :
```javascript
async function hackEpam() {
  await setAnswsers();
  await submitAnswers();
  justPrintResults();
}

hackEpam()
```
