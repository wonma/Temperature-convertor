// Case 1 : String의 경우 indexOf를 사용해 array 내부 탐색 가능

// const notes = ['Note 1', 'Note 2', 'Note 3']
// notes.indexOf('Note 3')  --- 이녀석은 출력되지는 않음
// console.log(notes.indexOf('Note 3')



// Case 2 : object가 array item인 경우

const notes = [{}, {
    title: 'Hongkong travel',
    body: 'I really loved it'
}, {
    title: 'Alabama visiting',
    body: 'hung out with my family'
}, {
    title: 'Europe story',
    body: 'great dishes and history'
}]

// console.log(notes.indexOf('Hongkong travel'))   // Searching fails

console.log(notes.indexOf({})) // passed an object to a function (here, method 'indexOf')
// 이게 fail 할 수 밖에 없는 이유는, 애초부터 {} === {} 의 결과가 false 이기 때문.
// indexOf 내부에서는 === (triple equal)을 사용하여 search를 함
// {} === {} 자체가 말이안되므... 왜냐면, {속성a:값a} {속성a:값a} 라고 하더라도 둘은 false야.
// 즉 어떤 오브젝트는 다른 오브젝트와 같을 수 없음 (맞나?;;)
// reference를 통해서만 이루어짐...

let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject)  // 이것의 결과는 true임

// --------------------------------------------------------------------------

// 그럼 어떻게 object array를 search 할 수 있을까?
// findIndex() 를 사용함! forEach랑 비슷하게, ()안에 callback function 넣어주고, 
// 매 아이템마다 한번씩 돌아감 (functions gets called one time for each item in an array)
// findInex(function(item, index){}}  여기서 item은 훑어질 array 개별 아이템을 가리킴
// 결과물은 true or false를 판단하여, 찾는게 없으면 역시나 -1 출력하고, 있으면 해당 index출력함
// 좋은 점은 만약 100개의 아이템이 있는데 2번째에 내가 찾는 아이템이 있다면, 거기서 return하고 종료되어 컴퓨팅워크 줄어듬


const diary = [{}, {
    title: 'Hongkong travel',
    body: 'I really loved it'
}, {
    title: 'Alabama visiting',
    body: 'hung out with my family'
}, {
    title: 'Europe story',
    body: 'great dishes and history'
}]


const search = diary.findIndex(function (item, index) {
    return item.title === 'Europe story'
}) // const search에 담기는 결과물은 -1(false), 0, 1, 2..임

console.log(search)

// 선생님은 search대신 index라는 이름으로 변수이름을 지으심
// 왜냐면 .findIndex의 결과물이 array item의 index거든!!
