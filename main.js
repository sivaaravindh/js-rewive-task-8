let a=parseInt (prompt("Enter the value"));
let b=parseInt (prompt("Enter the value"));
let c=parseInt (prompt("Enter the value"));
let d=parseInt (prompt("Enter the value"));


       if(a<b && a<c && a<d){
                if(b<c && b<d){
                        if(c<d){
                                console.log(a,b,c,d)
                        }
                        else{
                                console.log(a,b,d,c)
                        }
                }
                else if(c<b && c<d){
                        if(b<d){
                                console.log(a,c,b,d)
                        }
                        else{
                                console.log(a,c,d,b)
                        }
                }
                else{
                        if(b<c){
                                console.log(a,d,b,c)
                        }
                        else{
                                console.log(a,d,c,b)
                        }
                }
        }
        else if(b<a && b<c && b<d){
                if(a<c && a<d){
                        if(c<d){
                                console.log(b,a,c,d)
                        }
                        else{
                                console.log(b,a,d,c)
                        }
                }
                else if(c<a && c<d){
                        if(a<d){
                                console.log(b,c,a,d)
                        }
                        else{
                                console.log(b,c,d,a)
                              
                        }
                }
                else{
                        if(a<c){
                                console.log(b,d,a,c)
                               
                        }
                        else{
                                console.log(b,d,c,a)
                               
                        }
                }
        }
        else if(c<a && c<b && c<d){
                if(a<d && a<b){
                        if(b<d){

                                console.log(c,a,b,d)
                        }
                        else{
                                console.log(c,a,d,b)
                        }
                }
                else if(b<a && b<d){
                        if(a<d){
                                onsole.log(c,b,a,d)
                                console.log(number3,number2,number1,number4)
                        }
                        else{
                                onsole.log(c,b,d,a)
                                console.log(number3,number2,number4,number1)
                        }
                }
                else{
                        if(b<b){
                                onsole.log(c,d,a,b)
                                console.log(number3,number4,number1,number2)
                        }
                        else{
                                onsole.log(c,d,b,a)
                                console.log(number3,number4,number2,number1)
                        }
                }
        }
        else{
                if(a<b && a<c){
                        if(b<c){
                                console.log(d,a,b,c);
                               
                        }
                        else{
                                console.log(d,a,c,b);
                               
                        }
                }
                else if(b<a && b<c){
                        if(number1<number3){
                                console.log(d,b,a,c);
                               
                        }
                        else{
                                console.log(d,b,c,a);
                               
                        }
                }
                else{
                        if(a<b){
                                console.log(d,c,a,b);
                              
                        }
                        else{
                                console.log(d,c,b,a);
                               
                        }
                }
        }
