const validarUsername = (username) => username.includes('-') && username!=username.toLowerCase();
const validarPassword = (password) => password.includes('#') && password!=password.toLowerCase();
const validarEmail = (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email));

const formularioHTML= document.getElementById('formulario')
const errorEmailHTML= document.getElementById('errorEmail')
const errorPasswordHTML= document.getElementById('errorPassword')
const errorUsernameHTML= document.getElementById('errorUsername')

formularioHTML.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    const formulario = evento.target
    const email = formulario.email.value
    const password = formulario.password.value
    const username = formulario.username.value
    if(!validarEmail(email)){
        errorEmailHTML.innerText= 'error de email'
    }else{
        errorEmailHTML.innerText= ''
    }
    if(!validarPassword(password)){
        errorPasswordHTML.innerText= 'error de password'
    }else{
        errorPasswordHTML.innerText= ''
    }
    if(!validarUsername(username)){
        errorUsernameHTML.innerText= 'error de username'
    }else{
        errorUsernameHTML.innerText= ''
    }
    if(validarEmail(email)&&validarPassword(password)&&validarUsername(username)){
        console.log('exitoo!!')
    }
})

// username tiene que tener una mayuscula, y un '-' y almenos 4 caracteres
// password tiene que tener una mayuscula y un '#'
// email Debe ser email (usar la expresion regular)
// Si el error el multiple EJEMPLO, el username y el password esta mal, tirara 2 textos, es decir cada input tendra su posibilidad de fallar
// Si esta todo bien por consola diran 'exito'






