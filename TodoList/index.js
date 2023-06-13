

var ul = document.querySelector("ul");

function addToList() {
  let txtInput = document.getElementById("todoTxt").value;
  if (txtInput === "") {
    alert("Write Somthing");
  } else {
    var li = document.createElement("li");
  }
  document.getElementById("todoTxt").value = "";

  li.textContent = txtInput;
  ul.append(li);
  let span = document.createElement("span");
  span.className = "close";
  let cross = document.createTextNode("\u00D7");
  span.appendChild(cross);
  li.append(span);
  li.addEventListener('click',Checked)
  span.addEventListener('click',removeItem)
  

}

function removeItem(){
   let li = this.parentNode
   ul.removeChild(li)
   
}
function Checked(){
    this.classList.toggle('checked')
    
}