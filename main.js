(function test(){
  axios.get("http://localhost:8000/")
  .then((response) => {
      console.log(response.data);
  })
  .catch((error) => {
      console.log(error);
  });
})();