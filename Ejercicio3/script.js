function formProcess() {
    var budgetArray = document.getElementsByName("budget");
    var product = document.getElementById("product").value;
    var cantidad = document.getElementById("cant").value;
    var price = document.getElementById("price").value;
    var estado = "";

    //Proceso del select
    var budget = 0;
    for (var i = 0, length = budgetArray.length; i < length; i++) {
        if (budgetArray[i].selected) {
            budget = parseInt(budgetArray[i].value)
        }
    }

    //Analizo si el presupuesto alcanza
    subtotal = cantidad * price
    if (budget > subtotal) {
        estado = "dentro"
    } else {
        estado = "sobre"
    }

    //alert(budget+" "+ product +" " + cantidad + " " + price)
    //Creo diccionario con la información
    infoDict = {
        "producto": product,
        "cantidad": cantidad,
        "precio": price,
        "subtotal": subtotal,
        "estado": estado
    }

    //alert(infoDict["producto"] + infoDict["cantidad"] + infoDict["precio"] + infoDict["subtotal"] + infoDict["estado"])
    row_nr = 0;
    col_nr = 0;
    var table = document.getElementById("myTable");
    var row = document.getElementById("row_" + row_nr);
    var cell = row.insertCell(row_nr, col_nr);
    cell.innerHTML = infoDict["estado"];
    col_nr++;
    var cell = row.insertCell(row_nr, col_nr);
    cell.innerHTML = infoDict["subtotal"];
    col_nr++;
    var cell = row.insertCell(row_nr, col_nr);
    cell.innerHTML = infoDict["precio"];
    col_nr++;
    var cell = row.insertCell(row_nr, col_nr);
    cell.innerHTML = infoDict["cantidad"];
    col_nr++;
    var cell = row.insertCell(row_nr, col_nr);
    cell.innerHTML = infoDict["estado"];
    col_nr++;


    if (col_nr % 5 == 0) {
        col_nr = 0;
        row_nr++;
        var row = table.insertRow(row_nr);
        row.setAttribute("id", "row_" + row_nr);
    }

}

