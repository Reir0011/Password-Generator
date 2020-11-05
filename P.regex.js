// DOm elements
const resultEL=document.getElementById('result');
const lengthEL=document.getElementById('length');
const uppercaseEL=document.getElementById('uppercase');
const lowercaseEl=document.getElementById('lowercase');
const numbersEL=document.getElementById('numbers');
const symbolsEL=document.getElementById('symbols');
const generateEl=document.getElementById('generate');
const clipboardEL=document.getElementById('clipboard');


const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
};
// Generate event listener
generateEl.addEventListener('click',()=>{

    const length=+lengthEL.value;
    
    const hasLower=lowercaseEl.checked;
    const hasNumber=numbersEL.checked;
    const hasUpper=uppercaseEL.checked;
    const hasSymbol=symbolsEL.checked;
    
    

    resultEL.innerText=generatePassword(
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol,
        length);
});

//  Copy password to clipboard
clipboardEL.addEventListener('click', ()=>{
    const textarea=document.createElement('textarea');
    const password=resultEL.innerText;

    if(!password){
        return;
    }

    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});

// Generate password function
function generatePassword(upper,lower,number,symbol,length){
    // 1. Init password variable
    // Filter out unchecked types
    /// Loop over the length call generator for each type
    // Add final password to the password variabler and return it
    
    
    let generatedPassword='';

    const typesCount=upper + lower + number + symbol;
    


    const typesArr=[{upper}, {lower},{number},{symbol}].filter
    (item => Object.values(item)[0]);

    
    if(typesCount===0){
        return '';
    }

    for(let i=0; i<length; i+= typesCount){
        typesArr.forEach(type=>{
            const funcName=Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword=generatedPassword.slice(0,length);

    return finalPassword;
}

// Generate Function  http://www.net-comber.com/charset.html

function getRandomLower(){
 return String.fromCharCode(Math.floor(Math.random() *26) +97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
   }

   function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
   }

   function getRandomSymbol(){
       const symbol='!()*&^%$#@[]{}/|]],.';
    return symbol[Math.floor(Math.random()*symbol.length)];
   }

console.log(getRandomSymbol());