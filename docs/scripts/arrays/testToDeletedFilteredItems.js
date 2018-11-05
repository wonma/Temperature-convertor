// Unsolved Issue : 
// How to Filter and delete filtered elements in a array


// Tried but couldn't figure this out yet.  (5th Nov, 2018)
// https://stackoverflow.com/questions/37385299/filter-and-delete-filtered-elements-in-a-array

var a = [{name:'tc_001'}, {name:'tc_002'}, {name:'tc_003'}]

a = a.reduce(function (pre, curr) {

    if (curr.name !== "tc_001") p.push(curr); return p; 
    }, [])

console.log(a)

