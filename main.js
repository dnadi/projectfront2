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
  axios.get("http://localhost8000/login")
  .then((response) => {
    window.location.href = "http://localhost:5173/home";
  })
  .catch((error) => {
    console.log(error);
  })
}