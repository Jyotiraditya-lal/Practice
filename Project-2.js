let form = document.getElementById("add-bttn");
form.addEventListener("click",display);
function display(e){
    e.preventDefault();
    let myobj={
        "sellingPrice": document.getElementById("sp").value,
        "productName": document.getElementById("prod").value,
        "category": document.getElementById("category").value,
    }
    axios.post("https://crudcrud.com/api/c0ea80e60758467b9dba9c428b805cee/Products",myobj).then((response)=>showProducts0nScreen(response.data))
    window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/c0ea80e60758467b9dba9c428b805cee/Products").then((response)=>{
        for(let i=0;i<response.data.length;i++){
            showProducts0nScreen(response.data[i]);
        }
    })
    })
    
}
function showProducts0nScreen(Products){
    let sp=document.getElementById("sp").value;
    let prod=document.getElementById("prod").value;
    let category=document.getElementById("category").value;

    let d=document.createElement("button");
    d.id="delete-bttn";
    d.textContent="Delete Product";

    let li=document.createElement("li");
    li.class="Product";
    li.textContent=sp+"-"+ prod+"-"+ category;
    li.appendChild(d);

    let liP;
    if(category=="Electronics")
    {
        liP=document.getElementById("EI");
        liP.appendChild(li);
    }
    else if(category=="Food")
    {
        liP=document.getElementById("FI");
        liP.appendChild(li);
    }
    else{
        liP=document.getElementById("SI");
        liP.appendChild(li);
    }
    let DEL=document.getElementById("delete-button");
    DEL.addEventListener("click",Delete(Products._id));

    function Delete(productID){
        axios.Delete(`https://crudcrud.com/api/c0ea80e60758467b9dba9c428b805cee/${productID}`).then((response)=>{
            liP.removeChild(li);
    })
    }
}
