//Assegnazione Variabili
const nKm = parseInt(prompt('Inserire chilometri da percorrere?'));
const userAge = parseInt(prompt('Inserire età'));
const discount_1 = 0.2 ;
const discount_2 = 0.4 ;
const priceKm = 0.21;
let priceTicket = nKm * priceKm;
let fixedPrice = priceTicket.toFixed(2);
if(userAge <= 18){
  fixedPrice = priceTicket - priceTicket * discount_1;
}else if (userAge >= 65){
  fixedPrice = priceTicket -priceTicket * discount_2;
}

console.log("prezzo biglietto con n decimali " + priceTicket )
console.log("prezzo biglietto con 2 decimali " + fixedPrice )
console.log( "chilometri da percorrere " + nKm );
console.log("età utente " + userAge);