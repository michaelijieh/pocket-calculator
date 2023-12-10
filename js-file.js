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
            
            numInputs += input;
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

            if (compiler = []) {
                numInputs = parseFloat(numInputs)
                let percentResult = numInputs / 100;

                display(percentResult)
                compiler.push(String(percentResult))

                numInputs = "";


            } else if (compiler = ![]) {
                numInputs = parseFloat(compiler([0]))
                let percentResult2 = numInputs / 100;

                display(percentResult2)
                compiler.push(String(percentResult2))


            }


            // if (!numInputs == "") {
            //     compiler.push(numInputs);
            //     console.log(compiler);      


            // }
            
            // compiler.push(numInputs);
            // console.log(compiler)
            // let result = parseFloat(compiler[0]) / 100;

            // // emptyCompiler();

            // return compiler.push(result)


            


            // display(result)

        }
        
    })
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
    document.querySelector('.outputText').innerText = message;


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

// function commandPercentage (z) {
//     emptyCompiler();
//     return compiler.push(z)
// }
