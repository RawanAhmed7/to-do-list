var inputBox = document.getElementById("input-box")
var listcontainer = document.getElementById("list-container")
function addTask(){
    if (inputBox.value === "" ){
        alert("you must write something ")
    }
    else{
        var li = document.createElement("li");
        li.innerText  = inputBox.value ;
        listcontainer.appendChild(li);
        // var span = document.createElement("span")
        // span.innerHTML="\u00d7"
        // li.appendChild(span)

    }
    inputBox.value=""
}