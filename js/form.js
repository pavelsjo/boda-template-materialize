const form = document.querySelector("form");
const formSection = document.getElementById('form-asistencia');
const positiveResponseSection = document.getElementById('form-asistencia-positiva');
const negativeResponseSection = document.getElementById('form-asistencia-negativa');
const buttonEnviar = document.getElementById('boton-enviar');
const buttonCerrarFormaPositiva = document.getElementById('boton-cerrar-forma-positiva');
const buttonCerrar = document.getElementById('boton-cerrar');
const loader = document.getElementById('loader');

buttonEnviar.addEventListener('click', (e) => {
    buttonEnviar.classList.toggle('disabled');
    loader.style.display = 'block';
});

buttonCerrarFormaPositiva.addEventListener('click', (e) => {

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

    fetch('https://script.google.com/macros/s/AKfycbzju1AjGjYNm0phwGSmuvttWnJ3Q0oJCNGzx2obSz1-J7KXHE8SS-skY9ArhJWb7-2B/exec', {
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