const form = document.getElementById('form').addEventListener('submit', (ev)=>{
    ev.preventDefault()
})

const user = document.getElementById('user')
const password = document.getElementById('password')

const submit = document.getElementById('submit').addEventListener('click', ()=>{
    if(window.sessionStorage.getItem(user.value) === password.value){
        document.getElementById('loginError').classList.remove("loginError")
        window.location = "/logged/logged.html"
    } else {
        document.getElementById('loginError').classList.add("loginError")
        setTimeout(()=>{document.getElementById('loginError').classList.remove("loginError")}, 3000)
    }
})