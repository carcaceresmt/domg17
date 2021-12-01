/**captura las clases msjerr */
const msjerr=document.getElementsByClassName("msjerr")
const usuario=document.getElementById("usuario")
const password=document.getElementById("password")
const blogin=document.getElementById("blogin")

/**
 * funcion ocultar alerta de campos vacios
 */

const ocultaralerta=()=>{
    let i=0
    for(i=0;i<msjerr.length;i++){     
         msjerr[i].style.display="none"
    } 
}


const validarEmail=(email)=>{
    if(email==""){
        return false
    }
    else{
        return true
    }
}

const validarPassword=(password)=>{
    if(password==""){
        return false
    }
    else{
        return true
    }
}

/**
 * llamado a la función ocultaralerta
 */

ocultaralerta()

blogin.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(usuario.value)
    console.log(password.value)
    console.log(validarEmail(usuario.value))
    console.log(validarPassword(password.value))
})

