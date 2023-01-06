

let v={
        Become :["Become "," became - become"],
        Begin :["Begin "," began - begun"],
        Bend :["Bend "," bent - bent. - doblar"],
        Bite :["Bite "," bit - bitten"],
        Blow :["Blow "," blew - blown. - Soplar"],
        Break :["Break "," broke - broken"],
        Bring :["Bring "," brought - brought"],
        Build :["Build "," built - built"],
        Buy :["Buy "," bought "," bought"],
        Catch :["Catch "," caught - caught"],
        Choose :["Choose "," chose - chosen"],
        Come :["Come "," came - come"],
        Cost :["Cost "," cost - cost"],
        Cut :["Cut "," cut - cut"],
        Draw :["Draw "," drew - drawn"],
        Dream :["Dream "," dreamt (dreamed) - dreamt (dreamed)"],
        Drink :["Drink "," drank - drunk"],
        Drive :["Drive "," drove - driven"],
        Eat :["Eat "," ate - eaten"],
        Fall :["Fall "," fell - fallen"],
        Feed :["Feed "," fed - fed"],
        Feel :["Feel "," felt - felt"],
        Fight :["Fight "," fought - fought"],
        Find :["Find "," found - found"],
        Fly :["Fly "," flew - flown"],
        Forget :["Forget "," forgot - forgotten"],
        Forgive :["Forgive "," forgave - forgiven - perdonar"],
        Freeze :["Freeze "," froze - frozen"],
        Get :["Get "," got - gotten"],
        Give :["Give "," gave - given"],
        Grow :["Grow "," grew - grown. - Crecer"],
        Hear :["Hear "," heard - heard"],
        Hide :["Hide "," hid - hidden"],
        Hit :["Hit "," hit - hit"],
        Hold :["Hold "," held - held"],
        Hurt :["Hurt "," hurt - hurt"],
        Keep :["Keep "," kept - kept"],
        Know :["Know "," knew - known"],
        Learn :["Learn "," learnt (learned) - learnt (learned)"],
        Leave :["Leave "," left - left"],
        Lend :["Lend "," lent - lent. - prestar"],
        Let :["Let "," let - let"],
        Lose :["Lose "," lost - lost"],
        Make :["Make "," made - made"],
        Mean :["Mean "," meant - meant. - significar"],
        Meet :["Meet "," met - met"],
        Put :["Put "," put - put"],
        Ride :["Ride "," rode - ridden. - montar"],
        Ring :["Ring "," rang - rung"],
        Rise :["Rise "," rose - risen. - levantar, subir"],
        Run :["Run "," ran - run"],
        Sell :["Sell "," sold - sold"],
        Send :["Send "," sent - sent"],
        Set :["Set "," set - set"],
        Shake :["Shake "," shook - shaken"],
        Shut :["Shut "," shut - shut. - Cerrar"],
        Sing :["Sing "," sang - sung"],
        Sit :["Sit "," sat - sat"],
        Sleep :["Sleep "," slept - slept"],
        Speak :["Speak "," spoke - spoken"],
        Spend :["Spend "," spent - spent"],
        Stand :["Stand "," stood - stood"],
        Steal :["Steal "," stole - stolen. - robar"],
        Swim :["Swim "," swam - swum"],
        Take :["Take "," took - taken"],
        Teach :["Teach "," taught - taught"],
        Tell :["Tell "," told - told"],
        Think :["Think "," thought - thought"],
        Throw :["Throw "," threw - thrown. - Lanzar"],
        Understand :["Understand "," understood - understood"],
        Wake :["Wake "," woke - woken"],
        Write :["Write "," wrote - written"]
    }


