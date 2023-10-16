let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    let data = new FormData(form);
    console.log(data)
    fetch('https://script.google.com/macros/s/AKfycbz1fQ1U_lW6_-yTNbeeYg9QpEXyuIJhvSY3IJlXaNV5WFSxQUN0Vv_1Xy_8CocYy6mT/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => {
        console.log(data)});
        form.reset();
        M.toast({ html: '<h1>Gracias por confirmanos tu asistenciad.</h1>.'});
});