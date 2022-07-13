function Name(){
    if(nameCheck() && femail() && number() && password() && age() && checked() && filesize()){
        return true;
    }
    else{
        return false;
    }
}
document.getElementById('keyup',nameCheck);
function nameCheck(){
    var pattern=/^[a-zA-Z]*$/
    var f=document.getElementById('first').value;
    var last=document.getElementById('last').value;
    var middle=document.getElementById('middle').value;
    if(f.length>3 && pattern.test(f)==true && last.length>3 && pattern.test(last)==true){
        document.getElementById('first').style.border='3px solid green';
        document.getElementById('last').style.border='3px solid green';
        return true;
    }
    else{
        return false;
    }

}
document.getElementById("file").addEventListener("keyup",filesize);
document.getElementById('mail').addEventListener('keyup',femail);
function femail(){
    var pattern1=/^[a-zA-Z]+[0-9]*\W([a-zA-Z]{5}\.com|[a-z]{6}\.[a-z]{2}\.[a-z]{2})/i;
    var mail=document.getElementById('mail').value;
    if(pattern1.test(mail)){
        document.getElementById('e2').style.border="3px solid green"
        document.getElementById('e2').style.visibility='hidden' 
        return true;
    }
    else{
        setTimeout(function(){
            document.getElementById('e2').style.visibility='visible';
            document.getElementById('e2').style.color='red';
            document.getElementById('mail').style.border='3px solid red';
        },100);
        return false;
    }

}
document.getElementById('first').addEventListener('keyup',fullname);
document.getElementById('last').addEventListener('keyup',fullname)
function fullname(){
    var f=document.getElementById('first').value;
    var l=document.getElementById('last').value;
    document.getElementById('fullname').value=f+l;
}
document.getElementById('nu').addEventListener('keyup',number);
function number(){
    var pattern1=/^[6-9]{10}/
    var pattern=/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/
    var num=document.getElementById('num').value;
    var num2=document.getElementById('nu').value;
    if(num=='india'){
        if(pattern1.test(num2) && num2.length==10){
            document.getElementById('nu').style.border='3px solid green';
            return true;
        }
        else{
            document.getElementById('nu').style.border='3px solid red';
            return false;
        }
    }
    else if(num=='usa'){
        if(pattern.test(num2) && num2.length==12){
            document.getElementById('nu').style.border='3px solid green';
            return true;
        }
        else{
            document.getElementById('nu').style.border='3px solid red';
            return false;
        }
    }
    else{
        return false;
    }
}
function password(){
    var pass=document.getElementById('password').value;
    if(pass.length>6){
        return true;
    }
    else{
        return false;
    }
}
function age(){
    var date=document.getElementById('date').value;
    var year=date.split('-');
    var dy=new Date();
    var yea=dy.getFullYear();
    var diff=yea-year[0];
    document.getElementById('age1').value=diff;
    return true;
}
var state=false;
function show(){
    if(state){
        document.getElementById('password').setAttribute('type','password');
        document.getElementById('eye').style.color='#7a797e'
        state=false;
    }
    else{
        document.getElementById('password').setAttribute('type','text');
        document.getElementById('eye').style.color='#5887ef'
        state=true;
    }
}
function confirmation(){
    if(confirm('Are you want to clear form?')==false){
        return true;
    }
    else{
        return false;
    }
}
function checked(){
    var check=document.getElementById('c').checked;
    if(check){
        return true;
    } 
    else{
        document.getElementById('c').color='red';
        return false;
    }
}
function filesize(){
    var id=document.getElementById('file').files[0];
    if(id.size<=500480){
        document.getElementById('error').style.visibility="hidden";
        return true;
    }
    else{
        document.getElementById('error').style.visibility="visible";
        document.getElementById('error').style.color="red";
        return false;
    }
}
