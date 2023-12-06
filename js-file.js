const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const opsSymbols = ["+", "-", "*", "/", "=", "%"]


let opsInput = [];
let numInputs = "";

let compiler = [];



const numberButtons = document.querySelectorAll('input');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let input = button.value
        if (numbers.includes(input)) {
            
            numInputs += input;
            console.log(numInputs);
            display(numInputs);
                        

        } else if (opsSymbols.includes(input)) {
            if (!numInputs == "") {
                compiler.push(numInputs);
                console.log(compiler)      


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

                    commandAdd(x, y, z)

                } else if (opsInput[0] == "-") {

                    commandDifference(x, y, z)
                   
                } else if (opsInput[0] == "*") {

                    commandProduct(x, y, z)


                } else if (opsInput[0] == "/") {

                    commandQuotient(x, y, z)
                    
                } else if (opsInput[0] == "%") {
                    z = x + y;
                    z/100
                    emptyCompiler();

                    compiler.push(z)
                }


                 else if (opsInput[0] = "=") {

                    commandEquals(x, y, z)

                }


                console.log("answers")
                console.log(compiler[0])
                display(compiler[0])
                
            }

            zeroNumCollector ();

            // opsInput.push(input);
            opsInput[0] = input;

            console.log(opsInput)
        
        
        } else if (input == "AC") {
            clearScreen()
        } else if (input == "C") {
            backspace()

        }
        // else if (input == "%") {

        //     let x = compiler[0];
        //     if (compiler[0] == "" ) {
        //         console.log('yes')
                
        //         console.log(0)
        //     } else {
        //         x = parseFloat(x) 
        //         x/ 100
        //         console.log(x)

        //     }

        //     emptyCompiler();

        //     compiler.push(x)


        // }

    })
})

function clearScreen () {
    opsInput = [];
    numInputs = "";

    compiler = [];

    document.querySelector('.outputText').innerText = "0";
}

function backspace () {
    numInputs = String(numInputs);

    numInputs = numInputs.slice(0,-1);
    // if (numInputs == "" || 0 || "0") {
    //     numInputs = ""
    // } else {
    //     String(numInputs);
    //     numInputs = numInputs.slice(0,-1)
    //     document.querySelector('.outputText').innerText = 0;

    // }

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
