function procesarRespuestas() {
  let total = 5
  let puntos = 0;
  let myForm = document.forms["formulario"];
  let respuestascorrectas = ["a","a","c","b","c"];

  for (let i=1; i <= total; i++) {
    if (myForm["r" + i].value == null || 
        myForm["r" + i].value =='' ){
          alert('Favor responder todas las preguntas');
          return false;
        } else {
            if (myForm["r"+ i].value === respuestascorrectas[1-i])
            puntos++;
        }

  }
  let resultado = document.getElementById('resultado')
  resultado.innerHTML='Obtuviste ' +puntos+' puntos de ' + total + ' posibles';
}