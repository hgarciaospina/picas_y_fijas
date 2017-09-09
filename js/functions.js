var random_number = "";

function random(){
  // Hecho por KarlanKas en el 2004
  //No me quites el crédito
  var digit = [];
  for(i = 0; i < 4; i++){
    digit[i] = parseInt(Math.random()*10);
      alert('i quedo valiendo: ' +  i + ' y este es el digito ' + digit[i]);
    for(j = 0; j < i; j++){
      if(digit[i] == digit[j]){
        alert(' se repite el digito '  + digit[i] + ' de posición ' + i);
        i -= 1;
        break;
      }
     }
  }

  for(i = 0; i < 4; i++){
     random_number += digit[i];
   }
   alert('Número generado: ' + ' - ' + random_number);
   random_number = [];
}

picas = 1;
fijas = 2; 
function addPlay(e) { 
    e.preventDefault();
    const row = createRow({    
          playerNumber: $('#playerNumber').val(),
          fijas: fijas,    
          picas: picas  });  
    $('table tbody').append(row);  
    clean(); 
  } 

  function createRow(data) {  return (    
       `<tr>` + 
         `<td>${$('tbody tr').length + 1}</td>` +      
         `<td>${data.playerNumber}</td>` +      
         `<td>${data.fijas}</td>` +      
         `<td>${data.picas}</td>` +  
       `</tr>`  
      ); 
}























 $("#playerNumber").keypress(function(e) {
       var datos = $('#playerNumber').val();
       if(e.which == 13) {
           alert("Has oprimido tecla <Enter>: " +  datos);
          
       }
});


var aleatorio = Math.floor(Math.random() * (10+ 1)) + 0;

function clean() {
  $('#playerNumber').val('');
  $('#playerNumber').focus();
}