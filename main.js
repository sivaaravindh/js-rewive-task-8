let btn1=document.getElementById("btn");
btn1.addEventListener("click",myFunct);

function myFunct(){
let a=parseInt (document.getElementById("number1").value);
let b=parseInt (document.getElementById("number2").value);
let c=parseInt (document.getElementById("number3").value);
let d=parseInt (document.getElementById("number4").value);

       if(a<b && a<c && a<d){
                if(b<c && b<d){
                        if(c<d){
                                document.getElementById("con").innerText=(a+","+b+","+c+","+d)
                        }
                        else{
                                document.getElementById("con").innerText=(a+","+b+","+d+","+c)
                        }
                }
                else if(c<b && c<d){
                        if(b<d){
                                document.getElementById("con").innerText=(a+","+c+","+b+","+d)
                        }
                        else{
                                document.getElementById("con").innerText=(a+","+c+","+d+","+b)
                        }
                }
                else{
                        if(b<c){
                                document.getElementById("con").innerText=(a+","+d+","+b+","+c)
                        }
                        else{
                                document.getElementById("con").innerText=(a+","+d+","+c+","+b)
                        }
                }
        }
        else if(b<a && b<c && b<d){
                if(a<c && a<d){
                        if(c<d){
                                document.getElementById("con").innerText=(b+","+a+","+c+","+d)
                        }
                        else{
                                document.getElementById("con").innerText=(b+","+a+","+d+","+c)
                        }
                }
                else if(c<a && c<d){
                        if(a<d){
                                document.getElementById("con").innerText=(b+","+c+","+a+","+d)
                        }
                        else{
                                document.getElementById("con").innerText=(b+","+c+","+d+","+a)
                              
                        }
                }
                else{
                        if(a<c){
                                document.getElementById("con").innerText=(b+","+d+","+a+","+c)
                               
                        }
                        else{
                                document.getElementById("con").innerText=(b+","+d+","+c+","+a)
                               
                        }
                }
        }
        else if(c<a && c<b && c<d){
                if(a<d && a<b){
                        if(b<d){

                                document.getElementById("con").innerText=(c+","+a+","+b+","+d)
                        }
                        else{
                                document.getElementById("con").innerText=(c+","+a+","+d+","+b)
                        }
                }
                else if(b<a && b<d){
                        if(a<d){
                                document.getElementById("con").innerText=(c+","+b+","+a+","+d)
                               
                        }
                        else{
                                document.getElementById("con").innerText=(c+","+b+","+d+","+a)
                               
                        }
                }
                else{
                        if(b<b){
                                document.getElementById("con").innerText=(c+","+d+","+a+","+b)
                               
                        }
                        else{
                                document.getElementById("con").innerText=(c+","+d+","+b+","+a)
                                
                        }
                }
        }
        else{
                if(a<b && a<c){
                        if(b<c){
                                document.getElementById("con").innerText=(d+","+a+","+b+","+c);
                               
                        }
                        else{
                                document.getElementById("con").innerText=(d+","+a+","+c+","+b);
                               
                        }
                }
                else if(b<a && b<c){
                        if(number1<number3){
                                document.getElementById("con").innerText=(d+","+b+","+a+","+c);
                               
                        }
                        else{
                                document.getElementById("con").innerText=(d+","+b+","+c+","+a);
                               
                        }
                }
                else{
                        if(a<b){
                                document.getElementById("con").innerText=(d+","+c+","+a+","+b);
                              
                        }
                        else{
                                document.getElementById("con").innerText=(d+","+c+","+b+","+a);
                               
                        }
                }
        }
}
