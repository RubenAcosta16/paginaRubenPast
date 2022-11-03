
            //------------------------------------------------------------
        let v={
            blow_up:["Blow up","inflar, estallar, volar algo"],
            Break_in :["Break in "," entrar por la fuerza, forzar la entrada, se usa como entrar de forma ilegal a algo"],
            break_up:["Break up","romper una relacion"],
            bring_back:["Bring back"," traer de vuelta, devolver"],
            Bring_out :["Bring out "," sacar o revelar algo o alquien"],
            Bring_up :["Bring up "," mencionar, empezar a hablar de algo"],
            build_up:["Build up","desarrollar, aumentar, acumular"],
            care_for:["Care for (someone)"," preocuparse por alguien o cuidar de alguien"],
            carry_on:["Carry on","seguir adelante, continuar"],
            carry_out:["Carry out","llevar a cabo, cumplir hacer o completar algo, como tarea o un trabajo"],
            catch_up_with:["Catch up with","estar al dia con, lo que esta pasando"],
            Check_in :["Check in "," registrarse, como en un hotel o en un lugar"],
            Check_out :["Check out "," dejar la habitación, tiene que ver con check in"],
            clear_up:["Clear (something) up","aclarar o explicar, como una confusión"],
            Come_along :["Come along "," venir o acompañar: comalong"],
            Come_back :["Come back "," volver o regresar a un lugar donde estabas"],
            come_down:["Come down","derrumbar, como una casa o venir abajo alguien"],
            come_out:["Come out","salir y a veces venir - can you come tonight?"],
            cut_down:["Cut down","cortar abajo o reducir"],
            cut_off:["Cut off","cortar, ya sea cabello o una relacion, amistad o lo que sea, I cut off my hair"],
            Deal_with :["Deal with "," lidiar con o resolver algo"],
            end_up:["End up","terminar acabar, y aveces se habla de acabar un evento"],
            find_out:["Find out"," descubrir o averiguar"],
            follow_up:["Follow up","dar seguimiento, continuar"],
            get_along_with:["Get along with","llevarse bien con alguien"],
            get_in:["Get in","entrar"],
            Get_up :["Get up "," levantarse, ya sea de levantarse a cierta hora o como pararse"],
            Give_something_away :["Give (something) away "," donar o regalar algo"],
            Go_back :["Go back "," regresar, volver pero como indicacion"],
            go_by:["Go by","pasar por, pasar cerca de"],
            Go_on :["Go on "," seguir o continuar algo, go on speak,y . went on es seguia"],
            go_through:["Go through"," pasar por o atravez de, pero de un suceso no lugar"],
            hang_out:["Hang out","pasar el rato, salir"],
            hurry_up:["Hurry up","date prisa"],
            Look_after_alguien:["Look after(alguien) "," cuidar a alguien"],
            Look_up :["Look up "," buscar, se usa como buscar algo en un libro"],
            meet_up:["Meet up","reunirse, encontrarse, merop"],
            mix_up:["Mix up","confundir"],
            set_up:["Set up"," organizar o programar - serap"],
            Speed_up :["Speed up "," acelerar"],
            stand_by:["Stand by","estar preparado, espera y estate listo"],
            stand_for:["Stand for","apoyar o defender algo"],
            take_off:["Take off","quitarse algo"],
            take_on:["Take on","asumir"],
            take_over:["Take over"," encargarse de o hacerce cargo de algo"],
            throw_up:["Throw up","vi que se usa como vomitar"],
            try_on:["Try on","probarse algo, se usa para probar ropa"],
            warm_up:["Warm up","calentar antes de hacer ejercicio, ese calentamiento o prepararme"],
            work_out:["Work out","hacer ejercicio, entrenar"],
            write_down:["Write down","anotar, escribir"]
        }


                
    let contenedor=document.querySelector(".contenedor");
            

