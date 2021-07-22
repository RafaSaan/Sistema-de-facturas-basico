// // variables entrada de datos
// const d = document;
// const $inputNombre = d.getElementById("nombre");
// const $inputRfc = d.getElementById("rfc");
// const $inputDirec = d.getElementById("direc");
// const $inputContac = d.getElementById("contac");
// const $btn = d.getElementById("btn");
// // variables de salida de datos
// const $liNombre = d.getElementById("li-nombre");
// const $liRfc = d.getElementById("li-rfc");
// const $liDirec = d.getElementById("li-direc");
// const $liContac = d.getElementById("li-contac");
// const $liFecha = d.getElementById("li-fecha");
// const $liTotal = d.getElementById("li-total");

// // funcion que agrega los valores de los input al la factura

// const addd = () => {
//   $btn.addEventListener("click", e => {
//     e.preventDefault();
//     // variables de valores
//     let nombreVal = $inputNombre.value;
//     let rfcVal = $inputRfc.value;
//     let direcVal = $inputDirec.value;
//     let contacVal = $inputContac.value;
//     let fecha = new Date();
//     let hoy = fecha.toLocaleDateString();
//     // introducir a la factura
//     $liNombre.innerHTML += `<p>${nombreVal}</p>`;
//     $liRfc.innerHTML += `<p>${rfcVal}</p>`;
//     $liDirec.innerHTML += `<p>${direcVal}</p>`;
//     $liContac.innerHTML += `<p>${contacVal}</p>`;
//     $liFecha.innerHTML += `<p>${hoy}</p>`;
//     $liTotal.innerHTML += `<p>${random(2000, 4000)}</p>`;

//     if (nombreVal || rfcVal || direcVal || contacVal === "") {
//       alert("ingresa tus datos completos porfavor");
//       $liNombre.innerHTML += `<p></p>`;
//       $liRfc.innerHTML += `<p></p>`;
//       $liDirec.innerHTML += `<p></p>`;
//       $liContac.innerHTML += `<p></p>`;
//       $liFecha.innerHTML += `<p></p>`;
//       $liTotal.innerHTML += `<p></p>`;
//     }
//     $inputNombre.value = "";
//     $inputRfc.value = "";
//     $inputDirec.value = "";
//     $inputContac.value = "";
//   });
// };
//

const d = document;
$inputName = d.getElementById("name");
$inputRfc = d.getElementById("rfc");
$inputDirec = d.getElementById("direc");
$inputContact = d.getElementById("contact");
$btn = d.getElementById("btn-send");
// variables de salida de datos
const pName = d.querySelector(".li__name");
pRfc = d.querySelector(".li__rfc");
pDirec = d.querySelector(".li__direc");
pContact = d.querySelector(".li__contact");
pDate = d.querySelector(".li__date");
pTotal = d.querySelector(".li__total");

const add = e => {
  e.preventDefault();
  $btn.disabled = true;
  const date = new Date().toLocaleDateString();
  const nameValue = $inputName.value;
  const rfcValue = $inputRfc.value;
  const direcValue = $inputDirec.value;
  const contactValue = $inputContact.value;
  /**************   pintar valores en la factura    **********************/
  pName.textContent = nameValue;
  pRfc.textContent = rfcValue;
  pDirec.textContent = direcValue;
  pContact.textContent = contactValue;
  pDate.textContent = date;
  pTotal.textContent = `${random(3000, 6500)}$`;
  /**************   Reinicar inputs   ************/
  $inputName.value = "";
  $inputRfc.value = "";
  $inputDirec.value = "";
  $inputContact.value = "";

  if (
    nameValue === "" ||
    rfcValue === "" ||
    direcValue === "" ||
    contactValue === ""
  ) {
    alert("Ingresa todo los datos solicitados");
    pName.textContent = "";
    pRfc.textContent = "";
    pDirec.textContent = "";
    pContact.textContent = "";
    pDate.textContent = "";
    pTotal.textContent = "";
    $btn.disabled = false;
  }
};

$btn.addEventListener("click", add);

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
