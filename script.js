
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
  }
  
  function calcular() {
    try {
      let resultado = eval(document.getElementById("pantalla").value);
      document.getElementById("pantalla").value = resultado;
    } catch (e) {
      document.getElementById("pantalla").value = "Error";
    }
  }
  
  function borrar() {
    document.getElementById("pantalla").value = "";
  }
  