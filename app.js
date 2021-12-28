const firebaseConfig = {
    apiKey: "AIzaSyATQm_q5W_DjyL2u_J-yFrQmz05QWyKt7E",
    authDomain: "todo-app-42292.firebaseapp.com",
    projectId: "todo-app-42292",
    storageBucket: "todo-app-42292.appspot.com",
    messagingSenderId: "748463763253",
    appId: "1:748463763253:web:44b7ad709e32a1e23b667c"
  };

  const app = firebase.initializeApp(firebaseConfig);





function addItem() {

    // getting input value
    var itemVal = document.getElementById("item")

    // creating elements of table
    var trEle = document.createElement("tr");
    var valueTdEle = document.createElement("td");
    var editBtnTdEle = document.createElement("td");
    var deleteBtnTdEle = document.createElement("td");

    // creating button element
    var editBtnEle = document.createElement("button")
    var deleteBtnEle = document.createElement("button")

    editBtnEle.setAttribute("onclick","editRow(this)")
    deleteBtnEle.setAttribute("onclick","deleteRow(this)")
    
    var editBtnText = document.createTextNode("Edit")
    editBtnEle.appendChild(editBtnText)
    var deleteBtnText = document.createTextNode("Delete")
    deleteBtnEle.appendChild(deleteBtnText)

    
    editBtnTdEle.appendChild(editBtnEle)
    deleteBtnTdEle.appendChild(deleteBtnEle)

    valueTdEle.innerHTML = itemVal.value


    trEle.appendChild(valueTdEle)
    trEle.appendChild(editBtnEle)
    trEle.appendChild(deleteBtnEle)
    
    
    var dataContainer = document.getElementById("table");

    dataContainer.appendChild(trEle)


    itemVal.value = ""

}

function deleteAll() {
    var dataContainer = document.getElementById("table");
    dataContainer.innerHTML = ""
}

function deleteRow(e){
    e.parentNode.remove()
}

function editRow(e){
    var editableItem = e.previousSibling.innerHTML;

    var updatedItem = prompt("Update Your Value", editableItem)

    if(updatedItem == ""){
        alert("Empty! no changes saved")
    }else{
        e.previousSibling.innerHTML = updatedItem
    }
}
