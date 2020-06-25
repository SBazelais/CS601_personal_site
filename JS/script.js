// FORM VALIDATION

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    let regex = /\D/i;

        if((!regex.test(firstName.value) && (!regex.test(lastName.value)))) {
            alert("First or last name entered incorectly");
        } 

});

