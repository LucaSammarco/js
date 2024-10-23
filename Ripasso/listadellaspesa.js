// Consegna: Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


let listaSpesa = ["pane", "latte", "uova", "frutta", "verdura", "pasta", "riso", "acqua", "formaggio", "carne", "pesce", "biscotti", "zucchero", "sale", "caffè", "olio", "burro", "succhi", "patate", "cipolle"];

let spesa = document.getElementById("spesa")

let ol = document.createElement("ol")


spesa.append(ol)

let i = 0;



while (i < listaSpesa.length ) {
    let li = document.createElement("li")
    li.setAttribute("class", "text-center");
    li.textContent = listaSpesa[i]
    ol.appendChild(li)
    i++
}