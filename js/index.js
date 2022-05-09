alert('Benvenuto/a sul nostro sito web!')

var nome = prompt('Per cominciare, ti va di dirmi il tuo nome?')
var cognome = prompt('Qual è il tuo cognome?')
var eta = prompt('Quanti anni hai?')
var citta = prompt('Da dove vieni?')
var email = prompt('Ci siamo quasi! Ora inseirsci la tua mail per favore')

document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('eta').innerHTML = eta;
document.getElementById('citta').innerHTML = citta;
document.getElementById('email').innerHTML = email;

var datiUtente = nome + ' ' + cognome + 'anni' + eta + ' ' + citta + ' ' + email;

window.alert(datiUtente); //stampato nel pop up
document.write(datiUtente); //stampato sotto il form
console.log(datiUtente); //stampato nel console.log