const QRBOX = document.querySelector(".div-qr")
const inputQR = document.querySelector(".inputQR")
const btn = document.querySelector(".btn")

const qr = new QRCode(QRBOX)

inputQR.addEventListener("click", (e)=>{
    e.preventDefault();
    qr.makeCode(inputQR.value);
});