function Show(value) {
    document.getElementById("disp").value += value;
}

function Calculate() {
    let val = document.getElementById("disp").value;
    let ans = eval(val);
    document.getElementById("disp").value = ans;
}

function Clear() {
    document.getElementById("disp").value = "";
}