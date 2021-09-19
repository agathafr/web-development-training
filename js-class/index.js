const studentOne = 'Mayk'
const studentTwo = 'Diego'
const studentThree = 'Pedro'
const gradeStudentOne = 9.8
const gradeStudentTwo = 10
const gradeStudentThree = 2

const average = (gradeStudentOne + gradeStudentTwo + gradeStudentThree) / 3
console.log(average)

if (average > 5) {
    console.log(`The average was of ${average.toFixed(2)}. Congratulations class!`)
} else {
    console.log(`The average was of ${average.toFixed(2)}. Study more class!`)
}
