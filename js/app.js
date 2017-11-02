// el nombre dela funsion debe ser el mismo a del evento//

  // tomando el tecxto de mi recuadro//
   function add(){
   var comments = document.getElementById('comment').value;
   document.getElementById('comment').value = ""; // con esto se limpia el cuadro de texto para volver a escribir//
   var NewComments= document.createElement('div');// aca se almacena los textos//
   var cont= document.getElementById('cont');

   var check= document.createElement('input'); //creando el check
   check.type='checkbox';

   var paragraph= document.createElement('p'); // creando el parrafo interior del recuadro
   paragraph.classList.add('color');
   var nodoText=document.createTextNode(comments); //aca se le agraga el texto que se introduce de manera manual en nuestro cuadrito//
   paragraph.appendChild(nodoText);  //en esta parte se agraga al padre, y se le agraga el hijo

   var heart=document.createElement('i'); // creando el corazoncito de la cajita//
   heart.classList.add('fa','fa-heart','heart'); //dandole clase al corazon.//

   var trash=document.createElement('i'); // crando el icono de basurita//
   trash.classList.add ('fa','fa-trash','trash');

   NewComments.appendChild(check);//agrgamos al cuadro, el check, el corazon el basurita y el parrafo a su padre//
   NewComments.appendChild(heart);
   NewComments.appendChild(trash);
   NewComments.appendChild(paragraph);
   cont.appendChild(NewComments);

   check.addEventListener('click',function(){ // creando funcion para escuchador (ecuche el click en check)
     paragraph.classList.toggle('strike-out');
   })
   trash.addEventListener('click',function(){
     cont.removeChild(NewComments);
   })
   heart.addEventListener('click',function(){
     heart.classList.toggle('red');
   })
 }
