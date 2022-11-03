let button=document.querySelector(".button");
button.addEventListener("click",ejecutar);

let contenedor=document.querySelector(".contenedor");

let contador=1;



// let eliminar=[];
// let loQueImprime=[];


function eliminarLista(clase,i){
    document.querySelector(clase).remove();//esto borra la fila
    console.log(i)
}


let insertar=document.querySelector(".insertar");
insertar.addEventListener("click",()=>{
    // let br=document.createElement("br");
    // contenedor.appendChild(br);|


    let contenedorInput=document.createElement("div");
    contenedorInput.classList.add("contenedor"+contador);
    contenedorInput.classList.add("contenedorInput");


    let inputPalabra=document.createElement("input");
    inputPalabra.placeholder="Palabra";
    inputPalabra.classList.add("palabra"+contador);
    inputPalabra.classList.add("input");

    
    let inputSignificado=document.createElement("input");
    inputSignificado.placeholder="Significado";
    inputSignificado.classList.add("significado"+contador);
    inputSignificado.classList.add("input");


    let inputEliminar=document.createElement("button");
    inputEliminar.innerHTML="Eliminar";
    inputEliminar.classList.add("inputEliminar"+contador);
    inputEliminar.classList.add("input");
    
    contenedorInput.appendChild(inputPalabra);
    contenedorInput.appendChild(inputSignificado);
    contenedorInput.appendChild(inputEliminar);

    contenedor.appendChild(contenedorInput);

    let eliminar=[];
    console.log(contador);


    for (let i = 0; i < contador; i++) {
        
        let eliminarIdentificador=".inputEliminar"+(i+1);
        

        eliminar[i]=document.querySelector(eliminarIdentificador);
        console.log("sasasaa"+(i+1));

        if(document.querySelector(eliminarIdentificador)){
            eliminar[i].addEventListener("click",()=>{
                // console.log("si"+(i+1));
                eliminarLista(".contenedor"+(i+1),i+1);
            });
        }
    

        
    }



    // let eliminarIdentificador=".inputEliminar"+contador;

    // eliminar[contador-1]=document.querySelector(eliminarIdentificador);
    // console.log("sasasaa"+contador);


    // eliminar[contador-1].addEventListener("click",()=>{
    //     loQueImprime[contador-1]="siss"+contador;
    //     console.log(loQueImprime[contador-1]);
    // });
    





    contador++;
});

console.log(contador)


function ejecutar(){
    let palabra=document.querySelector(".palabra").value;
    let significado=document.querySelector(".significado").value;

    console.log(palabra);
    console.log(contador);
    console.log(document.querySelector(".palabra"));

    let palabras=[];
    let pal=palabras.push(palabra);

    let significados=[];
    let sig=significados.push(significado);
    
    // console.clear();
    for (let i = 1; i < contador; i++) {

        let palabraIdentificador=".palabra"+i;
        let significadoIdentificador=".significado"+i;



        let palabra=document.querySelector(palabraIdentificador);
        let significado=document.querySelector(significadoIdentificador);

        
        // console.log(palabra.value);
        pal=palabras.push(palabra.value);

        // console.log(significado.value);
        sig=significados.push(significado.value);



    }
    console.log(palabras);
    console.log(significados);
    // console.log(palabra);
    // console.log(significado);


}




