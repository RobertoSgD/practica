function mostrarPsw() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function mostrarPswRep() {
    var x = document.getElementById("pswRep");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }