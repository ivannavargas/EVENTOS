function sumar() {
    var a,b,c;
  

    //covertir el valor de x a un entero 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    
    a=parseFloat(a);
    b=parseFloat(b);
    c=a+b;
    
    document.getElementById("c").innerHTML=a+b;

}
