const object = {
    programmerName: 'Pedro',
    age: 19,
    technologies: [{
        technologyName: 'C++',
        speciality: 'Desktop' 
    },{
        technologyName: 'Python',
        speciality: 'Data Science'
    },{
        technologyName: 'JavaScript',
        speciality: 'Web/Mobile'
    }] 
}

console.log(`The user ${object.programmerName} is ${object.age} years old and uses ${object.technologies[0].technologyName} technology with a specialty in ${object.technologies[0].speciality}`)