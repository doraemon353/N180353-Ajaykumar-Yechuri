function check(){
    const mail=localStorage.getItem('mail');
    const password=localStorage.getItem('password');
    var user=document.getElementById('text').value;
    var pass=document.getElementById('password').value;
    if(mail==user && password==pass){
        return true;
    }
    else{
        return false;
    }
}