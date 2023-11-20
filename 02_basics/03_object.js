 // singleton 

 // object literals

 const mysym = Symbol("key1")

 const Jsuser = {

   name:"suyash", 
   age : "19",
   "full name" :"suyash indalkar",
   [mysym] : "key12",
   email:"sauysah@gmail.com",
   isloggedin:false,
   lastlogindays:["monday" ,"sunday"]
 }
//    console.log(Jsuser.fullname);
//    console.log(Jsuser["email"]);
//    console.log(Jsuser[mysym]);


   Jsuser.email = "suaysha.gmail.com"
// Object.freeze(Jsuser)
// Jsuser.email = "suaysha1.gmail.com"
// console.log(Jsuser["email"]);

Jsuser.greeting = function(){
     console.log("suyash is here");
     
}


Jsuser.greeting2 = function(){
     console.log(`suyash is here, ${this.name}`);
     
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


 