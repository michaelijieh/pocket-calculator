const buttons = document.querySelectorAll('.numButton');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let input = button.value
        inputCollector(input)

    })
})

let inputs = "";
let inputs1 = "";
let total = 0;

let field = "";
let cup = [];




function inputCollector(input) {
    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    const ops = ["+", "-", "*", "/"]


    if (input == "AC") {
        inputs = "0";
        zeroInputs()
        clearTotal()
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

        displayInput(inputs)

    
    
    } else if (input == "±") {
        if (!inputs.includes("-")) {
            inputs = "-" + inputs;
            displayInput(inputs);
            
        } else if (inputs.includes("-")) {
            inputs = inputs.substring(1);
            displayInput(inputs)
        }
    }
    else if (input == "%") {

        if (typeof inputs == "number") {
            inputs * 100;
            inputs = inputs / 100;
            inputs / 100;
    
            displayInput(inputs)
            zeroInputs()

        } else {
            inputs = parseFloat(inputs);

            inputs * 100;
            inputs = inputs / 100;
            inputs / 100;
    
            displayInput(inputs)
            zeroInputs()

        }
       
    } else if (ops.includes(input)) {

        
        // opsFinder (field, inputs);
        
        if (input == "+") {

            cup.push(inputs);
            cup.push("+");

            if (cup.includes("+") && (cup.length == 3)) {
                let summing = parseFloat(cup[0]) + parseFloat(cup[2]);
                console.log('right here plus')
                console.log(summing);
                cup = []
                cup.push(summing)

            }

            total = cup[0];

      
            displayInput(total);

            zeroInputs();
        
        
        } 
        // else if (input == "-") {

        //     cup.push(inputs);
        //     cup.push("-");

        //     if (cup.includes("-") && (cup.length == 3)) {
        //         let summing = parseFloat(cup[0]) - parseFloat(cup[2]);
        //         console.log('right here minus')
        //         console.log(summing);
        //         cup = []
        //         cup.push(summing)

        //     }

        //     total = cup[0];

      
        //     displayInput(total);
        //     zeroInputs();
        
        // }

    }
   

    // }  else if (input == "-") {
    //     if (inputs == "" || 0) {
    //         inputs = 0;
    //         total -= parseFloat(inputs);
    //         zeroInputs();
    //         displayInput();
    //     } else {
    //         total -= parseFloat(inputs);
    //         console.log(total);
    //         zeroInputs()
    //         displayInput(total)
    //     }

    // } 


}


// let lastInput = 0;
// let anoInput = 0;
// let cell = 0;

// function opsFinder (field, inputs) {
//     let symbol = field.slice(-1);
//     console.log(field)
//     let number = parseFloat(field.slice(0, -1));
//     console.log(inputs)
//     console.log(symbol)

//     inputs = parseFloat(inputs)
//     console.log("I'm active")
//     cell += inputs
//     console.log(typeof cell)
//     console.log(cell)



//     if (symbol == "*") {
//         console.log (inputs * number)


//     } else if (symbol == "+") {
//         console.log("got me");
//         let x = inputs + number;
//         console.log(inputs + number);
//         lastInput += x;
//         console.log(inputs + number)
//         console.log(anoInput += inputs)
//         console.log(lastInput);
//         console.log("end");


//     } else if (symbol == "-") {
//         console.log(inputs - number)
//     } else if (symbol == "/") {
//         console.log(inputs / number)
//     }

// }




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

function clearTotal () {
    total = 0;
    console.log("nototal")
    return total
}

function equalsTo () {
    return document.querySelector('.outputText').innerText = total;
}

function sum (inputs1) {
    return document.querySelector('.outputText').innerText = inputs1;

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

// function percentage (inputs) {
//     inputs = parseFloat(inputs)
//     inputs = inputs / 100
    
//     displayInput(inputs)
//     // inputs += inputs
//     // internalValue(inputs)
//     // return String(inputs)
//     toString(inputs)
//     inputs = inputs
// }

// function equalsTo (inputs) {
//     inputs = parseFloat(inputs)
    
//     displayInput(inputs)
//     zeroInputs()
//     return inputs
// }







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



const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const opsSymbols = ["+", "-", "*", "/"]

let numInputs = [];
let proInputs = [];
let opsCommand = "";


const numberButtons = document.querySelectorAll('input');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let input = button.value
        if (numbers.includes(input)) {
            numberInputCollector(input)

        } else if (opsSymbols.includes(input)) {
            opsCommand = input
            console.log(opsCommand)

            
                let sum = "";
                numInputs.forEach(element => {
                    sum += element;
                });
                
                proInputs.push(sum);
                numInputs = [];

                if (input == "+") {

                    finisher (opsCommand, proInputs)


                    
                    console.log(proInputs)
                    
                    if (proInputs == "") {
                        console.log(0);
                        proInputs = [];
                        proInputs.push("0");
                    }
                    else if (proInputs.length == 1) {
                        console.log(parseFloat(proInputs[0]));
                    } else {
                        let sumNum = 0;
                        if (proInputs[1] == "") {
                            proInputs[1] = "0"
                            sumNum = parseFloat(proInputs[0]) + parseFloat(proInputs[1]);
                            console.log(sumNum);
                            proInputs = [];
                            proInputs.push(String(sumNum));

                        } else {
                            sumNum = parseFloat(proInputs[0]) + parseFloat(proInputs[1]);
                            console.log(sumNum);
                            proInputs = [];
                            proInputs.push(String(sumNum));
                        }
                        
                    }



                } else if (input == "-") {
                    if (proInputs.length == 0 ) {

                         

                    }
                    
                    if (proInputs == "") {
                        console.log(0)
                        proInputs = []
                        proInputs.push("0")
                    }
                    else if (proInputs.length == 1) {
                        console.log(parseFloat(proInputs[0]));
                    } else {
                        let sumNum = 0;
                        if (proInputs[1] == "") {
                            proInputs[1] = "0"
                            sumNum = parseFloat(proInputs[0]) - parseFloat(proInputs[1]);
                            console.log(sumNum);
                            proInputs = [];
                            proInputs.push(String(sumNum))


                        } else {
                            sumNum = parseFloat(proInputs[0]) - parseFloat(proInputs[1]);
                            console.log(sumNum)
                            proInputs = [];
                            proInputs.push(String(sumNum))
                        }
                        
                    }

                }

            }

    })
})


function numberInputCollector(input) {
    numInputs.push(input);

}

function symbolInputCollector(input) {
    proInputs.push(input);

}

function finisher (opsCommand, proInputs) {
    
    console.log("were here")
    console.log(opsCommand)
    if (proInputs.length == 2) {
        console.log(parseFloat(proInputs[0]) + parseFloat(proInputs[1]))
        console.log("were end")

    }
}