// console.log(JSON.stringify(v))
                
    let contenedor=document.querySelector(".contenedor");
            
    let introduccionAleatorio="<p class='text-p-sm w-75-sm mx-auto mb-5 intro-verbs'>Estan ordenados de forma aleatoria para poner en practica lo aprendido:</p>";
    let introduccionBloque="<p class='text-p-sm w-75 mx-auto intro-verbs'>Estan ordenados por bloques para que asi sea mas facil el aprendizaje, la idea es aprender 1 bloque por dia:</p>";


            
    // let boton=document.querySelector(".esconder");
    //     boton.addEventListener("click",ejecutar);


    // 
    // mostrarVerbos(lista ya hecha,introduccion de cosas aleatoriasAleatorio,si quiero o no el semarador de 4 en 4);
    let verbosRandom_btn=document.querySelector(".aleatorio");
        

    let verbosOrdenados_btn=document.querySelector(".orden");
        
                  
    let significados_btn=document.querySelector(".significados");
    
    
    let significadosRandom_btn=document.querySelector(".significadosRandom");
    
    

    let switchBoton=true;


            


    // mostrarVerbos(verbosOrdenados(),introduccionBloque,true); 




    const obtenerVerbosFetch=async ()=>{
        // const buscaPais=busqueda.value;
        // const endpoint=`${url}${buscaPais}`;
    
        try{
    
            let verbosFetch=[];
            // let c=0;
    
            // segundo parametro opcional, tiene que ver con archivos
            // 
            const response=await fetch("./verbsPast.json");
            if(response.ok){
                // extrae un json del pedido, lo que vamos a sacar
                const jsonResponse=await response.json();
                // console.log(jsonResponse[0].verb)
                // muestraResultados(jsonResponse) 
                
                for(let i=0;i<jsonResponse.length; i++){
                    verbosFetch.push(jsonResponse[i])
                }
                // console.log(verbosFetch)
                // return verbos;




                mostrarVerbos(verbosOrdenados(verbosFetch),introduccionBloque,true); 

                verbosRandom_btn.addEventListener("click",()=>{
                    mostrarVerbos(verbosRandom(verbosFetch),introduccionAleatorio,false);
                });

                verbosOrdenados_btn.addEventListener("click",()=>{
                    mostrarVerbos(verbosOrdenados(verbosFetch),introduccionBloque,true); 
                });

                significados_btn.addEventListener("click",()=>{
                    mostrarVerbos(significadoOrdenados(verbosFetch),introduccionBloque,true); 
                });

                significadosRandom_btn.addEventListener("click",()=>{
                    mostrarVerbos(significadosRandom(verbosFetch),introduccionAleatorio,false);
                });
                
            }
        }catch(error){
            console.log(error)
        }
    
    }

    // let v=[];

    // obtenerVerbosFetch();
    obtenerVerbosFetch()

    // const verbosFetch=()=>{
    //     return obtenerVerbosFetch().then((verbs)=>{
    //         return verbs;

    //     })
        
    // }

    // let verbosFetchEncapsulados=verbosFetch();
    // console.log(verbosFetchEncapsulados);

    // for(let i=0;i<verbosFetchEncapsulados.length;i++){
    //     console.log(verbosFetchEncapsulados[i]);
    // }


                    
function listaRandom(num){
    //aleatorio
    let lista = [];
    for(let i=0;i<num; i++){
        lista.push(i)
    }
    lista = lista.sort(function() {return     Math.random() - 0.5});
    //fin aleatorio

    return lista
}

// function obtenerVerbos(verbosFetch){
//     console.log(verbosFetch)
//     //recoje los verbos a desordenar
    
//     let c=0;


//     let verbos=[];
//         for(verb in v){
//             verbos[c]=verb;
//             c++;
//         }
//         console.log(verbos);
//     //fin de recojer

//     return verbos
// }



// Obtener verbos








