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
},
{
    studentName: "Vitória",
    grade: 6
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
},
{
    studentName: "Fabrício",
    grade: 5
}]

function calculatesAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }
    let average = (sum / students.length).toFixed(2)

    return average
}

function sendMessage(average, classId) {
    if (average > 5) {
        console.log(`The average of the ${classId} was ${average}. Congratulations!`)
    } else {
        console.log(`The average of the ${classId} was ${average}. Study more!`)
    }
}

const average1 = calculatesAverage(studentsOfClassA)
const average2 = calculatesAverage(studentsOfClassB)

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')

