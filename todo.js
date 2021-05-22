var head=document.getElementById("header");
//console.log(head);
var i=document.getElementById("getinput");
//console.log(i);
var add= document.getElementById("add");
//console.log(add);
var todocontainer=document.getElementById("todocontainer");
//console.log( todocontainer);
var clear=document.getElementById("clear");
console.log(clear);

add.addEventListener("click",function()
{
    var p=document.createElement("p");
    p.innerText=i.value;//diff bet innertext and value
     todocontainer.appendChild(p);
     var remove=document.createElement("button");
     var btntext=document.createTextNode("remove");
     todocontainer.appendChild(remove);
     todocontainer.appendChild(btntext);

     remove.addEventListener("click",function()
     {
         console.log("in remove click");
         todocontainer.removeChild(remove);
         todocontainer.removeChild(btntext);
         todocontainer.removeChild(p);
     })
     console.log(remove);

})
clear.addEventListener("click",removeclick);
function removeclick()
{
    i.value="";
}