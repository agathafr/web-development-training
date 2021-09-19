const nameOfPossibleRetiree = "Silvana"
const sex = "F"
const age = 48
const contribution = 23


if (sex == "F" && contribution >= 30) {
    if (age + contribution >= 85) {
        console.log(`${nameOfPossibleRetiree}, you can retire!`)
    } else {
        console.log(`${nameOfPossibleRetiree}, you can't retire!`)
    }
} else if (sex == "M" && contribution >= 35) {
    if (age + contribution >= 95) {
        console.log(`${nameOfPossibleRetiree}, you can retire!`)
    } else {
        console.log(`${nameOfPossibleRetiree}, you can't retire!`)
    }
} else {
    console.log("The value of the variable sex needs to be 'F' or 'M' and the sum of the age with the contribution time, and the contribution, for men and women should be, respectively, 95 and 85, 30 and 35.")
}