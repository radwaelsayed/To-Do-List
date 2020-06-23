
var userList =[];
var formWrapper = document.forms.formWrapper;
var userName = formWrapper.elements.userName;
var userPostion = formWrapper.elements.userPostion;
var addBtn = document.getElementById('addBtn');

//function to add new row
function addItems(){
 var item = {
   id:Math.floor(Math.random()*100),
   name :document.getElementById('userName').value,
   postion: document.getElementById('userPostion').value
 }
 userList.unshift(item);
 if (item.name!==''&&item.postion!=='')
 {
    var userItem = document.createElement('li');
    userItem.setAttribute('id',item.id);
    var newEle = document.getElementById('userList').appendChild(userItem);
    newEle.innerHTML+='<h3>'+ item.name+'</h3>'+ '<p>'+ item.postion +'<p/>'+ '<button class="editBtn" onclick="editItem(this)" id="editBtn"> Edit </button>'+'<button onclick="myFunc(this)"> Delete </button>';
    formWrapper.reset();
  }
  else{
    alert('Where Is The Data?!!');
  }
  event.preventDefault();
}
formWrapper.addEventListener('submit',addItems);

//function to delete the the selected row of the list
function myFunc(elem) {
  var li = elem.parentNode;
  li.parentNode.remove(li);
}

//function to edit value in the list
function editItem (elem){
  addBtn.innerHTML= 'Edit';
  p = elem.parentNode;
  var postion = p.previousElementSibling;
  var name = postion.previousElementSibling;
  document.getElementById('userName').value= name.innerText;
  document.getElementById('userPostion').value= postion.innerText;
  
addBtn.onclick=function()
{ 
var newName =  document.getElementById('userName').value;
var newPostion =  document.getElementById('userPostion').value
if (addBtn.innerHTML==='Edit'){
  postion.innerText= newPostion;
  name.innerText= newName;
  addBtn.innerHTML='Add';
  formWrapper.reset();
  event.preventDefault();
}
 }
  }