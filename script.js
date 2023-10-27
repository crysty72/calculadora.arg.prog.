
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value=''
}
function calcular(){

    const valorpantalla = document.getElementById('pantalla').value
    const resultado =eval(valorpantalla)
    document.getElementById('pantalla').value= resultado
}