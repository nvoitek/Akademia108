// setup output
let output = document.getElementById("output");
clear();

// btn functions
function insertNr(nr) {
    // check if in a middle of operation
    if (operation != "" && store == "") {
        store = output.value;
        output.value = nr;
    } else {
        if (output.value == "0" || output.value == "ERROR") {
            output.value = nr;
        } else {
            output.value += nr;
        }
    }

    console.log(`store=${store} op=${operation} out=${output.value}`);
}

function insertDot() {
    if (!output.value.includes('.')) {
        output.value += '.';
        console.log(`store=${store} op=${operation} out=${output.value}`);
    }
}

function insertOperation(op) {
    // firstly calculate what's in store
    equals();

    operation = op;
    
    console.log(`store=${store} op=${operation} out=${output.value}`);
}

function equals() {
    if (store != "") {
        if (operation == "/" && output.value == "0") {
            output.value = "ERROR";
        } else {
            output.value = eval(store + operation + output.value);
        }

        store = "";
        operation = "";
        console.log(`store=${store} op=${operation} out=${output.value}`);
    }
}

function calcPercent() {
    if (store != "") {
        // 150 + 10% = 150 + (10 * 150)/100 = 150 + 15
        let calculatedValue = output.value * store / 100;

        output.value = eval(store + operation + calculatedValue);

        store = "";
        operation = "";
        console.log(`store=${store} op=${operation} out=${output.value}`);
    }
}

function clear() {
    output.value = "0";
    store = "";
    operation = "";

    console.log(`store=${store} op=${operation} out=${output.value}`);
}

// add event handlers
let nrBtns = document.querySelectorAll("button[id^='nr']");
for (let nrBtn of nrBtns) {
    let nr = nrBtn.id[2];
    nrBtn.addEventListener("click", () => insertNr(nr));
}

document.getElementById("dot-btn").addEventListener("click", () => insertDot());
document.getElementById("add-btn").addEventListener("click", () => insertOperation("+"));
document.getElementById("mul-btn").addEventListener("click", () => insertOperation("*"));
document.getElementById("sub-btn").addEventListener("click", () => insertOperation("-"));
document.getElementById("div-btn").addEventListener("click", () => insertOperation("/"));
document.getElementById("equ-btn").addEventListener("click", () => equals());
document.getElementById("per-btn").addEventListener("click", () => calcPercent());
document.getElementById("del-btn").addEventListener("click", () => clear());