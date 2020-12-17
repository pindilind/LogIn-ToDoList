window.addEventListener('load', initSite)

function initSite() {
getTodoList()
printListToPage()

}


function getTodoList() {
    let todoList = localStorage.getItem('todoList')

    if(todoList) {
        todoList = JSON.parse(todoList)

    } else {
        todoList = []
    }
    return todoList
}

function saveTodo() {
    let newTodo = document.getElementsByClassName('todoInput')[0].value
    
    let todoListToSave = getTodoList()
    todoListToSave.push(newTodo)

    localStorage.setItem('todoList', JSON.stringify(todoListToSave))

}

function printListToPage() {
    let outPutDiv = document.getElementsByClassName('outPutDiv')[0]

    let todoList = getTodoList()
    
   for (let i = 0; i < todoList.length; i++) {
       const todo = todoList[i];
       console.log(todoList)

       let toDoText = document.createElement("h3")
       toDoText.innerText = todo

       outPutDiv.appendChild(toDoText)

   }
}

function logOut() {
    sessionStorage.removeItem('inlogSucceed')
    window.location = "/index.html"
}


//CREATE ELEMENTS

//background div
let backgroundDiv = document.createElement("div")

let toDoText = document.createElement("h3")
toDoText.innerText = "Create your to do list here"

//input todos
let todoInput = document.createElement("input")

//input for password
let outPutDiv = document.createElement("div")

//button
let saveBtn = document.createElement("button")
let btnText = document.createElement("h7")
btnText.innerText = "Save"
saveBtn.addEventListener('click', saveTodo)


//button
let logOutBtn = document.createElement("button")
let logOutText = document.createElement("h7")
logOutText.innerText = "Log out"
logOutBtn.addEventListener('click', logOut)



//Classlist, CSS
backgroundDiv.classList = "backgroundDiv"

toDoText.classList = "toDoText"

todoInput.classList = "todoInput"

outPutDiv.classList = "outPutDiv"

saveBtn.classList = "saveBtn"
btnText.classList = "btnText"

logOutBtn.classList = "logOutBtn"
logOutText.classList = "logOutText"


//APPEND TO PAGE
backgroundDiv.appendChild(toDoText)

backgroundDiv.appendChild(todoInput)

backgroundDiv.appendChild(saveBtn)
saveBtn.appendChild(btnText)

backgroundDiv.appendChild(outPutDiv)

backgroundDiv.appendChild(logOutBtn)
logOutBtn.appendChild(logOutText)

let main = document.getElementsByTagName("main")[0]
main.appendChild(backgroundDiv)
