const addBtn = document.getElementById('addBtn')
const userInput = document.getElementById('userInput')
const myForm = document.getElementById('myForm')
const todoList = document.getElementById('todoList')

const todos = JSON.parse(localStorage.getItem('todos')) || []

myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    addTodo(userInput.value)
    userInput.value=""

})

const addTodo = (todo) =>{
    todos.push(todo)
    updateLs()
}

const updateLs = () =>{
    localStorage.setItem('todos',JSON.stringify(todos))
    displayList()
}

const displayList = () =>{
   
    if(todos.length===0){
        todoList.innerHTML = "List is empty"
       
    }else{
        todoList.innerHTML=""
        todos.forEach((todo,index)=>{
            let li = document.createElement('li')
            li.innerHTML = `
            <input type="checkbox" onchange="checkMe(this)">
           <span>${todo}</span>
            <button onclick="removeTodo(${index})">X</button>
            <button onclick="editTodo(${index})">Edit</button>
            
            `
            todoList.appendChild(li)
        })
    }
   
}

const removeTodo = (index) =>{
    todos.splice(index,1);
    updateLs()
}
const checkMe = (checkbox) =>{
    // console.log()
   
      checkbox.nextElementSibling.classList.toggle('done')

}

const editTodo = (index) =>{
    let newTodo = prompt("Edit Todo",todos[index])
    if(newTodo!=null){
        todos[index] = newTodo
    }
    updateLs()
   
}

displayList()