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

function markAsFailed(student) {
    student.disapproved = false
    if(student.grade < 5) {
        student.disapproved = true
    }
}

function sendMessageDisapproved(student) {
    if (student.disapproved){
        console.log(`The student ${student.studentName} is desapproved!`)
    }
}

function studentDisapproved(students) {
    for(let student of students) {
        markAsFailed(student)
        sendMessageDisapproved(student)
    }
}

studentDisapproved(studentsOfClassA)
studentDisapproved(studentsOfClassB)