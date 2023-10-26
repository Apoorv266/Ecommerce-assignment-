const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const address = document.getElementById('address')
const message = document.getElementById('message')
const notification = document.getElementById("notification")
let errorArray = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInputs()
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    errorArray.push(message)
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const numberValue = number.value.trim()
    const messageValue = message.value.trim()
    const addressValue = address.value.trim()

    if (nameValue === "") {
        setError(name, "username is required")
    } else {
        setSuccess(name)
    }


    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


    if (numberValue === '') {
        setError(number, 'Number is required');
    } else if (numberValue.length < 10) {
        setError(number, 'Number must be at 10 character.')
    } else {
        setSuccess(number);
    }


    if (addressValue === "") {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    if (messageValue === "") {
        setError(message, 'Message is required');
    } else {
        setSuccess(message);
    }

    if (errorArray.length === 0) {
        notification.style.display = 'block'
        setTimeout(() => {
            notification.style.display = 'none'
        }, 2000);
    }else{
        notification.style.display = 'none'
    }
}