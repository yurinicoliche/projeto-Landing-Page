const user = document.getElementById('user')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

user.addEventListener("change", ()=>{
    const validation = /[a-zA-Z]{3,}/g
    if (user.value.match(validation)){
        user.classList.remove('invalidUser')
        userError.classList.remove('userError')
    } else {
        user.classList.add('invalidUser')
        const userError = document.getElementById('userError')
        userError.classList.add('userError')
    }
})
password.addEventListener("change", ()=>{
    const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi
    if (password.value.match(passwordValidation)){
        password.classList.remove('invalidPassword')
        passwordError.classList.remove('passwordError')
    } else {
        password.classList.add('invalidPassword')
        const passwordError = document.getElementById('passwordError')
        passwordError.classList.add('passwordError')
    }
})
confirmPassword.addEventListener("change", ()=>{
    if (confirmPassword.value !== password.value){
        confirmPassword.classList.add ('invalidConfirmPassword')
        document.getElementById('confirmError')
        confirmError.classList.add('confirmError')
    } else {
        confirmPassword.classList.remove('invalidConfirmPassword')
        confirmError.classList.remove('confirmError')
    }
})


const form = document.getElementById('form').addEventListener('submit', (ev)=>{
    ev.preventDefault()
})

const submit = document.getElementById('submit').addEventListener('click', ()=>{
    const errorDiv = document.getElementById('error')
    if(user.classList.contains('invalidUser') || password.classList.contains('invalidPassword') || confirmPassword.classList.contains('invalidConfirmPassword')){
        let errorP = document.createElement('p')
        errorP.textContent = "Fields must be completed correctly!"
        errorP.style.color = "red"
        errorP.classList.add('errorP')
        if(errorDiv.children.length == 0){
            errorDiv.appendChild(errorP)
        }
    } else if (user.value !== "" || password.value !== "" || confirmPassword.value !== "") {
        const submit = document.getElementById('submit')
        submit.classList.add('loading')
        submit.value = "signing"
        let newAccount = {
            user: user.value,
            password: password.value
        }
        account.push(newAccount)
        window.sessionStorage.setItem(user.value, password.value)
        console.log(window.sessionStorage.getItem(user.value));
        console.log(account);
        setTimeout(()=>{
            submit.style.background = "rgb(0, 255, 136)"
            user.value = ""
            password.value = ""
            confirmPassword.value = ""
            submit.value = "signup"
            window.location = "/index.html"
        },1000)
    }
})
//event click no botão logar e no user passa o valor que o usuario usar como parametro
let account = []