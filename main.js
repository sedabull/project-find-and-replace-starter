// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const replaceOneButton = document.querySelector(".replace-one-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");
const fieldsetElement = document.querySelector("fieldset");

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell");
}//end getCellElements


// YOUR CODE GOES HERE
const replaceCounterLabel = document.createElement('label');
const replaceCounterOutput = document.createElement('output');

replaceCounterOutput.name = 'replace-counter';
replaceCounterLabel.htmlFor = 'replace-counter';
replaceCounterLabel.innerHTML = 'Number of Replacements:';

replaceAllButton.addEventListener('click', function() {
    let replaceCounter = 0;
    let findString = findInput.value;
    let replaceString = replaceInput.value;
    
    for(let row of rowElements) {
        let cellElements = getCellElements(row);
        
        for(let cell of cellElements) {
            if(cell.innerHTML.includes(findString)) {
                replaceCounter++;
                cell.innerHTML = cell.innerHTML.replace(findString, replaceString);
            }//end if
        }//end for
    }//end for

    replaceCounterOutput.value = replaceCounter;
    if(!replaceCounterLabel.isConnected) {
        fieldsetElement.appendChild(replaceCounterLabel);
        fieldsetElement.appendChild(replaceCounterOutput);
    }//end if
});//end replaceAllButton

replaceOneButton.addEventListener('click', function() {
    let replaceCounter = 0;
    let findString = findInput.value;
    let replaceString = replaceInput.value;
    
    for(let row of rowElements) {
        let cellElements = getCellElements(row);
        
        for(let cell of cellElements) {
            if(cell.innerHTML.includes(findString)) {
                replaceCounter++;
                cell.innerHTML = cell.innerHTML.replace(findString, replaceString);
                
                replaceCounterOutput.value = replaceCounter;
                if(!replaceCounterLabel.isConnected) {
                    fieldsetElement.appendChild(replaceCounterLabel);
                    fieldsetElement.appendChild(replaceCounterOutput);
                }//end if

                return;
            }//end if
        }//end for
    }//end for

});//end replaceOneButton
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
