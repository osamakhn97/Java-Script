const defaultResult = 0;
let currentResults = defaultResult;
// currentResults =(currentResults+10)*3;
// function add(n1,n2){
//     const result = n1+n2;
//     return result;
// };
function operation(operator){
if(operator === "ADD"){
    let enteredNum = parseInt(userInput.value);
    let resultDesc = `${currentResults} + ${enteredNum}`;
    report(operator,currentResults,currentResults+enteredNum);
    currentResults = currentResults+enteredNum;
    outputResult(currentResults,resultDesc);
    console.log(logEntries);
}
else if(operator === "Subtract"){
    let enteredNum = parseInt(userInput.value);
    let resultDesc = `${currentResults} - ${enteredNum}`;
    report(operator,currentResults,currentResults-enteredNum);
    currentResults = currentResults-enteredNum;
    outputResult(currentResults,resultDesc);
    console.log(logEntries);
}
else if(operator === "Multiply"){
    let enteredNum = parseInt(userInput.value);
    let resultDesc = `${currentResults} * ${enteredNum}`;
    report(operator,currentResults,currentResults*enteredNum);
    currentResults = currentResults*enteredNum;
    outputResult(currentResults,resultDesc);
    console.log(logEntries);
}
else{
    let enteredNum = parseInt(userInput.value);
    let resultDesc = `${currentResults} / ${enteredNum}`;
    report(operator,currentResults,currentResults/enteredNum);
    currentResults = currentResults/enteredNum;
    outputResult(currentResults,resultDesc);
    console.log(logEntries);
}

}
let logEntries = [] ;
function report(operator,prevValue,newVal){
    let logEntry={
        operation:operator,
        previousValue:prevValue,
        newValue:newVal
    }
    logEntries.push(logEntry);
}

addBtn.addEventListener('click',operation.bind(this,"ADD"));
subtractBtn.addEventListener('click',operation.bind(this,"Subtract"));

divideBtn.addEventListener('click',()=>{
    operation("Divide");
})
multiplyBtn.addEventListener('click',()=>{
 operation("Multiply");
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