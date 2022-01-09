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
interface User{
    name:string,
    age:number
}
// when we used to set an obj we just create the variable and then the Obj, like down below 👇🏾
// const user = {
// since we are using TS we must set the type of the content inside of the Obj, check donw below 👇🏾
// const user:{name:string, age:number} = {

const user:{name:string, age:number} = {
    name: 'Monster',
    age: 3
}

const user2:{name:string, age:number} = {
    name:"Ja",
    age:1
}