function verbosRandom(verbosFetch){

    // let verbos=obtenerVerbos();
    // console.log(verbos)

    let lista=listaRandom(verbosFetch.length);
    // console.log(lista)

    // let li=[];
    let palabra=[];
    let span=[];

    for(let i=0;i<verbosFetch.length;i++){
        // li[i]+=i,"verbo",verbos[lista[i]];
        // palabra[i]=`${(i+1)} - ${v[verbos[lista[i]]][0]}`;
        palabra[i]=`${(i+1)} - ${verbosFetch[lista[i]].name}`;
        span[i]=`${verbosFetch[lista[i]].verb}`;
        

    }

    
    let devolver=[palabra,span];

    // console.log(devolver)
    return devolver;
}


function verbosOrdenados(verbosFetch){
    // console.log(verbosFetch[1])
    // let verbos=obtenerVerbos(verbosFetch);


    // let li=[];
    let palabra=[];
    let span=[];

    for(let i=0;i<verbosFetch.length;i++){
        // li[i]+=i,"verbo",verbos[lista[i]];
        palabra[i]=`${(i+1)} - ${verbosFetch[i].name}`;
        span[i]=`${verbosFetch[i].verb}`;
        

    }

    
    let devolver=[palabra,span];

    // console.log(devolver)
    return devolver;
}


function significadoOrdenados(verbosFetch){
    // let verbos=obtenerVerbos();


    // let li=[];
    let palabra=[];
    let span=[];

    for(let i=0;i<verbosFetch.length;i++){
        // li[i]+=i,"verbo",verbos[lista[i]];
        palabra[i]=`${(i+1)} - ${verbosFetch[i].verb}`;
        span[i]=`${verbosFetch[i].name}`;
        

    }

    
    let devolver=[palabra,span];

    // console.log(devolver)
    return devolver;
}

function significadosRandom(verbosFetch){

    // let verbos=obtenerVerbos();
    // console.log(verbos)

    let lista=listaRandom(verbosFetch.length);
    // console.log(lista)

    // let li=[];
    let palabra=[];
    let span=[];

    for(let i=0;i<verbosFetch.length;i++){
        // li[i]+=i,"verbo",verbos[lista[i]];
        palabra[i]=`${(i+1)} - ${verbosFetch[lista[i]].verb}`;
        span[i]=`${verbosFetch[lista[i]].name}`;
        

    }

    
    let devolver=[palabra,span];

    // console.log(devolver)
    return devolver;
}


// Obtener verbos----------




// mostrar 
function mostrarVerbos(verbos,introduccion,switchBloque){
                

    contenedor.innerHTML=introduccion;
    let ul=document.createElement("ul");
    ul.classList.add("list");
    let switchVerbo=false;
    let c_bloque=1;


    for(let i=0;i<verbos[0].length;i++){
        let switchVerbo=false;
        let li=document.createElement("li");
        let span=document.createElement("span");
        let backImg=document.createElement("img");
            
        
            backImg.src="../img/arrow.svg";
            
            backImg.classList.add("img-back");
            span.classList.add("significado","text-p-sm");
            li.classList.add(i,"verbo");

            //hice esto para simplificar las cosas ul
        let palabra=document.createElement("span");
        palabra.classList.add("palabra")
            palabra.innerHTML=`${verbos[0][i]}`;
            
            span.innerHTML=`${verbos[1][i]}`;


            if((((i)%4==0) && !(verbos[0].length==(i+1)))&&switchBloque){
                
                let bloque=document.createElement("div");
                bloque.innerHTML=`
                <div class="separador-verbs">
                    <div class="line"></div>
                    <div class="num">${c_bloque}</div>
                    <div class="line"></div>
                </div>`;

                ul.appendChild(bloque);
                c_bloque++;
            }


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

        
                // console.log(span.scrollHeight);
                //tamaño minimo para que exita el menu y no se desborde, calcula la altura
        
                if(span.clientHeight=="0"){
                    height=span.scrollHeight;
                }
                span.style.height=height+"px";
//------------------------------------------------------------
            });

    }
}

// mostrar---------
































                        
                        
            
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




                

            

                