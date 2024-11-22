var ajouter_contact= document.getElementById('1');
var updates = document.getElementById('2');
var flouter= document.getElementById('3');
var opens = document.querySelector('.aside');
var body= document.getElementById('body');
var main = document.getElementById('main');
var details = document.getElementById('detail');
var nom= document.getElementById("nom").value;
var prenom= document.getElementById('prenom').value;
var numero= document.getElementById('numero').value;
var email= document.getElementById('email').value;
var addresse= document.getElementById('addresse').value;
var bouton =  document.querySelector('btn').value;
var display=0;


console.log(updates);
console.log(ajouter_contact);
console.log(flouter);
console.log(body);
console.log(main);
console.log(details);
// pour la fenetre update
function update() {
    if(display==1){
        flouter.style.display='block';
        flouter.style.opacity='0.7';
        updates.style.display='block';
         display=0; // rend l' objet visible
        
     }
     else{
        flouter.style.display='none';
        updates.style.display='none';
        display=1;// rend l'objet invisible
       
        
     }
}
// pour afficher la fenetre d'ajout de contact
function ajoutContact() {
    if(display==1){
        flouter.style.display='block';
        flouter.style.opacity='0.7';
        ajouter_contact.style.display='block';
         display=0; // rend l'objet visible
     }
     else{
        flouter.style.display='none';
        ajouter_contact.style.display='none';
        display=1;// rend l'obet invisible
     }
}
// pour fermer les formulaire
function fermer(){
    flouter.style.display='none'; 
    ajouter_contact.style.display='none';
    updates.style.display='none';
    details.style.display='none';
}
// pour ouvrir ou fermer la sidebar
function ouvrir(){
    if(display==1){
        opens.style.display='block';
         display=0; // rend l'objet visible
     }
     else{
        opens.style.display='none';
        display=1;// rend l'obet invisible
                                     
     }
}
// pour afficher plus de details
function detail_ouvrir(){
    if(display==1){
        details.style.display='block';
         display=0; // rend l'objet visible
     }
     else{
        details.style.display='none';
        display=1;// rend l'obet invisible
        details.in                            
     }
}
// pour ajouter des donnes
 function ADD(){
 var table = document.getElementsByTagName('table')[0];
 var newrow = table.insertRow(1);
 var cell = newrow.insertCell(0).innerHTML='bonjour';
 var cel2 = newrow.insertCell(1).innerHTML=numero;
 var cel3 = newrow.insertCell(2).innerHTML=btn;
  
 }