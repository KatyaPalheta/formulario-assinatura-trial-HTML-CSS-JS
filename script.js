const formulario__completo = document.getElementById('formulario__completo');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {e.preventDefault();checkInputs();});

function checkInputs() {
	// esse trecho estava no codigo de referencia é um teste mas não sei como pode ajudar no codigo
	const first_nameValue = first_name.value.trim();
    const last_nameValue = last_name.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    
if(first_nameValue === '') {
    setErrorFor(first_name, 'Frist name cannot be blank');
} else {
    setSuccessFor(first_name);
}
if(last_nameValue === '') {
    setErrorFor(last_name, 'Last name cannot be blank');
} else {
    setSuccessFor(last_name);
}
if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');

} else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');

} else {
    setSuccessFor(email);
}

if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
} else {
    setSuccessFor(password);
}

}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}

function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}