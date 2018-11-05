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
    title: 'Korea tour',
    body: 'Lots of dishes and k-pop!!'  
}]

// 미션! Alabama visiting이라는 단어를 포함한 노트를 출력시키자!  -- 성공!
// 단, findIndex 콜백 function의 첫 필수 argument가 array각 아이템인걸 까먹음.
const index = diary.findIndex(function(diaryEach, index){
    return diaryEach.title === 'Alabama visiting'
})

console.log(diary[index])



// 미션! 노트(전체)와 찾고자하는 키워드를 argument로 넣어서 해당 노트(아이템) 결과물 얻어내자.
// 성공! 단, string 메소드명을 까먹음. '해당스트링.toLowerCase()'

const findNote = function (noteName, keyword) {
    const index = noteName.findIndex(function (diaryEach, index) {
        return diaryEach.title.toLowerCase() === keyword.toLowerCase()
    })
    return noteName[index]
}

console.log(findNote(diary, "europe story"))



// 미션! find메소드(array서치 메소드)를 이용하여 hongkong이라는 단어 포함한 노트 출력하기

// findIndex와 다른점은, findIndex는 매치결과의 index를 리턴하고
// find는 매치결과 자체를 리턴한다는 것! 
// 그래서, index로 결과물을 원하는지, 실제 매치된 아이템 자체를 원하는지에 따라 디벨로퍼가 결정

const searchItem = function (diaryName, keyword) {
    const result = diaryName.find(function (diaryEach, index) {
        return diaryEach.title.toLowerCase() === keyword.toLowerCase()
    })

    return result
}

console.log(searchItem(diary, 'Korea tour'))