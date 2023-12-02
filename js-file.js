let figures = "";

const buttons = document.querySelectorAll('.numButton');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        let info = button.value
        if (info === "ac".toUpperCase()) {
            figures = 0
            displayResult(figures)
        
        } else if (info === "%") {
            percentage(figures)

        } else if (info == "c".toUpperCase()) {
            if (figures == "0" || 0) {
                figures = 0
                displayResult(figures)
            } else {
                if (figures.length == 1) {
                    figures = 0
                    displayResult(figures);
                } else {
                    figures = figures.slice(0, -1);
                    displayResult(figures)
                }

            }


        } else {
            if (figures[0] === "0") {
                figures = figures.slice(1)
                displayResult(figures)
            }
            figures += info
            if (figures.length >= 15) {
                displayErrorMsg();
            } else if (figures.length <= 15) {
                displayResult(figures)
            } else {
                displayResultFloat(figures)
            }

        }
         
    })
})



// function reset () {
//     const response = document.getElementById('buttonAC');
//     response.addEventListener('click', () => {
//         location.reload()
//     })
// }

// reset ()

function basicMathOps (info) {
    if (info === "+") {
        sum()
    } else if (info === "-") {
        substract()
    } else if (info === "*") {
        multiply()
    } else {
        divide ()
    }
}

function resultMathOps (info ) {
    if (info === "%") {
        percentage()
    } else {
        
    }
}

function displayResult (message) {
    return document.querySelector('.outputText').innerText = parseFloat(message);
}

function displayResultFloat (message) {
    return document.querySelector('.outputText').innerText = message;
}

function displayErrorMsg () {

    return document.querySelector('.outputText').innerText = "Err. Max Exc.";
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

function percentage (figures) {
    figures = parseFloat(figures)
    figures = figures / 100
    return displayResult(figures)
}

function equalsTo (a) {
    return a
}