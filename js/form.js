const form = document.querySelector("form");
const formSection = document.getElementById('form-asistencia');
const positiveResponseSection = document.getElementById('form-asistencia-positiva');
const negativeResponseSection = document.getElementById('form-asistencia-negativa');
const buttonAgregar = document.getElementById('boton-agregar');
const buttonCerrar = document.getElementById('boton-cerrar');


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
    const data = new FormData(form);
    const respuesta = data.get('assist');

    fetch('https://script.google.com/macros/s/AKfycbzhnkwvExa6xoIDSSD-rQZKweGu-AT2VvIf0J8tKLro4V3_e0760f6ZrInLvqVjBqgN/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => {
        if (data === "Success") {

            form.reset();
            formSection.style.display = 'none';
        
            if(respuesta === "Sí") {
                 positiveResponseSection.style.display = 'block';
                } if(respuesta=== "No") {
                    negativeResponseSection.style.display = 'block';
                }
            }
    });

})