let form=document.getElementById("add-bttn");
form.addEventListener("click",display);
function display(e){
    e.preventDefault();

    // Assigning the value to an object
    let exp=document.getElementById("exp").value;
    let des=document.getElementById("des").value;
    let cat=document.getElementById("category").value;
    let myobj={
        "Expense": exp,
        "Description": des,
        "Category": cat,
    }

    // storing the object in local storage
   /* let myObj_stringfy=JSON.stringify(myobj);
    localStorage.setItem("myobj",myObj_stringfy);

    //Retreving the object from local storage
    let y=JSON.parse(localStorage.getItem("myobj"));*/

    axios.post("https://crudcrud.com/api/c0ea80e60758467b9dba9c428b805cee/Expenses",myobj).then((response)=>console.log(response)).catch((err)=>console.log(err))

    //Printing the Expense on screen
    let ul=document.getElementById("Expenses")
    let li=document.createElement("li");
    li.className="Expenses";
    li.textContent= y.Expense+"-"+ y.Description+ "-" + y.Category;

    //creating Delete button 
    let d=document.createElement("button");
    d.id="delete-bttn";
    d.textContent="Delete"

    // creating Edit button
    let edit=document.createElement("button");
    edit.id="edit-bttn";
    edit.textContent="Edit"

    //Appending the buttons
    li.appendChild(d);
    li.appendChild(edit);

    //Appending li
    ul.appendChild(li);
    

    //Event listener On delete button
    let dlte=document.getElementById("delete-bttn");
    dlte.addEventListener("click",Delete);

    //Event Listener on edit button
    let edt=document.getElementById("edit-bttn");
    edt.addEventListener("click",Edit);

    //Delete function
    function Delete()
    {
        ul.removeChild(li)
        localStorage.removeItem(myobj);
    }

    //Edit function
    function Edit()
    {
       localStorage.removeItem(myobj);
       ul.removeChild(li);
       document.getElementById("exp").value= myobj.Expense 
       document.getElementById("des").value= myobj.Description 
       document.getElementById("category").value= myobj.Category
    }
    
}
