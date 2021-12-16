document.getElementById("test-button").onclick = function fun()
    {
     var person = prompt("What is your name?");
     console.log (' welcome ' + person);
     alert('Welcome ' + person);
     document.getElementById("personal-info").style.display = "initial";
    console.log(person);
    }   

