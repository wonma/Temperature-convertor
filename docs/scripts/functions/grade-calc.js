// student grade, possible total grade
// A: 90-100  B: 80-89  C: 70-79  D:60-69, E: < 59



let grade;

const cal = function (score, total) {
    const cost  = (score / total) * 100
    
    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else {
        grade = 'E'
    }
   
    return 'the grade is ' + grade
}

const student1 = cal(15, 20)
const student2 = cal(19, 20)

console.log(student1)
console.log(student2)