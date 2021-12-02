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
    return (email==="")?true:false
}

const validarPassword=(password)=>{
    return (password==="")?true:false
}
/**
 * llamado a la función ocultaralerta
 */

ocultaralerta()

blogin.addEventListener("click",(e)=>{
    e.preventDefault()
    let err1=validarEmail(usuario.value)?"block":"none"
    let err2=validarPassword(password.value)?"block":"none"
    msjerr[0].style.display=err1
    msjerr[1].style.display=err2
    
})

usuario.addEventListener("click",()=>{
    msjerr[0].style.display="none"
})
password.addEventListener("click",()=>{
    msjerr[1].style.display="none"
})