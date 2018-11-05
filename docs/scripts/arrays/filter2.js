// Mission!!! [Failed at first try]
// console.log(getThingsToDo(여기에목록제목))
// deleteTodo(todos, 'buy food')
// console.log(todos)

const todos = [{
    text: 'walk a dog',
    completed: false
}, {
    text: 'learn JS',
    completed: true
}, {
    text: 'buy food',
    completed: false
}, {
    text: 'cook dinner',
    completed: true
}, {
    text: 'Be grateful',
    completed: true
}]

// -------------------------- My first try (deleteTodo failed)---------------------

// const deleteTodo = function (todosArray, keyword) {
//     const filterTodoItem = todosArray.filter(function (el, index) {
//         return el.text.toLowerCase().includes(keyword)
//     })
//     const filterTodoIndex = todosArray.indexOf(filterTodoItem)
//     console.log(filterTodoIndex)
//     // todosArray.splice(0, filterTodoIndex);
//     console.log(`We deleted the todo item with keyword '${keyword}'.`)
// }

// deleteTodo(todos, 'food')
// console.log(todos)

const getThingsToDo = function (todosArray) {
    return todosArray.filter(function (el) {
        return !el.completed
    })
}

console.log(getThingsToDo(todos))


// -------------------------- My first try ------------------------------
