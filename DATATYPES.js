// primitive datatype and non primitive datatype are there on the basis of how datatypes are stored in mmeoryy and acces and based upon that icalsified as 
// primitive and non-prmitive


// primitive - String, Number, Boolean , Null , undefined,  Symbol , BigIntt 

// reference or non primitve datatype

// Arrays , Objects , functions 

// javacript is sstatisically defined or dynammically defined

const score = 100
const scorevlaue = 100.3

const isloggedin = false
const outsidetemp = null

let userEmail = undefined;


//  SYMBOLS

const id = Symbol('123')

const anotherid = ("123")
console.log(id == anotherid );   // values set as symbol are not same ever.

const bigNumber = 234442323142352324342332342n
console.log(typeof(bigNumber));

const heros = ["sakshi", 'aditya', 'mummy', 'papa']  // this is array decalration

// to declare and use objects.
// object are sotred in key alue pairs as we use in dictionary. object are always made by writing the name of object followed by let keyword and then curly braces.

let myobj = {
    name:"sakshi", age:"23"
}
console.log(myobj);

/////////////////////////////////////////////////////////////////

// functions - function are the block of code that perform some task and can be used anytime in main fucntion.
const myfunction = function(){
    console.log("hello there whats up");
}

myfunction()
console.log(typeof(heros));

// undefined - type - -undefined
// null = type = object
// array datatype will be object alwayss.







