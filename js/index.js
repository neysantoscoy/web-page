"use strict";

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    const message = document.getElementById('message');

    const params = {
        name: name.value,
        email: email.value,
        city: city.value,
        phone: phone.value,
        city: city.value,
        message: message.value,
    }
   saveData(params);
}) 

function saveData(params) {
    firebase.database().ref('contact').push(params)
     .then(function(){
         console.log('Mensaje Enviado Correctamente');
     })
     .catch(function(){
         console.log('Mensaje NO ENVIADO');
     });
}