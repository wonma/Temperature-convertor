// My own mission!!!   (Failed on 5th Nov, 2018)
//
// Let's filter completed items and delete them.
// and show the left items!
// 
// [example]
// Successfully deleted 3 completed items!
// We have 2 more items as below:
// [{obj1} {obj2}]

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

const deleteDoneToDos = function (todosArray) {

    const doneToDos = todosArray.filter(function (el) {
        return el.completed
    })   
    const doneNum = doneToDos.length    //--(a) put this before (b), cuz I thought the number of items
                                        // should be count before they get deleted.
    todosArray.splice(0, doneToDos.length) //--(b) This didn't work. Need to figure it out.
    return `We deleted ${doneNum} items!` 
}


deleteDoneToDos(todos)
const getThingsToDo = function (todosArray) {
    return todosArray.filter(function (el) {
        return !el.completed
    })
}

const deleteCheckLeft = `
${deleteDoneToDos(todos)}
We have 2 more items to complete below:
${getThingsToDo(todos)}
`
