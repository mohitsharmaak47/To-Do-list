let addbtn = document.getElementById("addBtn")
let taskTittle = document.getElementById("tittle")
let taskDesc = document.getElementById("desc")


addbtn.addEventListener("click",() => {

    if(taskTittle.value == "" || taskDesc.value == ""){
        alert("please entre Task Detail")
        return
    }


    let task = document.createElement("div")
    task.classList.add("border", "p-3", "mycolor", "d-flex", "justify-content-between", "align-items-center","rounded-4","mt-3")

    let leftDiv = document.createElement("div")
    let rightDiv = document.createElement("div")

    let heading = document.createElement("h3")
    heading.innerText = taskTittle.value

    let desc = document.createElement("p")
    desc.innerText = taskDesc.value

    leftDiv.appendChild(heading)
    leftDiv.appendChild(desc)

    task.appendChild(leftDiv)

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.classList.add("btn","btn-danger")
    delBtn.addEventListener("click",() =>{
        todoContainer.removeChild(task)
    })

    rightDiv.appendChild(delBtn)
    task.appendChild(rightDiv)
    todoContainer.appendChild(task)
    
    // taskDesc.value = ""
    // taskTittle.value = ""

})


