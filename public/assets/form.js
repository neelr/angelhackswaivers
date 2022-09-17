var submit = document.querySelector('.js-submit');

// Create Signature Canvas
var signatureCanvases = document.querySelectorAll('.js-sig-canvas');
let statusArray = [];

for(let i = 0; i < signatureCanvases.length; i++) {
  const signatureCanvas = signatureCanvases[i];

  let signaturePad = new SignaturePad(signatureCanvas, {
    minWidth: 1,
    maxWidth: 1,
    onBegin: function() {
      document.querySelector('.js-sig-reset[for=' + signatureCanvas.getAttribute("for")  + ']').classList.remove('hidden');
      if(!statusArray[i]) {
        statusArray.push(false)
      } else {
        statusArray[i] = false;
      }
      

      if(statusArray.every((val) => val == false ) && statusArray.length == signatureCanvases.length) {

        submit.disabled = false;
      }
    },
    onEnd: function() {
      document.querySelector('.js-sig').value = signaturePad.toDataURL();
    }
  });

  // Reset Signature button
  document.querySelector('.js-sig-reset[for=' + signatureCanvas.getAttribute("for") + ']').addEventListener('click', function(event) {
    event.preventDefault();
    signaturePad.clear();
    this.classList.add('hidden');
    statusArray[i] = true;

    console.log(statusArray)

    if(statusArray.some((el) => { return el == true })) {
      submit.disabled = true;
    }
  })

}
