
            //------------------------------------------------------------styles



            // let nav_toggle_verbos=document.querySelector(".nav-toggle-verbos");
            // let img_toogle=document.querySelector(".img-toogle");
            // let nav_menu_verbos=document.querySelector(".nav-menu-verbos");

            // nav_toggle_verbos.addEventListener("click",()=>{
            //     // console.log("si");

            //     img_toogle.classList.toggle("nav-toggle-img-rotate");

            //     nav_menu_verbos.classList.toggle("nav-toggle-verbos-visible");

            //     let height=0;

    
            //     console.log(nav_menu_verbos.scrollHeight);
            //     //tamaño minimo para que exita el menu y no se desborde, calcula la altura
        
            //     if(nav_menu_verbos.clientHeight=="0"){
            //         height=nav_menu_verbos.scrollHeight;
            //     }
            //     nav_menu_verbos.style.height=height+"px";
            // });


            //------------------------------------------------------------styles





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




                