function store(){
    var mail=document.getElementById('mail').value;
    var password=document.getElementById('password').value;
    localStorage.setItem('mail',mail);
    localStorage.setItem('password',password);    
}
document.getElementById('sub').addEventListener('click',store);