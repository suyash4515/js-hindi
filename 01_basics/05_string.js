const name = "suyash"
const repcount = 50

// console.log(name + repcount + " value");

console.log(`hello my name is ${name} and my repo count is ${repcount}`);

const gamename = new String('suyash-hc-com')


console.log(gamename[0]);
console.log(gamename.__proto__);


//console.log(gamename.length);


//console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));

const newString = gamename.substring(0,4)
console.log(newString);


const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newString1 = "    suyash    "
console.log(newString1);
console.log(newString1.trim());


const url = "https.//suyash.com/suyash%20indalkar"


console.log(url.replace('%20' , '-'));


console.log(url.includes('suyash'));

console.log(gamename.split('-'));