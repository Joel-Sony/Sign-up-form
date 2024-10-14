const inputList = document.querySelectorAll("input");
const errorList = document.querySelectorAll(".error");
const emailRegex =/^\w+([.-]?\w+)*@\w+([.-]?\w+)(\.\w{2,3})+$/
const phoneRegex=/[0-9]+/
console.table(inputList);
inputList[2].addEventListener('input',()=>{
    if(!emailRegex.test(inputList[2].value)){
        errorList[2].textContent='Enter valid email'
    }
    else{
        errorList[2].textContent='';
    }
})

inputList[3].addEventListener('input',()=>{
    if(!phoneRegex.test(inputList[3].value)){
        errorList[3].textContent='Enter valid number'
    }
    else{
        errorList[3].textContent='';
    }
})