
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

// a : 먼저와야하는 아이템 (false)
// b : 뒤에 나와야하는 아이템 (true)


// Teacher's solution

const sortTodos = function (todosName) {
    todosName.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


// My own solution

const sortAction = function (arrayName) {
    arrayName.sort(function (a, b) {    
        if (Number(a.completed) > Number(b.completed)) {
            return 1    
        } else if (Number(a.completed) < Number(b.completed)) {
            return -1  
        } else {
            return 0
        }
    })
}


// Extra self callenge (failed)
//
// Wanted sort subsets of the new array in an alphabetically order.
//
const sortedArray = sortAction(todos)
const sortABC = function (sortedArray) {
    sortedArray.sort(function (a, b) {
        if (a.text.toLowerCase() > b.text.toLowerCase()) {
            return -1
        } else if (a.text.toLowerCase() > b.text.toLowerCase()) {
            return 1
        } else {
            return 0
        } 
    })
}

sortTodos(todos)
console.log(todos)