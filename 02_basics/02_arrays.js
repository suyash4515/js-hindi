const marvel_heroes = ["thor" , "dr_strange" , "ironman"]
const dc_heroes = ["batman" , "flash" ,"antman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// const all = marvel_heroes.concat(dc_heroes)
// console.log(all);


const all_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_heroes);

const another_arr = [1 , 2 ,3 ,[4 , 5 ] , [6 , 7 ,[ 8 ,9]]]


// const real_arr = another_arr.flat(Infinity)
// console.log(real_arr);


console.log(Array.isArray("suyash"));
console.log(Array.from("suyash"));
console.log(Array.from({name:"suyash"})); // intresting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


