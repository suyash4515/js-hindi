// const tinderUser = new Object()

const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "suyash"
tinderUser.isLoggedin = false
// console.log(tinderUser);

const regularUser = {

    email : "suaysh@gmail.com",
    fullname :{
        Userfullname :{
           firstname :"sauysh",
            lastname :"indalkar"
        }
    }
}
// console.log(regularUser.fullname.Userfullname.firstname);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);




const users = [


    {
         id : 1,
         email:"h@gmail.com"
    },
    {
        id : 2,
        email:"h@gmail.com"
   },
   {
    id : 3,
    email:"h@gmail.com"
},
 {
    id : 4,
    email:"h@gmail.com"
}
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));



const course = {

    coursename:"jshindi",
    coursefee:"999",
    courseinstructor:"suyash"
}

const {courseinstructor: instructor} = course

console.log(instructor);



// const navbar = ({comapny}) => {

// }
// navbar(comapny = "suaysh")

// {
//     "name": "sauyash",
//     "coursename1": "hindi",
//     "price": "free"
// }



[

    {},
    {},
    {}
]