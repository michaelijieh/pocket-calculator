const buttons = document.querySelectorAll('.numButton');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let input = button.value
        inputCollector(input)

    })
})

let inputs = "";


function inputCollector(input) {
    let numbers = ["0","1","2","3","4","5","6","7","8","9"]

    if (input == "AC") {
        inputs = "0";
        zeroInputs()
        displayInput(inputs)

    } else if (input == "." && (!inputs.includes("."))) {
        if (inputs == "0" || 0 || "") {
            inputs = "0.";
        displayInput(inputs)
        } else if (inputs == "") {
            inputs = '0.'
            displayInput(inputs)
        }
        else {
            inputs += ".";
            displayInput(inputs)
        }
    } else if (input == "C") {
        if (inputs == "0" || 0 || "") {
            inputs = 0;
            zeroInputs()
            displayInput(inputs) 
        } else if ((inputs.length == 1) || inputs == "." || (parseFloat(inputs) <= 0.1 && (inputs.includes(".")) && inputs.length == 3) || inputs == "0") {
            inputs = 0;
            zeroInputs()
            displayInput(inputs)
        } else if (inputs == "0" || 0) {
            zeroInputs()
            displayInput(inputs)
        }
        else {
            inputs = inputs.slice(0, -1)
            displayInput(inputs)
        }
    } else if (numbers.includes(input)) {
        if (input == "0" && inputs.length == 1 && inputs.startsWith("0" || "0.")) {
            inputs = "0";
            displayInput(inputs);

        } else if (inputs.startsWith("0" || "0.") && parseFloat(inputs) == 0) {
            inputs += input;
            inputs = inputs.slice(1);
            displayInput(inputs);
        } else if (!numbers.includes("0") && inputs == "0" || "0.") {
            inputs += input;
            displayInput(inputs)

        } 
        else {
            inputs += input;
            displayInput(inputs);
        }
    
    
    
    } else if (input == "%") {
        percentage(inputs)
    } else if (input == "=") {
        equalsTo(inputs)
    }
}


function displayInput (inputs) {
    if (inputs.length > 15) {
        zeroInputs ()
        return document.querySelector('.outputText').innerText = "Error"
    }
    return document.querySelector('.outputText').innerText = inputs;
}

function zeroInputs () {
    inputs = "0";
    console.log("no")
    return inputs
}

function sum (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function percentage (inputs) {
    inputs = parseFloat(inputs)
    inputs = inputs / 100
    
    displayInput(inputs)
    zeroInputs()
    inputs += inputs
    return String(inputs)
}

function equalsTo (inputs) {
    inputs = parseFloat(inputs)
    
    displayInput(inputs)
    zeroInputs()
    return inputs
}







// let info = button.value
// if (info == "ac".toUpperCase()) {
//     figures = 0
//     displayResult(figures)

// } else if (info == "%") {
//     percentage(figures)

// } else if (info == ".") {
//     figures += "."
//     displayResultFloat(figures)
    
// }
// else if (info == "c".toUpperCase()) {
//     if (figures == "0" || 0) {
//         figures = 0
//         displayResult(figures)
//     } else {
//         if (figures.length == 1) {
//             figures = 0
//             displayResult(figures);
//         } else {
//             figures = figures.slice(0, -1);
//             displayResult(figures)
//         }

//     }


// } else {
//     if (figures[0] === "0") {
//         figures = figures.slice(1)
//         displayResult(figures)
//     }
//     figures += info
//     if (figures.length >= 15) {
//         displayErrorMsg();
//     } else if (figures.length <= 15) {
//         displayResult(figures)
//     } else {
//         displayResultFloat(figures)
//     }

// }
 


// function reset () {
//     const response = document.getElementById('buttonAC');
//     response.addEventListener('click', () => {
//         location.reload()
//     })
// }

// reset ()