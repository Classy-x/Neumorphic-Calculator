let value = document.getElementById("display");
let buttons = document.querySelectorAll("span");


  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (this.id === "c") {
        value.innerHTML = "";
      } else if (this.innerHTML === "=") {
        
        try {
          value.innerHTML = eval(value.innerHTML);
        } catch (error) {
          value.innerHTML = "Error";
        }
      } else {
        value.innerHTML += this.innerHTML;

      } 
      this.classList.add("clicked");
      if (this.classList.contains("symbol")) {
        this.classList.add();
      }      
      setTimeout(() => {
        buttons.forEach(button => button.classList.remove("clicked"));
      }, 200);
    });
  }

