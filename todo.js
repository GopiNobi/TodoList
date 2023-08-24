const input = document.querySelector("#text");
const btn = document.querySelector("#addbtn");
const list = document.querySelector(".list");

let store =[];
window.onload = ()=>{
   store =JSON.parse(localStorage.getItem("store")||[]);
   store.forEach(todo=>addtodo(todo))
}
btn.addEventListener("click",()=>{
   store.push(input.value);
   addtodo(input.value);
   localStorage.setItem("store",JSON.stringify(store))
   input.value=""
})

function addtodo(todo){
   let para = document.createElement('p');
  list.appendChild(para)
  para.textContent=todo;
   

   para.addEventListener("click",()=>{
      para.style.textDecoration="line-through"
      remove(todo)
   })
   para.addEventListener("dblclick",()=>{
      list.removeChild(para)
         remove(todo)
      })
}


function remove(todo){
   let index= store.indexOf(todo);
   if(index>-1){
      store.splice(index,1)
   }
   localStorage.setItem("store",JSON.stringify(store))
}
