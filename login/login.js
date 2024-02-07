import CryptoJS from "crypto-js";

(function test(){
  axios.get("http://localhost:8000/")
  .then((response) => {
      console.log(response.data);
  })
  .catch((error) => {
      console.log(error);
  });
})();

function login(){
  let username = document.getElementById("username").value;
  let password = CryptoJS.SHA256(document.getElementById("password").value);
  console.log(password);
  let user = {"username": username, "password": password};
  axios.get(`http://localhost:8000/login/?username=${username}&password=${password}`)
  .then((response) => {
    //window.location.href = "http://localhost:5173/home";
  })
  .catch((error) => {
    if(error.message == 'User does not exist'){
      document.getElementById("errorLabel").innerText = "User does not exist";
    }
    else{
      document.getElementById("errorLabel").innerText = "Try again later";
    }
  });
}

document.getElementById("loginClick").onclick = login;
