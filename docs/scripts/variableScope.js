// Lexical Scope (Static Scope)
// variable might not be accessible depending on the context
// Code block { .. } matters


// Global scope (name, getName)
// Local scope (age)

let name = 'Andrew'

let getName = function () {
    console.log(name)
    let age = 26

    if (2 > 0) {
        console.log(name) 
        console.log(age)
    }
} 

getName() //Valid

if (1 < 2) {
    console.log(name + 'dunno if it fails') 
    getName() //Valid cuz it's accessible to Global
}

////////// Scope Tree of the code above
////////// (var): variable declaration   
////////// [var]: accessing the var

// Global (name)
    //Local [name] (age) 
        //Local [name] [age]
    //Local [name]
        //Local [name] (age)
            //Local [name] [age]