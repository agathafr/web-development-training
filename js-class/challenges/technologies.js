const users = [{
    userName: "Carlos",
    technologies: ["HTML", "CSS"]
},{
    userName: "Jasmine",
    technologies: ["Javascript", "CSS"]
},{
    userName: "Tuane",
    technologies: ["HTML", "Node.js"]
}]

for (let i = 0; i < users.length; i++){
    console.log(`${users[i].userName} trabalha com ${users[i].technologies}`)
}