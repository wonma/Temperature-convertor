let name = ' Wonmi Kwon '


// Length property
name.length
console.log(name.length)

// Convert to upper case
name.toUpperCase()
console.log(name.toUpperCase())

// Includes method (true/false)
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim (good when sanitizing data users enter)
console.log(name.trim())


// Challenge 'Is Valid Password?'
// condition : length is more than 8, and it doesn't contain the wordk 'password'

let isValidPassword = function (typedPassword) {
    let password = typedPassword.trim()
    if (password.length > 8 && !password.includes('password')) {
        return `Welcome there!`
    } else if (password.length <= 8 && !password.includes('password')) {
        return `Please type more than 8 letters`
    } else if (password.length > 8 && password.includes('password')) {
        return `Please don't include the word 'password'`
    } else {
        return `Please, try different password. more than 8 length + no 'password' in it`
    }
}

console.log(isValidPassword("password"))

// If I just want 'true' or 'false' I don't even need to use 'if' statement.
// because the logical operator itself results in true of false.

// Resource : MDN string

