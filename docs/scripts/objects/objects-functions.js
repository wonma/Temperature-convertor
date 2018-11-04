// 1 : pass objects into functions
// 2 : create object (for multiple returns) inside function
// 3 : get object from the function

let mybook = {
    title: 'Wonmi\'s Diary',
    author: 'Wonmi Kwon',
    year: 2025
}

let otherbook = {
    title: 'Josh\'s Diary',
    author: 'Josh Thompson',
    year: 2030
}

const sumGenerator = (bookName) => {
    return {
        short: `Short!! ${bookName.title}'s author ${bookName.author} on ${bookName.year}.`,
        long: `blah blah blah The book ${bookName.title}'s author ${bookName.author} published it on ${bookName.year}.`
    }
}
// One of the reasons why we return a object from function is that
// we can return multiple options.

sumGenerator(mybook)
// This is an "object" that has two data. (object function?) 
// We put 'mybook' object as an argument and use it
// when a couple of objects have the "same properties".

sumGenerator(mybook).short 
// This itself doesn't do anything 
// We have to DO SOMETHING with the returned value.

console.log(sumGenerator(mybook).short)






// let getInfo = function (bookName) {
//     return {
//         shortInfo : 'this book \'' + bookName.title + '\' is awesome.',
//         longInfo : 'this book named \'' + bookName.title + '\' is popular and it\'s published in ' + bookName.year + '.'
//     }
// }

// let infoList_myBook = getInfo(mybook)
// let infoList_otherBook = getInfo(otherbook)

// console.log(infoList_myBook.shortInfo)
// console.log(infoList_otherBook.longInfo)

// 나의 오류 : 아래처럼 복잡하게 할 필요 없었음
// let infoList = getInfo(mybook)
// let shortInfo = infoList.shortInfo
// let longInfo = infoList.longInfo

// console.log(longInfo)