random();

            
    let boton=document.querySelector(".esconder");
        boton.addEventListener("click",ejecutar);

    let aleatorio=document.querySelector(".aleatorio");
        aleatorio.addEventListener("click",random);

    let orden=document.querySelector(".orden");
        orden.addEventListener("click",ordenar);
                  
    let significados=document.querySelector(".significados");
    significados.addEventListener("click",mostrarSignificado);
    
    let significadosRandom=document.querySelector(".significadosRandom");
    significadosRandom.addEventListener("click",mostrarSignificadoRandom);


    let switchBoton=true;
            
            
            
    function ejecutar(){
            if(!switchBoton){
                contenedor.style="visibility: hidden;";
                //console.log("none");
                switchBoton=true;
               
            }else{
                contenedor.style="visibility: visible;";
                //console.log("block");
                switchBoton=false;
            }
    }
                    

            
   function random(){
    contenedor.innerHTML="";
    //recoje los verbos a desordenar
        let c=0;
        let verbos=[];
            for(verb in v){
                verbos[c]=verb;
                c++;
            }
            //console.log(verbos);
    //fin de recojer
    //aleatorio
        let lista = [];
            for(let i=0;i<verbos.length; i++){
                lista.push(i)
            }
            lista = lista.sort(function() {return     Math.random() - 0.5});
    //fin aleatorio

//let contenedor=document.querySelector(".contenedor");
let ul=document.createElement("ul");
ul.classList.add("list");





//aqui empieza lo bueno
for(let i=0;i<verbos.length;i++){
    let switchVerbo=false;
    let li=document.createElement("li");
    let span=document.createElement("span");
    let backImg=document.createElement("img");
        
    
        backImg.src="./assets/arrow.svg";
        
        backImg.classList.add("img-back");
        span.classList.add("significado");
        li.classList.add(i,"verbo",verbos[lista[i]]);

        //hice esto para simplificar las cosas ul
    let palabra=document.createElement("span");
    palabra.classList.add("palabra")
        palabra.innerHTML=`${(i+1)} - ${v[verbos[lista[i]]][0]}`;
        
        span.innerHTML=`${v[verbos[lista[i]]][1]}`;
        //` -${v[ve][1]} -${v[ve][2]}`

        li.appendChild(palabra);
        palabra.appendChild(backImg);
        li.appendChild(span);
        ul.appendChild(li);
        contenedor.appendChild(ul);

    
    let verbo=document.querySelectorAll(".verbo");
        verbo[i].addEventListener("click",()=>{
            span.classList.toggle("significado-mostrar");

            backImg.classList.toggle("img-back-active");
//-----------------------------------------------------------------------
            let height=0;

    
            console.log(span.scrollHeight);
            //tamaño minimo para que exita el menu y no se desborde, calcula la altura
    
            if(span.clientHeight=="0"){
                height=span.scrollHeight;
            }
            span.style.height=height+"px";
//------------------------------------------------------------
        });

        let ve=verbos[lista[i]];


}   
}
   


   




    function ordenar(){
                            let c=0;
                            let verbos=[];
                                for(verb in v){
                                    verbos[c]=verb;
                                    c++;
                                }
                                

                            contenedor.innerHTML="";
                            let ul=document.createElement("ul");
                            let switchVerbo=false;
            
                            let i=0;
                            for(verbo in v){
                                let switchVerbo=false;
                                let li=document.createElement("li");
                                let span=document.createElement("span");
                                let backImg=document.createElement("img");
                                    
                                
                                    backImg.src="./assets/arrow.svg";
                                    
                                    backImg.classList.add("img-back");
                                    span.classList.add("significado");
                                    li.classList.add(i,"verbo",v[verbos[i][0]]);
                    
                                    //hice esto para simplificar las cosas ul
                                let palabra=document.createElement("span");
                                palabra.classList.add("palabra")
                                    palabra.innerHTML=`${(i+1)} - ${v[verbos[i]][0]}`;
                                    
                                    span.innerHTML=`${v[verbos[i]][1]}`;
                                    //` -${v[ve][1]} -${v[ve][2]}`
                    
                                    li.appendChild(palabra);
                                    palabra.appendChild(backImg);
                                    li.appendChild(span);
                                    ul.appendChild(li);
                                    contenedor.appendChild(ul);
                    
                                
                                let verbo=document.querySelectorAll(".verbo");
                                    verbo[i].addEventListener("click",()=>{
                                        span.classList.toggle("significado-mostrar");
        
                                        backImg.classList.toggle("img-back-active");
                     //-----------------------------------------------------------------------
                                        let height=0;
        
                                
                                        console.log(span.scrollHeight);
                                        //tamaño minimo para que exita el menu y no se desborde, calcula la altura
                                
                                        if(span.clientHeight=="0"){
                                            height=span.scrollHeight;
                                        }
                                        span.style.height=height+"px";
                    //------------------------------------------------------------
                                    });
                                    i++;
                            }
    }
                        
                        

                        
                        
    function mostrarSignificado(){
                let c=0;
                let verbos=[];
                    for(verb in v){
                        verbos[c]=verb;
                        c++;
                    }
                    

                contenedor.innerHTML="";
                let ul=document.createElement("ul");
                let switchVerbo=false;

                let i=0;
                for(verbo in v){
                    let switchVerbo=false;
                    let li=document.createElement("li");
                    let span=document.createElement("span");
                    let backImg=document.createElement("img");
                        
                    
                        backImg.src="./assets/arrow.svg";
                        
                        backImg.classList.add("img-back");
                        span.classList.add("significado");
                        li.classList.add(i,"verbo",v[verbos[i][0]]);
        
                        //hice esto para simplificar las cosas ul
                    let palabra=document.createElement("span");
                    palabra.classList.add("palabra")
                        palabra.innerHTML=`${(i+1)} - ${v[verbos[i]][1]}`;
                        
                        span.innerHTML=`${v[verbos[i]][0]}`;
                        //` -${v[ve][1]} -${v[ve][2]}`
        
                        li.appendChild(palabra);
                        palabra.appendChild(backImg);
                        li.appendChild(span);
                        ul.appendChild(li);
                        contenedor.appendChild(ul);
        
                    
                    let verbo=document.querySelectorAll(".verbo");
                        verbo[i].addEventListener("click",()=>{
                            span.classList.toggle("significado-mostrar");

                            backImg.classList.toggle("img-back-active");
         //-----------------------------------------------------------------------
                            let height=0;

                    
                            console.log(span.scrollHeight);
                            //tamaño minimo para que exita el menu y no se desborde, calcula la altura
                    
                            if(span.clientHeight=="0"){
                                height=span.scrollHeight;
                            }
                            span.style.height=height+"px";
        //------------------------------------------------------------
                        });
                        i++;
                }
    }
                    
    

    function mostrarSignificadoRandom(){
        console.log("si");
        contenedor.innerHTML="";
    //recoje los verbos a desordenar
        let c=0;
        let verbos=[];
            for(verb in v){
                verbos[c]=verb;
                c++;
            }
            //console.log(verbos);
    //fin de recojer
    //aleatorio
        let lista = [];
            for(let i=0;i<verbos.length; i++){
                lista.push(i)
            }
            lista = lista.sort(function() {return     Math.random() - 0.5});
    //fin aleatorio

//let contenedor=document.querySelector(".contenedor");
let ul=document.createElement("ul");
ul.classList.add("list");





//aqui empieza lo bueno
for(let i=0;i<verbos.length;i++){
    let switchVerbo=false;
    let li=document.createElement("li");
    let span=document.createElement("span");
    let backImg=document.createElement("img");
        
    
        backImg.src="./assets/arrow.svg";
        
        backImg.classList.add("img-back");
        span.classList.add("significado");
        li.classList.add(i,"verbo",verbos[lista[i]]);

        //hice esto para simplificar las cosas ul
    let palabra=document.createElement("span");
    palabra.classList.add("palabra")
        palabra.innerHTML=`${(i+1)} - ${v[verbos[lista[i]]][1]}`;
        
        span.innerHTML=`${v[verbos[lista[i]]][0]}`;
        //` -${v[ve][1]} -${v[ve][2]}`

        li.appendChild(palabra);
        palabra.appendChild(backImg);
        li.appendChild(span);
        ul.appendChild(li);
        contenedor.appendChild(ul);

    
    let verbo=document.querySelectorAll(".verbo");
        verbo[i].addEventListener("click",()=>{
            span.classList.toggle("significado-mostrar");

            backImg.classList.toggle("img-back-active");
//-----------------------------------------------------------------------
            let height=0;

    
            console.log(span.scrollHeight);
            //tamaño minimo para que exita el menu y no se desborde, calcula la altura
    
            if(span.clientHeight=="0"){
                height=span.scrollHeight;
            }
            span.style.height=height+"px";
//------------------------------------------------------------
        });

        let ve=verbos[lista[i]];


}   
    }
                        
                        
                        
            
            //------------------------------------------------------------
            
            //separar
            /*
            function separar(texto,separador){
                let texto2=texto.split(separador);
                let texto3=texto2.join("\",\"");
                document.write(texto3+"<br>");
            }
            
            
            function separarConSignificado(verboss){
                        for(let i=1;i<verboss.length;i+=3){
                                        let n1=i;
                                        let n2=i+1;
                                        let n3=i+2;
            
                                        document.write(`${verboss[n1]}:["${verboss[n1]}","${verboss[n2]}","${verboss[n3]}"],<br>`);
                                                                        
                        }
                    }
            
            separarConSignificado(verbs);
            */




                