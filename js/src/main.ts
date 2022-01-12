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

//we can use it as well in PO 

interface Person11Interface {
    name: string;
    lastname: string;
    age: number; 
    hobbies?: HobbyInterface[]
}

interface HobbyInterface {
    name: string
} 

//to avoid to writte again all the info in it we can use extends
interface StudentInterface extends Person11Interface{
    //name: string;
    //lastanme: string;
    //age : number
    isActive : boolean;
    wave: () => void;
}

let matias: StudentInterface = {
    name: 'matias',
    lastname: 'lamela',
    age: 23,
    isActive: true,
    wave: () => {console.log('hello');
    },
    hobbies: [{name:'read'}]
}
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
// some variable are declared in this way but is not a good option so try to avoid it ❌
let someProps: number | null | [] | string | true= true;

// ---- VOID in TS -------------
//void is a set of undefined and null
const doSomething = (): void => {
    console.log("dosomething");
    //in this case we could not return a number
}

const foo: void = undefined 

 // WE CAN USE VOID IN REACT WHEN WE SET A STATE IN REACT
 const hello12 = ():void =>{
    console.log('newState');
}

// ----- Any 'we could use it in cases that we cannot fix an error, be careful with that' -------
let foos: any = "foo";
 
// --- Never 
//A function returning 'never' cannot have a reachable end point.
// we use never in order to return an error
const doNothing = (): never => {
    throw "never";
    // console.log("doNothing");
}

//narrowing
//the process of refining types to more specific types than declared
function summ( a:number | string, b: number | string): number | string | void{
    // ❌ => cannot be applied to types 'string | nubmer and string number'
    // return a + b
    
//if we would like to return something like this we can do this 👇🏾
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    if(typeof b === 'string' && typeof b === 'string') return a + b;
}
// this is a diferent option to do that 👇🏾
function pluss( a: string | number, b: string | number): number{
    if(typeof a === 'string'){
        a = parseInt(a)
    }
    if(typeof b === 'string'){
        b = parseInt(b)
    }
    return a + b;
}

//  ----------GENERIC FUNCTIONS ---------**************

//we will use it in the action in redux -> are generic funcs 
// and in the axios.get are generic funcs 
//axios.get<Person> ----> response.data --> it will be at person, and it's going to bring the type

let arrs1 = [1,2,3,4]
let arrs2 = ['a','b','c']
// we should not do this 👇🏾 cause we will lose the type value in the [variable elements1] in this case we could use (Generic Functions)
// function firstElement(arr: any[]){
    // return arr[0]
// }
function firstElement<Type>(arr:Type[]):Type { // as global convention TYPE could be as T, V, U
    return arr[0]
} 

let elementsNumber = firstElement(arrs1) // implicit <number>
let elementsStrings = firstElement<string>(arrs2) // explicit

//pluck Func
// [{}]
function merge<U extends object, V extends object >(objOne: U, objTwo: V ){
    return{
        ...objOne,
        ...objTwo
    }
}

merge({name:'Franco'},{age:33})

// ---- Unknown type ---
// at the begining unknown and any works as equal 
let vAny: any = 10;
let vUnknow: unknown = 10;

//lets check here the diferences 👇🏾
let s1: string = vAny;
// this will give us an error, since unkonw is not defined as an especific value we can not set a type value in there
// let s2: string = vUnknow;

// BONUS TYPE ASSERTION IN TS 
// this will help us in order to provide a type a specifict value check 👇🏾
let s2: string = vUnknow as string;

let pageNumber: string = "1";
// if we would like to convert it 
// we must convert | unknow |           👇🏾
let numericPageNumber: number = (pageNumber as unknown) as number;


//Tuplas
let tupla: [string, number] = ['dave',29]


// CLASS -------------------------------------------------------------

class Iperson{
    name: string;
    private age: number;
    protected email : string;
    constructor(name: string, age:number, email:string){
        this.name = name;
        this.age =  age;
        this.email = email;
    }
    getAge(){
        return `I am ${this.age}`
    }
}
let martina = new Iperson('martina', 32, 'holi@d.com')
martina.name // public
//❌ martina.age  ---- we cannot do it since that is private in this case we need to pass it into a func check the line 174
martina.getAge()

class Aluminum extends Iperson{
    isActive : boolean;
    constructor(name:string, age:number, email:string){
        super(name,age,email)
        this.isActive = false
    }
    funcTest(){
        //since email is a variable protected a child class is able to use it
        this.email
    }
}