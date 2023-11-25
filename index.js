let userManager = []
const userInput1 = document.getElementById("usernameSignup")
const userInput2 = document.getElementById("usernameLogin")
const passInput1 = document.getElementById("passwordSignup")
const passInput2 = document.getElementById("passwordLogin")
const loginButton = document.getElementById("loginButton")
const signupButton = document.getElementById("signupButton")
const changeToSignupButton = document.getElementById("new-signup")
const changeToLoginButton = document.getElementById("already-login")
const afterLoginDiv = document.getElementById("after-login")
const errorMessageEl = document.getElementById("errorMessage")
const test = document.getElementById("testing")
const okay = document.getElementById("ok")
const wholeDiv = document.getElementById("loginSignupDiv")
const fill = document.getElementById("fill")
let username;
let password;
isLogin = false

okay.addEventListener("click", function(){
    document.getElementById("note1").style.display = "none"
})

loginButton.addEventListener("click", function(){
    // password for : "hossein"
    let userHolder2 = userInput2.value
    let passHolder2 = passInput2.value
    let userHolder = JSON.parse(localStorage.getItem(`username : "${userHolder2}"`))
    let passHolder = JSON.parse(localStorage.getItem(`password for : "${userHolder2}"`))
    if (userHolder2 == JSON.parse(localStorage.getItem(`username : "${userHolder2}"`)) &&  passHolder2 == JSON.parse(localStorage.getItem(`password for : "${userHolder2}"`))) {

        renderAndLogin()
    } else {// if (userHolder2 != JSON.parse(localStorage.getItem(`username : "${userHolder2}"`))) {
        alert("wrong username or password")
    }
})
signupButton.addEventListener("click", function() {
    let userHolder = JSON.stringify(userInput1.value)
    let passHolder = JSON.stringify(passInput1.value)
    localStorage.setItem("username : "+userHolder, userHolder)
    localStorage.setItem("password for : "+userHolder, passHolder)
    alert(`Your account has been created
    try to login in`)
    userInput1.value = ""
    passInput1.value = ""
})

changeToSignupButton.addEventListener("click", function(){
    document.getElementById("usernameSignup").style.display = "inline-block"
    document.getElementById("usernameLogin").style.display = "none"
    document.getElementById("passwordSignup").style.display = "inline-block"
    document.getElementById("passwordLogin").style.display = "none"
    document.getElementById("labelForUsernameSignup").style.display = "inline-block"
    document.getElementById("labelForUsernameLogin").style.display = "none"
    document.getElementById("labelForPasswordSignup").style.display = "inline-block"
    document.getElementById("labelForPasswordLogin").style.display = "none"
    changeToLoginButton.style.display = "inline-block"
    changeToSignupButton.style.display = "none"
    loginButton.style.display = "none"
    signupButton.style.display = "inline-block"
})

changeToLoginButton.addEventListener("click", function() {
    document.getElementById("usernameSignup").style.display = "none"
    document.getElementById("usernameLogin").style.display = "inline-block"
    document.getElementById("passwordSignup").style.display = "none"
    document.getElementById("passwordLogin").style.display = "inline-block"
    document.getElementById("labelForUsernameSignup").style.display = "none"
    document.getElementById("labelForUsernameLogin").style.display = "inline-block"
    document.getElementById("labelForPasswordSignup").style.display = "none"
    document.getElementById("labelForPasswordLogin").style.display = "inline-block"
    changeToLoginButton.style.display = "none"
    changeToSignupButton.style.display = "inline-block"
    loginButton.style.display = "inline-block"
    signupButton.style.display = "none"
})
function renderAndLogin() {
    let userHolder2 = userInput2.value
    let passHolder2 = passInput2.value
    let userHolder = JSON.parse(localStorage.getItem(`username : "${userHolder2}"`))
    let passHolder = JSON.parse(localStorage.getItem(`password for : "${userHolder2}"`))
    wholeDiv.style.display = "none"
    afterLoginDiv.style.display = "flex"
    document.getElementById("fill").innerHTML = `     
            <h2 style="color: white;">Account Information</h2>
            <br>
            <ul>
                <li style="color: white;">Account Name : ${userHolder}</li>
                <li style="color: white;">Account Password : <button onclick="showPassword()" id="showButton">SHOW</button><button onclick="hidePassword()" id="hideButton" style="display: none;">HIDE</button><h2 id="pro-pass"    style="color: white;">*********</h2></li>
            </ul>`
            loginButton.style.display = "none"
            changeToSignupButton.style.display = "none"
}

function showPassword() {
    let userHolder2 = userInput2.value
    let passHolder2 = passInput2.value
    let userHolder = JSON.parse(localStorage.getItem(`username : "${userHolder2}"`))
    let passHolder = JSON.parse(localStorage.getItem(`password for : "${userHolder2}"`))
    document.getElementById("showButton").style.display = "none"
    document.getElementById("hideButton").style.display = "inline"
    document.getElementById("pro-pass").textContent = passHolder
}
function hidePassword() {

    document.getElementById("showButton").style.display = "inline"
    document.getElementById("hideButton").style.display = "none"
    document.getElementById("pro-pass").textContent = "*********"
}