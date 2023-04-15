var reply_click = function(){

  id = this.id;
  let form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);

  let formData = new FormData(form);
  let objects = Object.fromEntries(formData);

  var createData;
  if(id === 'login'){
    createData = {
      data: {
        email: objects.email,
        password: objects.password
      }
    }
  }
  else{
    createData = {
      data: objects
    }
  }

let jsonCreateData = JSON.stringify(createData)

function handleSubmit (event){
    event.preventDefault();
    var uri;
    if(id === 'login'){
      uri = 'getUser'
    }
    else{
      uri = 'create'
    }
      fetch("http://localhost:3000/" + uri, {
        method: "POST", // or 'PUT'
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonCreateData,
        })
        .then((response) => response.json())
        .then((data) => {
          if(uri === 'getUser'){
            if(data.recovered === true){
              window.location.replace('home.html')
            }
            else{
              alert('usuario nao encontrado')
            }
          }
          else{
            if(data.created === true){
              alert('User created!')
            }
            else{
              alert('Ooopss... =[')
            }
          }
          return data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  }
}
document.getElementById('login').onclick = reply_click;
document.getElementById('signup').onclick = reply_click;