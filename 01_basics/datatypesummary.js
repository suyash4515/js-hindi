// primitive =>call by value

// 7 types : string  , Number , Bollean , null ,undefined , symbbol , BigInt


//

// Reference (Non Primitive)

// Array , Objects , Fumctions

/* const heroes = ["suyash"  , "ashish" , "vedant"];

let myboj={
        name:suyash,
        age:24,

}


const myfunction = function(){

    console.log("suyash"); 
}

*/
// ********************************************************

// stack(primitive) ,, heap(non primitive) =>memory

let myYoutubename = "suyashindalkar"

let anothername = myYoutubename
anothername = "abhijet"
console.log(anothername);
console.log(myYoutubename);

let user1 = {

    email:"suyash@gmail.com",
    upi:"suyash@axl"

}

let user2 = user1

user2.email = "suyashinda@gmail.com"

 console.log(user1.email);
 console.log(user2.email);