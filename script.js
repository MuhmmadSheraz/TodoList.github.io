

let addbtn = () => {

    let localArr = JSON.parse(localStorage.getItem('allTask'))

    let inputTask = document.getElementById('inputField').value;

    let id = (Math.random() * 100).toFixed(0)
    let arr = [];

    // Getting local Storage
if(inputTask==""){
  return  alert("Please Add Task ")
}



    if (localArr == null) {

        let obj = {
            id,
            Task: inputTask
        }

        arr.push(obj)
        localStorage.setItem('allTask', JSON.stringify(arr))
        document.getElementById('inputField').value = "";
    }

    else {

        let obj = {
            id,
            Task: inputTask
        }

        localArr.push(obj)
        localStorage.setItem('allTask', JSON.stringify(localArr))
        document.getElementById('inputField').value = "";
    }
    fetchingData()
}

// Fetching Data Form Local Storage...

let fetchingData = () => {
    let localArr = JSON.parse(localStorage.getItem('allTask'))

    let divContent = document.getElementById('userTaskAll')
    divContent.innerHTML = "";

    if (localArr) {
        for (let i = 0; i < localArr.length; i++) {

            let createDiv = document.createElement('div')
            createDiv.setAttribute('class', 'taskDiv')
            createDiv.innerHTML = `<div class="row  task_content my-3 p-1 w-50 ">
            <div class="col-md-7 m-1">${localArr[i].Task}</div>  
               <div class="col-md-2 m-1"><button class="btn btn-sm btn-warning" onclick="editbtn(${localArr[i].id})" >Edit</button></div>
               
             <div class="col-md-2 m-1"><button class="btn btn-sm btn-danger" onclick="removebtn(${localArr[i].id})">Remove</button></div>
                </div> `

            divContent.append(createDiv)
        }
    }

}

// Remove Button

let removebtn = (id) => {

    let updatedArr = []
    let localArr = JSON.parse(localStorage.getItem('allTask'))
    for (let i = 0; i < localArr.length; i++) {
        if (id != localArr[i].id) {
            updatedArr.push(localArr[i])
        }

    }
    localStorage.setItem('allTask', JSON.stringify(updatedArr))
    fetchingData()
}

// Edit Button

let editbtn = (id) => {
    let localArr = JSON.parse(localStorage.getItem('allTask'))
    for (let i = 0; i < localArr.length; i++) {
        if (id == localArr[i].id) {
            document.getElementById('inputField').value = localArr[i].Task
            document.getElementById('addButton').hidden = true;

            let updatebutton = document.getElementById('updateButton')
            updateButton.setAttribute('onclick', `updateBtn(${localArr[i].id})`)
            updatebutton.hidden = false
        }
    }
}


// Update Button 

let updateBtn = (id) => {

    let localArr = JSON.parse(localStorage.getItem('allTask'))
    for (let i = 0; i < localArr.length; i++) {
        if (id == localArr[i].id) {
            // debugger
            localArr[i].Task = document.getElementById('inputField').value;

        }

    }
    localStorage.setItem('allTask', JSON.stringify(localArr))
    document.getElementById('addButton').hidden = false;
    document.getElementById('updateButton').hidden = true;
    document.getElementById('inputField').value = "";
    fetchingData()



}