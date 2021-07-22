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
