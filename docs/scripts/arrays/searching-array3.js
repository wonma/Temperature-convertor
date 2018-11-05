// const todos = [
//     'walk a dog',
//     'learn JS',
//     'do yoga',
//     'cook dinner',
//     'be grateful'
// ]

// Mission!
// 1. Convert array to array of objects -> property : text, completed
// 2. Create function to remove a todo by text value

const todos = [{
    text: 'walk a dog',
    completed: false
}, {
    text: 'learn JS',
    completed: true
}, {
    text: 'do yoga',
    completed: false
}, {
    text: 'cook dinner',
    completed: true
}, {
    text: 'Be grateful',
    completed: true
}]

const deleteTodo = function (todoTitle, keyword) {
    const todoIndex = todoTitle.findIndex(function (todoItem, index) {
        return todoItem.text.toLowerCase() === keyword.toLowerCase()
    })
    
    if (todoIndex > -1) {
        console.log(`We found '${todoTitle[todoIndex].text}' and delete it.`)
        todoTitle.splice(todoIndex, 1)
    }
}

deleteTodo(todos, 'do yoga')
console.log(todos)