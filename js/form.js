const form = document.querySelector("form");
const formSection = document.getElementById('form-asistencia');
const positiveResponseSection = document.getElementById('form-asistencia-positiva');
const negativeResponseSection = document.getElementById('form-asistencia-negativa');
const buttonEnviar = document.getElementById('boton-enviar');
const buttonAgregar = document.getElementById('boton-agregar');
const buttonCerrar = document.getElementById('boton-cerrar');
const loader = document.getElementById('loader');

buttonAgregar.addEventListener('click', (e) => {
    formSection.style.display = 'block';
    positiveResponseSection.style.display = 'none';
});

buttonCerrar.addEventListener('click', (e) => {

    formSection.style.display = 'block';
    negativeResponseSection.style.display = 'none';

});

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    buttonEnviar.classList.toggle('disabled');
    loader.style.display = 'block';

    const data = new FormData(form);
    const respuesta = data.get('assist');

    fetch('https://script.google.com/macros/s/AKfycbxF1M95BCkIuiewi3jG-3I9570BZmN7JsmhytsSYpLNSR1ikyMs_BZKtxumifHygIwz/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => {
        if (data === "Success") {

            form.reset();
            buttonEnviar.classList.toggle('disabled');
            formSection.style.display = 'none';
            loader.style.display = 'none';
        
            if(respuesta === "Sí") {
                 positiveResponseSection.style.display = 'block';
                } if(respuesta=== "No") {
                    negativeResponseSection.style.display = 'block';
                }
            }
    });

})