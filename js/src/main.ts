//const works as a real const
const hello1 = "word";
//since we are defining the variable as a default value, if we will define it as a new value we will get an error for sure
// hello : '23';
// ❌ => hello = "foo"
console.log(hello1);

//Variable Let
let hello2:string = "word2";
//in this case Let variable will allowe us to set a new value in it, we won't get an error, don't worry
hello2 = "thisIsWord";
// hello2 : "string" = "";
// in type script we are allow to retype into a variable that contains the same type, that means if we are using a variable with type string WE MUST use string value, if not we will get an error for sure
// ❌ => hello2 = true;
//type 'true' is not assignable to type 'string'


const getFullName = (name:string, surname:string):string => {
    return name + " " + surname;
}

//since we did not provide the type of value into the params we can set any type of value in it but that is not right, We must set the type of value
//❌ => console.log(getFullName(true, ["foo"]));
console.log(getFullName("Dave","C"));

//-----USING INTERFACE WITH OBJS ----------
// this is an interface
// in the name section as a global convention we need to set the name like ( IName || NameInterface )
interface UserInterface{
    // this setting are mandatory but if we wouldn't like to have all the props mandatory we can use a no-mandatory option after the name set a question mark and before the colons like the 31 line
    name:string,
    // ? will avoil any kind of errors
    age?:number,
    getMessage():string,
}
// when we used to set an obj we just create the variable and then the Obj, like down below 👇🏾
// const user = {
// since we are using TS we must set the type of the content inside of the Obj, check donw below 👇🏾
// const user:{name:string, age:number} = {
// we have something special in TS wich allow us to get this types of value and setting into the Obt, we use the reserv word (interface) + the name of the interface (by convention we can use capital letter) check the line 27
const user: UserInterface = {
    name: 'Monster',
    age: 3,
    getMessage(){
        return "Hello" + this.name;
    }
}

const user2: UserInterface = {
    name:"Ja",
    getMessage(){
        return "Hey" + this.name
    }
} 

console.log(user.name);

//------UNION OPERATOR IN TS ---------

// type aliases in ts 
// we can create diferents types of aliases in diferent thigs
// ID by default did not do anything
type ID = string;
type PopularTag = string;
// lets check this custom type with an union
type MaybePopularTag = PopularTag | null; 

interface HumanInterface {
    // we are doing it with the id since we want the code to be as understandable as possible
    id: ID;
    name: string;
    surname: string;
}

// const popularTags: string[]  = ['dragon']
// we can use string like before but since we already are using the type, we are able to use that type into our array
const popularTags: PopularTag[]  = ['dragon']

const dragonsTag: MaybePopularTag = "drakaris";

let username: string = 'Dave';
// union will provide us the option to set a variable as to way like donw below 👇🏾
let pageName : string | number = 1;
// one of the common cases are to set something as null
// as will be able to see donw below 👇🏾, this could be part for an error handeler
let errorMessage: string | null = null;
// we can use interfaces with union as well 👇🏾
let human: HumanInterface | null = null;
// some variable are declared in this way but is not a good option so try to avoid it ❌  -->>> let someProps: number | null | [] | string | true= true;
