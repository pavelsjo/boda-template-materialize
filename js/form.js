let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    let data = new FormData(form);
    console.log(data)
    fetch('https://script.google.com/macros/s/AKfycbzhnkwvExa6xoIDSSD-rQZKweGu-AT2VvIf0J8tKLro4V3_e0760f6ZrInLvqVjBqgN/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => {
        console.log(data)});
        form.reset();
        M.toast({ html: '<h2>Gracias por confirmanos tu asistencia.</h2>.'});
});