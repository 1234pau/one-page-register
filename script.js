const userName = document.querySelector('.userName')
const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')
const form = document.getElementsByTagName('form')
const button = document.querySelector('.button')
const inputs = document.querySelectorAll('input')
const welcomeMesage = document.querySelector('.welcomeMesage')

inputs.forEach(item => {
    item.addEventListener('input', () => {
        if (item.value) {
            button.classList.remove('disabledClass')
        }
    })
})

const passwordDiv = document.querySelector('.passwordDiv')
const para = document.querySelector('.para')
const registerButton = document.querySelector('.registerButton')


registerButton.addEventListener('click', function(e) {
    e.preventDefault()
    if (registerButton.textContent = 'Log In') {

        while (passwordDiv.hasChildNodes()) {
            passwordDiv.removeChild(passwordDiv.firstChild);
        }

        registerButton.textContent = 'Register'
        para.textContent = `You don't have an acount ?`
        button.textContent = 'Log In'
    } else {
        const newLabel = document.createElement('label')
        newLabel.textContent = "Email"

        const newInput = document.createElement('input')
        newInput.type = 'email'
        newInput.name = 'email'
        newInput.id = "userEmail"

        passwordDiv.appendChild(newLabel)
        passwordDiv.appendChild(newInput)

        registerButton.textContent = 'Log In'
        para.textContent = 'You have an acount?'
        button.textContent = 'Log In'
    }
})
const formContainer = document.querySelector('.formContainer')
button.addEventListener('click', function(e) {
    e.preventDefault()
    while (formContainer.hasChildNodes()) {
        formContainer.removeChild(formContainer.firstChild);
    }
    const textMess = document.createElement('h1')
    textMess.classList.add('welcomeMesage')
    textMess.textContent = `Welcome ${userName.value}`
    formContainer.appendChild(textMess)
})