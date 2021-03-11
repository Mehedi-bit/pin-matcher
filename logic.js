// pin generator handling
const pinInput = document.getElementById('pin-input');
const generateBtn = document.getElementById('pin-generate-btn');
generateBtn.addEventListener('click', function(){
    const pin = pinGenerator();
    pinInput.value = pin;
})
function pinGenerator(){
    const pin = Math.floor(1000 + (Math.random()) * 9000);
    return pin;
}

// number typing handling
const calcInput = document.getElementById('calc-input');
const buttons = document.getElementsByClassName('button');
let calcDigits = '';
for (let i = 0; i < buttons.length; i++) {
    const item = buttons[i];
    item.addEventListener('click', function(event){

        const buttonText = item.innerText;
           
        if (buttonText == 'C') {
            calcClear();
        }
        else if (buttonText == '<') {
            calcDigits = calcDigits.slice(0,-1);
            calcInput.value = calcDigits;
        }
        else {
            calcDigits += buttonText;
            calcInput.value = calcDigits;
        }
    })
}

// submit button handling
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(){
    console.log(calcDigits);

    if (calcDigits == pinInput.value) {
        document.getElementsByClassName('notify')[1].style.display = "block";
        document.getElementsByClassName('notify')[0].style.display = "none";
        calcClear();
        pinClear();
    }
    else {
        document.getElementsByClassName('notify')[0].style.display = "block";
        document.getElementsByClassName('notify')[1].style.display = "none";
        calcClear();
    }
})
function calcClear(){
    calcDigits = '';
    calcInput.value = calcDigits;
}
function pinClear(){
    pinInput.value = ""
}

    
