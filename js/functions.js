var random_number = "";
var random_number;
var digit = [];

//Genera el random
randomNumber = random();

function random(){
// Hecho por KarlanKas en el 2004
//No me quites el crédito
  for(i = 0; i < 4; i++){
    digit[i] = parseInt(Math.random()*10);
    for(j = 0; j < i; j++){
      if(digit[i] == digit[j]){
        i -= 1;
        break;
      }
     }
  }

  for(i = 0; i < 4; i++){
   random_number += digit[i];
  }

  return random_number;

} 

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
         `<td>${data.picas}</td>` +   
         `<td>${data.fijas}</td>` +      
       `</tr>`  
      ); 
}

 $("#playerNumber").keypress(function(e) {
       if(e.which == 13) {
          var playerNumber = $('#playerNumber').val();
          picasFijas(playerNumber, randomNumber);
          random_number = "";
       }
});

function clean() {
  $('#playerNumber').val('');
  $('#playerNumber').focus();
}

function picasFijas (playerNumber, randomNumber){
  fijas = 0;
  picas = 0;
  //alert("Parámetros recibidos " + " Numero usuario " + playerNumber + " Numero Random " + randomNumber);
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (playerNumber[i] === randomNumber[j] && i == j) {
        fijas++;
      }
      else if (playerNumber[i] === randomNumber[j]) {
        picas++;
      }
    }
  }
  if (fijas == 4) {
    alert("!!Fuckyou, Babyyyyy, Won.......")
  }

}
