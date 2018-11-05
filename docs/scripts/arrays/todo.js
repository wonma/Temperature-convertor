// Create an array with five todos
// You have x(number) todos
// Print the first and second to last items => Todo: walk the dog

const todos = [
    'walk a dog',
    'learn JS',
    'do yoga',
    'cook dinner',
    'be grateful'
]

todos.forEach(function(todo, order){
    console.log(`${order + 1}.${todo}`)
})
console.log(`You have ${todos.length} items.`)

// todos.splice(2, 1)
// todos.push('hehe')
// todos.shift()

// console.log(todos.pop()) // returned value : the removed item
// todos.push('laugh a lot')
// console.log(todos)

// console.log(`You have ${todos.length} todos.`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[1]}`)
// console.log(`Todo: ${todos[2]}`)
// console.log(`Todo: ${todos[3]}`)
// console.log(`Todo: ${todos[4]}`)


// push('argument'), pop  : from the end
// shift, unshift('argument')  : from the start
// splice : from the middle
    // splice(starting index, number of items to move) : remove
    // splice(starting index, 0, 'string')  : add
    // splice(starting index, 1, 'string')  : replace


// console.log(todos.shift())
// console.log(todos)

// console.log(todos.unshift('hehehehe this is on the top'))
// console.log(todos)

