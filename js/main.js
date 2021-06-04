// variables entrada de datos
const d = document;
const $inputNombre = d.getElementById("nombre");
const $inputRfc = d.getElementById("rfc");
const $inputDirec = d.getElementById("direc");
const $inputContac = d.getElementById("contac");
const $btn = d.getElementById("btn");
// variables de salida de datos
const $liNombre = d.getElementById("li-nombre");
const $liRfc = d.getElementById("li-rfc");
const $liDirec = d.getElementById("li-direc");
const $liContac = d.getElementById("li-contac");
const $liFecha = d.getElementById("li-fecha");
const $liTotal = d.getElementById("li-total");

// funcion que agrega los valores de los input al la factura

const add = ()=>{
    // variables de la funcion
    
    $btn.addEventListener("click",e=>{
        // hacer que cancele el evento
        e.preventDefault();
        // variables de valores
        let nombreVal = $inputNombre.value
        let rfcVal= $inputRfc.value;
        let direcVal= $inputDirec.value;
        let contacVal= $inputContac.value;
        let fecha = new Date();
        let hoy = fecha.toLocaleDateString();
        // introducir a la factura
        $liNombre.innerHTML += `<p>${nombreVal}</p>`
        $liRfc.innerHTML += `<p>${rfcVal}</p>`
        $liDirec.innerHTML += `<p>${direcVal}</p>`
        $liContac.innerHTML += `<p>${contacVal}</p>`
        $liFecha.innerHTML += `<p>${hoy}</p>`
        $liTotal.innerHTML += `<p>${random(2000,4000)}</p>`
    })
}
add();

const random = (min,max)=>{
    return Math.floor((Math.random() * (max-min+1)) +min)
}