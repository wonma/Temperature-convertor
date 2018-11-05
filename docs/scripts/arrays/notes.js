// Arrays are a method heavy data type.
// Methods are so essential to work with arrays.

// index : order that the item comes in to array.

// [Tip] how to grab item from backwards
// 전체 길이 (총아이템갯수)에서 -1해주기)

const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5']

// console.log(notes.length)
// console.log(notes[notes.length - 1])


// Counting specific number of items
// for (initializer, condition, final expression) {

// }

for (let count = 0; count < notes.length; count++ ) {
    console.log(`${count + 1}. ${notes[count]}`)    
}