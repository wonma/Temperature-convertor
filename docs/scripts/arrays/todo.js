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

console.log(todos.pop()) // returned value : the removed item
todos.push('laugh a lot')

console.log(todos)

// console.log(`You have ${todos.length} todos.`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[1]}`)
// console.log(`Todo: ${todos[2]}`)
// console.log(`Todo: ${todos[3]}`)
// console.log(`Todo: ${todos[4]}`)


// push, pop methods acting from the end
// shift, unshift methods acting from the start

console.log(todos.shift())
console.log(todos)

console.log(todos.unshift('hehehehe this is on the top'))
console.log(todos)