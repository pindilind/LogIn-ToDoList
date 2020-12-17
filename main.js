window.addEventListener("load", initSite)



function initSite() {
    renderContent()
}

function getUsers() {
    let userList = sessionStorage.getItem("userList")

    if(!userList) {
        return []
    }

    userList = JSON.parse(userList)
    return userList
}


function login() {
    const username = document.getElementsByClassName('usernameInput')[0].value
    const password = document.getElementsByClassName('passwordInput')[0].value

    const userList = getUsers()
    console.log(userList)

    let foundUser = undefined

     userList.forEach((user) => {
        if(username == user.username && password == user.password) {
            foundUser = user
        }
        
    })
    if(foundUser) {
    sessionStorage.setItem("inlogSucceed", JSON.stringify(foundUser))
    alert("Välkommen in")
    window.location = "/inlogged.html"
    }
  }



/* CREATE ELEMENTS */
function renderContent() {
    
    //background div
    let backgroundDiv = document.createElement("div")
    
    //input for user
    let userText = document.createElement("h7")
    userText.innerText = "Username"
    let usernameInput = document.createElement("input")
    
    //input for password
    let passwordText = document.createElement("h7")
    passwordText.innerText = "Password"
    let passwordInput = document.createElement("input")
    
    
    //sign in button
    let loginBtn = document.createElement("button")
    let btnText = document.createElement("h7")
    btnText.innerText = "Sign in"
    loginBtn.addEventListener('click', login)
    

    //Classlist, CSS
    backgroundDiv.classList = "backgroundDiv"
    
    userText.classList = "userText"
    usernameInput.classList = "usernameInput"
    
    passwordText.classList = "passwordText"
    passwordInput.classList = "passwordInput"
    
    loginBtn.classList = "loginBtn"
    btnText.classList = "btnText"
    
    
    //APPEND TO PAGE
    backgroundDiv.appendChild(userText)
    backgroundDiv.appendChild(usernameInput)
    
    backgroundDiv.appendChild(passwordText)
    backgroundDiv.appendChild(passwordInput)
    
    backgroundDiv.appendChild(loginBtn)
    loginBtn.appendChild(btnText)
    
    let main = document.getElementsByTagName("main")[0]
    main.appendChild(backgroundDiv)
}


/* //creating users
 let users = [
    {
    username: "linda",
    password: "123"
 
 },{
     username: "kalle",
     password: "123"
  
  }
 
 ]
 
sessionStorage.setItem("userList", JSON.stringify(users)) */