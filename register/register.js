import CryptoJS from "crypto-js";

function register(){
  let username = document.getElementById("username").value;
  let password = CryptoJS.SHA256(document.getElementById("password").value);
  let user = {name: username, password: password};
  console.log(user);
  let userNameCheck = validateUserName(username);
  let passwordCheck = validatePassword(document.getElementById("password").value);
  if(userNameCheck && passwordCheck){
    axios.post(`http://localhost:8000/register`,{username: username, password: password.toString()})
  .then((response) => {
    //window.location.href = "http://localhost:5173/home";
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
  }
  else{
    console.log("Register failed");
  }
}

function validateUserName(username){
    if(username.length >= 4 && username.length <= 10){
        return true;
    }
    else{
        return false;
    }
}

function validatePassword(password){
    if(password.length >= 8 && password.length <= 16){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById("registerClick").onclick = register;
