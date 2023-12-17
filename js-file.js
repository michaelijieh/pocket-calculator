const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const opsSymbols = ["+", "-", "*", "/", "="]


let opsInput = [];
let numInputs = "";
let compiler = [];


const allButtons = document.querySelectorAll('input');
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        let input = button.value
        if (numbers.includes(input)) {
            
            if (numInputs.length >= 1 && numInputs[0] == "0" && numInputs[1] != ".") {
                numInputs = numInputs.slice(1)
            }

            if (input == ".") {
  
                let count = (numInputs.match(/\./g) || []).length;

                if (count == 0) {
                    numInputs += ".";
                } else {
                    numInputs;
                }
            } else {
                numInputs += input;
            }
            
            console.log(numInputs);
            display(numInputs);

            // Turns off the highlighted operand button
            buttonHighlightOff ()

        } else if (opsSymbols.includes(input)) {

            // Turns on the highlighted operand button
            buttonHighlightOn (input);

            if (!numInputs == "") {
                compiler.push(numInputs);
                console.log(compiler);      


            }
            console.log("probe start")
            console.log(compiler)
            console.log(compiler.length)
            console.log("probe end")
            if (compiler.length == 2) {
                let x = parseFloat(compiler[0]);
                let y = parseFloat(compiler[1]);
                let z;

                if (opsInput[0] == "+") {

                    commandAdd(x, y, z);

                } else if (opsInput[0] == "-") {

                    commandDifference(x, y, z);
                   
                } else if (opsInput[0] == "*") {

                    commandProduct(x, y, z);


                } else if (opsInput[0] == "/") {

                    commandQuotient(x, y, z);
                    
                } else if (opsInput[0] == "=") {

                    commandEquals(x, y, z);


                } 
                
                console.log("answers")
                console.log(compiler[0])
                display(compiler[0])
                
            }

            zeroNumCollector ();

            opsInput[0] = input;

            console.log(opsInput);

            
        
        
        } else if (input == "AC") {
            clearScreen()
        } else if (input == "C") {
            backspace()

        } 
        else if (input == "%") {

            if (compiler.length == 0) {
                numInputs = parseFloat(numInputs)
                let percentResult = numInputs / 100;

                display(percentResult)
                compiler.push(String(percentResult))

                numInputs = "";


            } else if (compiler.length > 0) {
                numInputs = parseFloat(compiler([0]))
                let percentResult2 = numInputs / 100;

                display(percentResult2)
                compiler.push(String(percentResult2))


            }

        } else if (input == "±") {
            if (compiler.length == 0) {

                if (numInputs.length == 0) {
                    numInputs = "-" + "0";
                    display(numInputs);

                } else if (!numInputs.includes("-")) {
                    numInputs = "-" + numInputs;
                    display(numInputs);
                } else if (numInputs.includes("-")) {
                    numInputs = numInputs.slice(1)
                    display(numInputs)
                    
                }
            } else {
                compiler[0] = String(compiler[0]);

                if (!compiler[0].includes("-")) {
                    compiler[0] = "-" + String(compiler[0]);
                    console.log(compiler[0]);
                    display(compiler[0]);
                } else if (compiler[0].includes("-")) {

                    compiler[0] = String(compiler[0]).slice(1);
                    console.log(compiler[0]);
                    display(compiler[0]);

                }
            }
        
    }})
})


function buttonHighlightOn (input) {
    const button = document.querySelectorAll('.symbolButton');
    button.forEach(button => {
        if (button.value == input) {
            button.style.backgroundColor = "grey";
            button.style.color = "white";
            
        } else {
            button.style.backgroundColor = "#FAF9F6";
            button.style.color = "grey";
        }

    })

}

function buttonHighlightOff () {
    const button = document.querySelectorAll('.symbolButton');
    button.forEach(button => {
        
        button.style.backgroundColor = "#fAF9F6";
        button.style.color = "grey";
        
    })

    
}

function clearScreen () {
    opsInput = [];
    numInputs = "";

    compiler = [];
    buttonHighlightOff ();

    document.querySelector('.outputText').innerText = "0";
}

function backspace () {
    numInputs = String(numInputs);

    numInputs = numInputs.slice(0,-1);

    if (numInputs.length < 1) {
        console.log('yes')
        numInputs = "0";
        document.querySelector('.outputText').innerText = numInputs;
    } else if (typeof(numInputs) == "number") {
        opsInput = [];
        numInputs = "";
    
        compiler = [];
    
        document.querySelector('.outputText').innerText = "0";
    } else {
        document.querySelector('.outputText').innerText = numInputs;


    }
}


function display (message) {
    if (message.length > 15) {
        message = "Err. "
        clearScreen ();
        zeroNumCollector ();
        emptyCompiler ();
    } else {
        document.querySelector('.outputText').innerText = message;
}
}


function zeroNumCollector () {
    numInputs = ""
    return numInputs
}


function emptyCompiler () {
    compiler = []
    return compiler
}



function commandAdd (x, y, z) {
    z = x + y;
    emptyCompiler();

    return compiler.push(z)
}

function commandDifference (x, y, z) {
    z = x - y;
    emptyCompiler();

    return compiler.push(z)
}

function commandProduct (x, y, z) {
    z = x * y;
    emptyCompiler();

    return compiler.push(z)
}

function commandQuotient (x, y, z) {
    z = x / y;
    emptyCompiler();

    return compiler.push(z)
}

function commandEquals (x, y, z) {
    z = x + y;
    emptyCompiler();

    return compiler.push(z)
}
