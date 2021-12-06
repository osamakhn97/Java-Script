const defaultResult = 0;
let currentResults = defaultResult;
// currentResults =(currentResults+10)*3;
// function add(n1,n2){
//     const result = n1+n2;
//     return result;
// };
let logEntries = [] ;
function report(operator,prevValue,newVal){
    let logEntry={
        operation:operator,
        previousValue:prevValue,
        newValue:newVal
    }
    logEntries.push(logEntry);
}
addBtn.addEventListener('click',()=>{
    let enteredNum = parseInt(userInput.value);
let resultDesc = `${currentResults} + ${enteredNum}`;
report("ADD",currentResults,currentResults+enteredNum);
currentResults = currentResults+enteredNum;
outputResult(currentResults,resultDesc);
console.log(logEntries);

})
subtractBtn.addEventListener('click',()=>{
    let enteredNum = parseInt(userInput.value);
let resultDesc = `${currentResults} - ${enteredNum}`
report("Subtract",currentResults,currentResults+enteredNum);
currentResults = currentResults-enteredNum;
outputResult(currentResults,resultDesc);
console.log(logEntries);
})
divideBtn.addEventListener('click',()=>{
    let enteredNum = parseInt(userInput.value);
let resultDesc = `${currentResults} / ${enteredNum}`
report("Divide",currentResults,currentResults+enteredNum);
currentResults = currentResults/enteredNum;
outputResult(currentResults,resultDesc);
console.log(logEntries);
})
multiplyBtn.addEventListener('click',()=>{
    let enteredNum = parseInt(userInput.value);
let resultDesc = `${currentResults} * ${enteredNum}`
report("Multiply",currentResults,currentResults+enteredNum);
currentResults = currentResults*enteredNum;
outputResult(currentResults,resultDesc);
console.log(logEntries);
})


// currentResults = add(5,7);

// function add(n1,n2){
//     const result = n1+n2;
//     alert(`result is ${result}`) 
// };
// add(11,2); 
// -------------------------
// let add = (n1,n2)=>{
// const result = n1+n2;
// alert(result)
// }

// add(1,4);