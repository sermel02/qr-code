const wrapper = document.querySelector(".wrapper");
const generateBtn = document.getElementById("generate");
const generateInput = document.getElementById("input");
const qrImg = document.getElementById("qr-img");

console.log(qrImg);

if (generateBtn) {
  generateBtn.addEventListener("click", () => {
    let qrValue = generateInput.value;
    if (!qrValue) return;
    generateBtn.innerText = 'Generating QR Code...'
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
      wrapper.classList.add("active");
      generateBtn.innerText = 'Generate QR Code'
    });
  });
}


generateInput.addEventListener('keyup', () => {
  if (!generateInput.value) {
    wrapper.classList.remove("active");
  }
})