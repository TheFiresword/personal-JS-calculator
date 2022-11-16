
var expression="";

function recupValeur(that)
{
  expression+=that.textContent;
  document.getElementById("ecran").innerHTML=expression;
}
function calculValeur()
{
 let valeur=eval(expression);
 expression=valeur; 
 document.getElementById("ecran").innerHTML=valeur; 

}
function reset(){
expression="";
document.getElementById("ecran").innerHTML=expression;
}

