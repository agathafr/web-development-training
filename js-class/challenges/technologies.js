const users = [{
    userName: "Carlos",
    technologies: ["HTML", "CSS"]
}, {
    userName: "Jasmine",
    technologies: ["Javascript", "CSS"]
}, {
    userName: "Tuane",
    technologies: ["HTML", "Node.js"]
}]

for (let user of users) {
    console.log(`${user.userName} trabalha com ${user.technologies}`)
}