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

function checkIfTheUserUsesCSS(user) {
    for (let i = 0; i < user.technologies.length; i++) {
        if (user.technologies[i] == "CSS") {
            return true
        }
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkIfTheUserUsesCSS(users[i])

    if (userWorksWithCSS) {
        console.log(`The user ${users[i].userName} works with CSS.`)
    }
}