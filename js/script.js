//Assegnazione Variabili
const nKm = parseInt(prompt('Inserire chilometri da percorrere?'));
const userAge = parseInt(prompt('Inserire età'));
let validInput = true;

if(userAge > 110 || userAge < 1 || nKm > 3000 || nKm < 1){
  alert ('Inserisci valori congrui');
  validInput = false;
}


const discount_1 = 0.2 ;
const discount_2 = 0.4 ;
const priceKm = 0.21;
let priceTicket = nKm * priceKm;


if(validInput){
if(userAge <= 18){
  priceTicket = priceTicket - priceTicket * discount_1;
}else if (userAge >= 65){
  priceTicket = priceTicket - priceTicket * discount_2;
}
}
let fixedPrice = priceTicket.toFixed(2);

console.log('input non valido' + validInput);

if(validInput === true){
document.getElementById('ticket').innerHTML =  `Il costo del biglietto sarà ${fixedPrice} €`;
}
if(validInput === false){
  document.getElementById('error').innerHTML = `Ricaricare la pagina ed inserire nuovamente i dati, la informiamo che la distanza massima percorribile da questa stazione è di 3000km`;
}