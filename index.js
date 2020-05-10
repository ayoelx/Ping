let userEmail = document.getElementById('userEmail');
let button = document.getElementById('btn');
let prompt = undefined;

if (window.innerWidth < 550) {
    prompt = document.getElementById('invalid-prompt');
}

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail(email) {
    if (reg.test(email)) {
        return true
    }
    return false
}   

function result() {
    if (validateEmail(userEmail.value)) {
        if (userEmail.classList.contains('invalid')) {
            userEmail.classList.remove('invalid');
            prompt.innerText = '';
            console.log('Invalid class removed');
        }
        //pass
    } else if (!userEmail.classList.contains('invalid')){
        userEmail.classList.add('invalid');
        prompt.innerText = 'Please provide a valid email address';
        console.log('Invalid class added!')
    }
}

userEmail.addEventListener("focusout", result)
button.addEventListener("click", result)
