var form=document.getElementById('button');
form.addEventListener('click',addHobbie,false);
var lists=document.getElementById('lists');
lists.addEventListener('click',removeHobbie,false);
function addHobbie(event){
    event.preventDefault();
    var txt=document.getElementById('hobbi').value;
    var li=document.createElement('li');
    var tt=document.createTextNode(txt);
    li.appendChild(tt);

    var btn=document.createElement('button');
    var btxt=document.createTextNode('Remove');
    btn.appendChild(btxt);
    btn.setAttribute('class','remove');
    li.appendChild(btn);
    lists.appendChild(li);
}
function removeHobbie(event){
    if(event.target.classList.contains('remove')){
        if(confirm('Are you want rmove hobbie?')){
            var x=event.target.parentElement;
            lists.removeChild(x);
        }
    }
}
