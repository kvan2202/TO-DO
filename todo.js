function enter()
{
    var cancel=document.createElement("button");
    cancel.innerText= "Clear";
    
    var item=document.getElementById("input");
    var para=document.createElement("li");
    document.getElementById("list").appendChild(para);  
    para.innerText=item.value;
    item.value="";

    para.setAttribute("id","listcancel");

    document.getElementById("listcancel").appendChild(cancel);  

       cancel.onclick=function(){
        para.setAttribute("id","boom")
    }
    para.setAttribute("id","gone");
}