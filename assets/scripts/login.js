const showHide = document.querySelector('.container-login__input--view-password')
const imgShowHide = document.querySelector('.hide')
const LOGIN_URL = "https://test-final.b8one.academy/login"
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const alertMessage = document.querySelector('.alert')
const load = document.querySelector('#loading')

imgShowHide.addEventListener('click', showAndHidePassword)

function showAndHidePassword(){
    if(showHide.type === 'password'){
        showHide.type = 'text'
        imgShowHide.src = './assets/images/icons/eye.png'
        imgShowHide.classList.add('show')
    } else {
        showHide.type = 'password'
        imgShowHide.src = './assets/images/icons/eye-off.png'      
        imgShowHide.classList.remove('show')  
    }
}

const loginButton = document.querySelector('.modal-content__button')

loginButton.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${LOGIN_URL}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:email.value,
            password:password.value
        }),
    })
    .then((result) => {
        return result.json()
    })
    .then((data) =>{

        const timeOut = () => {
            window.setTimeout(() => {
                window.location.href = 'dashboard.html'
            }, 5000)
        }

        if(data === true){
            alertMessage.innerHTML = ''
            loginButton.style.display = 'none'
            load.classList.add('loader')
            timeOut()
        } else if (email.value === '' || password.value === ''){
            alertMessage.innerHTML = ''
            alertMessage.innerHTML = 'Preencha os campos em branco'
        }
        else {
            alertMessage.innerHTML = ''
            alertMessage.innerHTML = 'Este email ou senha são inválidos' 
        }
    })
    .catch((error) => {
        console.log(`Erro na requisição: ${error}`);
    })
})
