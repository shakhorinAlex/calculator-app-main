const calcButtons = document.querySelectorAll(".calculator-btn");
const delButton = document.querySelector(".del");
const resetBtn = document.querySelector(".reset");
const equalBtn = document.querySelector(".equal");

const result = document.querySelector(".input-result");

// theme change //
const themeChangeBtn = document.querySelector("#theme-change-btn");
const calculatorContainer = document.querySelector('.calculator-input')
const calcOperators = document.querySelector('.calculator-operators')


$('label').on('click', function() {
    $(this).toggleClass('second');
});


function themeChange() {
    if (themeChangeBtn.checked) {
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        document.body.style.color = 'black';
        result.id = 'input-result2';
        calculatorContainer.id = 'calculator-input2';
        // calcButtons.id = 'calculator-btn2';
        delButton.id = 'rst2';
        resetBtn.id = 'rst2';
        equalBtn.id = 'equal-btn2';
        errorMessage.id = 'result-error2'
    } else {
        $("*[style]").removeAttr("style");
        result.removeAttribute('id');
        calculatorContainer.removeAttribute('id');
        // calcButtons.removeAttribute('id');
        delButton.removeAttribute('id');
        resetBtn.removeAttribute('id');
        equalBtn.removeAttribute('id');
        errorMessage.removeAttribute('id');
    }
}


$(themeChangeBtn).on('change', themeChange);

// theme change //

// calculation //
    

let equationValue = '';


function addValue() {
    let valueOfBtn = $(this).val();
    equationValue += valueOfBtn.toString();
    result.value = equationValue;
}

function evaluateResult() {
    if (equationValue !== '') {
        let calcResult = eval(equationValue);
        result.value = calcResult;
    } else {
        result.value = equationValue;
    }
    
}

$(calcButtons).on('click', addValue);

$(equalBtn).on('click', evaluateResult);

// calculation //

// delete symbol //

function del() {
    equationValue = result.value.slice(0, -1);
    result.value = equationValue;
}

$(delButton).on('click', del);

// reset button //

function reset() {
    result.value = '';
    equationValue = '';
}

$(resetBtn).on('click', reset);

// error //

const errorMessage = document.querySelector('.result-error')

window.onerror = function () {
    equationValue = result.value.slice(0, -1);
    result.value = equationValue;
    errorMessage.classList.add('active');

    setTimeout(() => {
        if (errorMessage.classList.contains('active')) {
            errorMessage.classList.remove('active');
        }
        
    }, 3000);

    
}
