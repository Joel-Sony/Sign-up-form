const inputList = document.querySelectorAll("input");
const errorList = document.querySelectorAll(".error");
const emailRegex =/^\w+([.-]?\w+)*@\w+([.-]?\w+)(\.\w{2,3})+$/
const phoneRegex=/[0-9]+/
const passRegex=/\w{8,}/
const button=document.getElementById("butt");

for(let i=0;i<2;i++){
    inputList[i].addEventListener('input',()=>{
        errorList[i].textContent='';
    })
}
console.table(inputList);
inputList[2].addEventListener('input',()=>{
    if(!emailRegex.test(inputList[2].value)){
        errorList[2].textContent='*Enter valid email'
    }
    else{
        errorList[2].textContent='';
    }
})

inputList[3].addEventListener('input',()=>{
    if(!phoneRegex.test(inputList[3].value)){
        errorList[3].textContent='*Enter valid number'
    }
    else{
        errorList[3].textContent='';
    }
})

inputList[4].addEventListener('input',()=>{
    if(!passRegex.test(inputList[4].value)){
        errorList[4].textContent='*Minimum 8 characters';
    }
    else{
        errorList[4].textContent='';
    }
})

inputList[5].addEventListener('input',()=>{
    if(inputList[5].value!=inputList[4].value){
        errorList[5].textContent="*Passwords Don't Match";
    }
    else errorList[5].textContent='';
})


button.addEventListener("click",(e)=>{
    for(let i=0;i<6;i++){
        if(inputList[i].value==''){
            errorList[i].textContent="*This value is Required";
            e.preventDefault();
        }
        else if(errorList[i].textContent!=''){
            e.preventDefault();
        }
    }
})
