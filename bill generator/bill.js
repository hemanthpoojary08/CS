function toggle(item) {
    var qty = item.toLowerCase() + "-qty";
    var amt = item.toLowerCase() + "-amt";

    if (document.getElementById(item).checked) {
        document.getElementById(qty).disabled = false;
    } else {
        document.getElementById(qty).value = "";
        document.getElementById(amt).value = "";
        document.getElementById(qty).disabled = true;
    }
}

function update_amt(id, value) {
    var item = id.replace("-qty", "");
    var cost = 0;
    switch (item) {
        case 'pen': cost = 5; break;
        case 'book': cost = 70; break;
        case 'soap': cost = 30; break;
        case 'bag': cost = 450; break;
    }

    document.getElementById(item + "-amt").value = cost * value;
}

function calculate() {
    var total = 0;
    var cgst = 0, sgst = 0, gtotal = 0;

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (cb) {
        if (cb.checked) {
            var item = cb.id.toLocaleLowerCase();
            var cost = parseFloat(document.getElementById(item + "-amt").value);
            total += cost;
        }
    });

    cgst = total * 0.08;
    sgst = total * 0.08;
    gtotal = total + cgst + sgst;

    document.getElementById("total").innerHTML = total.toFixed(2);
    document.getElementById("cgst").innerHTML = cgst.toFixed(2);
    document.getElementById("sgst").innerHTML = sgst.toFixed(2);
    document.getElementById("gtotal").innerHTML = gtotal.toFixed(2);
    document.getElementById("totalbill").style.visibility = "visible";
}

function clearall() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (cb) {
        if (cb.checked) {
            var item = cb.id.toLocaleLowerCase();
            cb.checked = false;
            document.getElementById(item + '-qty').value = '';
            document.getElementById(item + '-qty').disabled = true;
            document.getElementById(item + '-amt').value = '';
        }
    });
     document.getElementById("total").innerHTML = '';
    document.getElementById("cgst").innerHTML = '';
    document.getElementById("sgst").innerHTML = '';
    document.getElementById("gtotal").innerHTML = '';
    document.getElementById("totalbill").style.visibility = "hidden";
}
