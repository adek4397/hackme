const temat = document.querySelector("#temat");
const email = document.querySelector("#email");
const tresc = document.querySelector("#tresc");
const button = document.querySelector("#button");
const myForm = document.querySelector("#myForm");



button.addEventListener("click", function(){
  var forms = document.querySelectorAll('.needs-validation');
  
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('click', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }else{
        console.log(temat.value);
        console.log(email.value);
        console.log(tresc.value);

        var content = [email.value, tresc.value];

        localStorage.setItem(temat.value, JSON.stringify(content));
      }
      form.classList.add('was-validated')
    }, false)
  })
  setTimeout(() => {
    // temat.value = "";
    // email.value = "";
    // tresc.value = "";
    location.reload(true);
  }, 1000);
})