var nombres = [];
function Persona() {
 var elementos = [];

  this.push = function(elemento){
    elementos.push(elemento);
  }
  this.isEmpty = function(){
    return elementos.length == 0;
  }

}
var nombre = new Persona();
var nombre = [];

  nombre.push("Valeria ");
  nombre.push("Leslie ");
  nombre.push("Ana ");
  nombre.push("Sue ");
  nombre.push("Angelica ");

var apellido = new Persona();
var apellido = [];

  apellido.push("de Leon");
  apellido.push("Perdomo");
  apellido.push("Salazar");
  apellido.push("Martinez");
  apellido.push("Velazquez");

for(var i = 0; i < nombre.length + 4; i++ ){
  nombres.push(nombre.pop()+apellido.pop());
}


  
