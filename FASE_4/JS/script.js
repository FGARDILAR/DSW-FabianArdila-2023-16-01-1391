function procesarRespuestas() {
  let total = 5
  let puntos = 0;
  let myForm = document.forms["formulario"];
  let respuestascorrectas = ["a","b","c","b","a"];

  for (let i=1; i <= total; i++) {
    if (myForm["r" + i].value === null || myForm["r" + i].value ==='' ){
          alert('Favor responder todas las preguntas');
          return false;
        } else {
            if (myForm["r"+ i].value === respuestascorrectas[i-1])
            puntos++;
        }

  }
  let resultado = document.getElementById('resultado')
  resultado.innerHTML='Obtuviste ' + puntos +' puntos de ' + total + ' posibles';
}



function LimpiarFormulario(){
  resultado.innerHTML= 'Responda las Siguientes Preguntas'

    // Seleccionar todos los elementos de tipo radio y establecer su propiedad checked en false
    var radios = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
      radios[i].parentNode.style.color = "black"; // agregamos esta línea para cambiar el color de los textos a negro
    }
  
}

function procesarRespuestasColor() {
  let total = 5
  let puntos = 0;
  let myForm = document.forms["formulario"];
  let respuestascorrectas = ["a","b","c","b","a"];
  let respuestasUsuario = [];
  let respuestasDiv = document.querySelectorAll('#Pre1, #Pre2, #Pre3, #Pre4, #Pre5');

  for (let i=1; i <= total; i++) {
    if (myForm["r" + i].value === null || myForm["r" + i].value ==='' ){
      alert('Favor responder todas las preguntas');
      return false;
    } else {
      respuestasUsuario.push(myForm["r"+ i].value);
      if (myForm["r"+ i].value === respuestascorrectas[i-1]) {
        puntos++;
        respuestasDiv[i-1].style.color = "green";
      } else {
        respuestasDiv[i-1].style.color = "red";
      }
    }
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Obtuviste ' + puntos +' puntos de ' + total + ' posibles';

}

