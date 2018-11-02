// case1 --- Undefined for variable
let name
console.log(name)

// undefine 나옴. absence of value. JS가 알아서 undefined라는 value를 assign함.


// case2 --- Undefined for function arguments
let square = function(num) {
    console.log(num)
}

square()
// num의 value가 undefined라고 생각함.



// case2_1 --- Undefined for function arguments
let square = function (num) {
    console.log(num)
}

let result = square()
let result2 = square() // 변수 이름 지어주는 것도 call 되네....??...;;
// num의 value가 undefined라고 생각함.
// 그래서 console.log(num) 이 undefined를 출력시킴



// case3 --- Undefined as function return default value
let square = function () {
}

let result = square()
console.log(result)
// What is return value of square function?
// square가 주는 값이 없다보니까
// function으로부터나온 return value로 뭘 해보려고 시도하면 undefined값이 도출됨



// null as assigned value, not a default 
let age = 27
age = null

console.log(age)


// [Conclusion]
// when we see 'undefined' we know it's a language dafault 
// when we see 'null' we know something was explicitly cleared by the developer