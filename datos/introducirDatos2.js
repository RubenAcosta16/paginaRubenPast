
let contenedor=document.querySelector(".contenedor");
let insertarBtn=document.querySelector(".insertarBtn");
let id=1;

function eliminar(clase){
        console.log(clase)
    document.querySelector("."+clase).remove();//esto borra la fila

}

function agregar(){


    
    let div=document.createElement("div");
    console.log(`lista ${id} creada`);
    div.classList.add("div"+id++,"div");
    div.innerHTML=`
        <input type="text" placeholder="Palabra" class="palabra${id} input" >
        <input type="text" placeholder="Significado" class="significado${id} input" >
    `;
   

    let eliminarBtn=document.createElement("button");
        // eliminarBtn.classList.add("")
    eliminarBtn.innerHTML="eliminar";

    
    eliminarBtn.addEventListener("click",()=>{


        let clase=div.getAttribute("class");//obtiene la clase
        let clasePartida=clase.split(" ");

        
        eliminar(clasePartida[0]);
    });

    div.appendChild(eliminarBtn);
    contenedor.appendChild(div);

    // console.log(contenedor.getElementsByTagName('div').length);
}







insertarBtn.addEventListener("click",agregar);

