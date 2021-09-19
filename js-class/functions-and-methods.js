const studentsOfClassA = [{
    studentName: "Mayk",
    grade: 9.8
},
{
    studentName: "Diego",
    grade: 10
},
{
    studentName: "Valeska",
    grade: 2
}]

const studentsOfClassB = [{
    studentName: "Sarah",
    grade: 4
},
{
    studentName: "Carla",
    grade: 1.8
},
{
    studentName: "Ana",
    grade: 2
}]

function calculatesAverage(students) {
    return (students[0].grade + students[1].grade + students[2].grade) / 3
}

function sendMessage(average, classId) {
    if (average > 5) {
        console.log(`The average of ${classId} was of ${average.toFixed(2)}. Congratulations!`)
    } else {
        console.log(`The average of ${classId} was of ${average.toFixed(2)}. Study more class!`)
    }
}

const average1 = calculatesAverage(studentsOfClassA)
const average2 = calculatesAverage(studentsOfClassB)

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')