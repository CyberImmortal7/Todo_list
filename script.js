function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("This field cant be empty");
    } else {
      document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("todoInput").value = "";
    
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  
  var close = document.getElementsByClassName("close");

  const todoList = document.getElementById('todoList');

todoList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});
  