let input1 = 0;
let input2 = 0;
let selectedGate = 'AND'; 

function setInput(value, inputNumber) {
    if (inputNumber === 1) {
        input1 = value;
        alert("Input 1 set to " + (value === 1 ? "High Voltage (1)" : "Low Voltage (0)"));
    } else if (inputNumber === 2) {
        input2 = value;
        alert("Input 2 set to " + (value === 1 ? "High Voltage (1)" : "Low Voltage (0)"));
    }
}

function setGate(gate) {
    selectedGate = gate;
    alert("Logic Gate set to " + gate);
}

function checkLogic() {
    const bulb = document.getElementById("bulb");
    let result = 0;
    
    
    switch (selectedGate) {
        case 'AND':
            result = input1 && input2;
            break;
        case 'OR':
            result = input1 || input2;
            break;
        case 'XOR':
            result = input1 ^ input2;
            break;
        case 'NAND':
            result = !(input1 && input2);
            break;
        case 'NOR':
            result = !(input1 || input2);
            break;
        case 'XNOR':
            result = !(input1 ^ input2);
            break;
        default:
            result = 0;
    }
    
   
    if (result === 1) {
        bulb.classList.add("on");
    } else {
        bulb.classList.remove("on");
    }
}