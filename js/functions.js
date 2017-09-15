var random_number = "";
var random_number;
var digit = [];
var won = 0;
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
          playerNumber = $('#playerNumber').val();
          validation = validateplayerNumber(playerNumber);
          if (validation == 1) {
            picasFijas(playerNumber, randomNumber);
            if (won == 0 || won == 1) {
               addPlay(e);
            }
          } 
          else {
            return;
          }
       }
});

function clean() {
  $('#playerNumber').val('');
  $('#playerNumber').focus();
}

function picasFijas (playerNumber, randomNumber){
  fijas = 0;
  picas = 0;

  for (var i = 0; i < playerNumber.length; i++) {
    for (var j = 0; j < playerNumber.length; j++) {
      if (playerNumber[i] === randomNumber[j] && i == j) {
        fijas++;
      }
      else if (playerNumber[i] === randomNumber[j]) {
        picas++;
      }
    }
  }
  if (fijas == 4) {
    wonPlay();
    won = 1;
  //  deleteTable();
    //clean();
  }
}

function validateplayerNumber(playerNumber){
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < i; j++) {
      if ((playerNumber[i] == playerNumber[j]) || (playerNumber.length != 4)) {
         i = 4;
         j = 4;
         validate = 0;
         break;
      }else{
         validate = 1;
      } 
    }
  }
return validate;
}

//Elimina las filas de los resultados de los intentos en la tabla
function deleteTable(){
 var rowsTable = $('tbody tr').length;
 for(var r=rowsTable; r>=0; r--)
  {
   $("tbody tr:eq('"+ r +"')").remove(); 
  };
};

 
//javascript
js_won = null;

//jquery 
$(function() {            
        function jq_won() {
            $('.result.won').show();
         }
        js_won = jq_won;
 }) 
 
 //just js 
 function wonPlay() {  
       js_won(); //== call jquery function - just Reference is globally defined not function itself
}


$(document).ready(function(){
  $("input").keydown(function(){
    longInput = $('#playerNumber').val().length;
    if (longInput < 4 || longInput > 4 ) {
      $("input").css("color","red");
      $("#ok").css("color","red");
    } 
     else {
      $("input").css("color","black");
      $("#ok").css("color","black");
    } 
  });
});

$(document).ready(function(){
  $("input").keyup(function(){
    longInput = $('#playerNumber').val().length;
    if (longInput < 4 || longInput > 4 ) {
      $("input").css("color","red");
      $("#ok").css("color","red");
    } 
     else {
      $("input").css("color","black");
      $("#ok").css("color","black");
    } 
  });
});