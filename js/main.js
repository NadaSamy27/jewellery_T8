//sign-up page

function validate(){
    var uname =document.getElementById("uname").value;
    var email =document.getElementById("email").value;
    var pass =document.getElementById("pass").value;
    var confirmPass =document.getElementById("confirm").value;
    var result =document.getElementById("error");


result.style.color= "#fff";
result.style.textAlign = "center";
result.style.background = "red";
result.style.padding = "10px";
result.style.transition ="all 1s ease";
result.style.marginBottom = "10px";

    if(uname=="" && email=="" && pass=="" && confirmPass==""){
        result.innerHTML= "Please Enter Data";
        return false;  

    }else if(uname.length<5 || uname.length>15){
        result.innerHTML= "Please insert 5-15 character"
        return false;
    }else if(email.indexof("@")==-1 ){
        result.innerHTML= "Please Enter Valid Email";
        return false;
    }else if(pass.length<=8 ){
        result.innerHTML= "Please Enter 8-22 character in Password "
        return false;
    }else if(pass != confirmPass){
        result.innerHTML="Please Matched Password"
        return false;
    }else{
        return true;
    }
       
}
