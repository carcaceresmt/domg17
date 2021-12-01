const texto=document.getElementById("texto")
texto.innerHTML="Mañana comienza diciembre señores g17"
//texto.style.display="block"
texto.style.background="red"
console.log(texto.innerHTML)
console.log("*******tagName****************")
const p=document.getElementsByTagName("p")
const h1=document.getElementsByTagName("h1")
const input=document.getElementsByTagName("input")
//console.log(p)
let i;
console.log(p.length)
console.log(h1.length)
console.log(input.length)
for(i=0;i<p.length;i++){
    console.log(p[i].innerHTML)
}

for(i=0;i<input.length;i++){
    input[i].style.display="none"
}