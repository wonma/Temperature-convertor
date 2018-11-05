// Syntax
// 선언하기 
// const newArray = arr.filter(function(a, b, c, (d)){    
// })
// 결과물 : 매치되는 아이템이 새로운 array형식으로 출력됨.
// a : 처리되어질 개별 요소 (어레이내의 각 아이템))
// b : 처리되어질 개별 요소의 인덱스
// c : 필터가 콜 되어질 array
// 리턴 값 : 테스트를 패스한 새로운 어레이!!!! 무조건 어레이 낳음.
//         아무 요소도 패스못하면, 빈 어레이 리턴됨!
// 어레이 3개 아이템이 있다면 : 3번 회전함. 결과물은 true, false, true이런식임.

// filter block내에서 indclude 메소드를 잘 활용해보기
// 
const diary = [{
    title: 'Hongkong travel',
    body: 'I really loved it'
}, {
    title: 'Alabama visiting',
    body: 'hung out with my family'
}, {
    title: 'Europe story',
    body: 'great dishes and history'
}, {
    title: 'Korea travel',
    body: 'Lots of dishes and k-pop!!'
}]

const filterDiary = diary.filter(function (el) {
    
    const isTextMatch = el.title.toLowerCase().includes('travel')
    const isBodyMatch = el.body.toLowerCase().includes('travel')
    return isTextMatch === true || isBodyMatch === true
})

console.log(filterDiary)


// const result = todos.filter(function (todoEach, index) {
//     return true // 이렇게 하면 한 아이템 점검할 때마다 무조건 true를 뱉는거지.
// })
// console.log(result)

