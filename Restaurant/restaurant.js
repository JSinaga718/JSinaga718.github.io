function submit(){
    

    
var firstname= document.getElementById("firstname").value;
var lastname= document.getElementById("lastname").value;
var phone= document.getElementById("phone").value;
var errormsg= document.getElementById("errormsg").value;
var text;


if (firstname.length < 1 ){
    text = "Please enter valid name"
    errormsg.innerHTML = text;
    return false;
    
}
    console.log("hello");

if (lastname.length <1 ){
    text= "Please enter valid name"
    errormsg.innerHTML = text;
    return false;
}

if (isNaN(phone)){
    
    text = "Please Enter Valid Number"
    errormsg.innerHTML = text;
    return false;
}

alert ("Submitted!")
return false;


}

console.log("hello world, outside of function");