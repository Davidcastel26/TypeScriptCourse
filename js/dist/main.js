var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//const works as a real const
var hello1 = "word";
//since we are defining the variable as a default value, if we will define it as a new value we will get an error for sure
// hello : '23';
// ❌ => hello = "foo"
console.log(hello1);
//Variable Let
var hello2 = "word2";
//in this case Let variable will allowe us to set a new value in it, we won't get an error, don't worry
hello2 = "thisIsWord";
// hello2 : "string" = "";
// in type script we are allow to retype into a variable that contains the same type, that means if we are using a variable with type string WE MUST use string value, if not we will get an error for sure
// ❌ => hello2 = true;
//type 'true' is not assignable to type 'string'
var getFullName = function (name, surname) {
    return name + " " + surname;
};
//since we did not provide the type of value into the params we can set any type of value in it but that is not right, We must set the type of value
//❌ => console.log(getFullName(true, ["foo"]));
console.log(getFullName("Dave", "C"));
// when we used to set an obj we just create the variable and then the Obj, like down below 👇🏾
// const user = {
// since we are using TS we must set the type of the content inside of the Obj, check donw below 👇🏾
// const user:{name:string, age:number} = {
// we have something special in TS wich allow us to get this types of value and setting into the Obt, we use the reserv word (interface) + the name of the interface (by convention we can use capital letter) check the line 27
var user = {
    name: 'Monster',
    age: 3,
    getMessage: function () {
        return "Hello" + this.name;
    }
};
var user2 = {
    name: "Ja",
    getMessage: function () {
        return "Hey" + this.name;
    }
};
console.log(user.name);
var matias = {
    name: 'matias',
    lastname: 'lamela',
    age: 23,
    isActive: true,
    wave: function () {
        console.log('hello');
    },
    hobbies: [{ name: 'read' }]
};
// const popularTags: string[]  = ['dragon']
// we can use string like before but since we already are using the type, we are able to use that type into our array
var popularTags = ['dragon'];
var dragonsTag = "drakaris";
var username = 'Dave';
// union will provide us the option to set a variable as to way like donw below 👇🏾
var pageName = 1;
// one of the common cases are to set something as null
// as will be able to see donw below 👇🏾, this could be part for an error handeler
var errorMessage = null;
// we can use interfaces with union as well 👇🏾
var human = null;
// some variable are declared in this way but is not a good option so try to avoid it ❌
var someProps = true;
// ---- VOID in TS -------------
//void is a set of undefined and null
var doSomething = function () {
    console.log("dosomething");
    //in this case we could not return a number
};
var foo = undefined;
// WE CAN USE VOID IN REACT WHEN WE SET A STATE IN REACT
var hello12 = function () {
    console.log('newState');
};
// ----- Any 'we could use it in cases that we cannot fix an error, be careful with that' -------
var foos = "foo";
// --- Never 
//A function returning 'never' cannot have a reachable end point.
// we use never in order to return an error
var doNothing = function () {
    throw "never";
    // console.log("doNothing");
};
//narrowing
//the process of refining types to more specific types than declared
function summ(a, b) {
    // ❌ => cannot be applied to types 'string | nubmer and string number'
    // return a + b
    //if we would like to return something like this we can do this 👇🏾
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof b === 'string' && typeof b === 'string')
        return a + b;
}
// this is a diferent option to do that 👇🏾
function pluss(a, b) {
    if (typeof a === 'string') {
        a = parseInt(a);
    }
    if (typeof b === 'string') {
        b = parseInt(b);
    }
    return a + b;
}
//  ----------GENERIC FUNCTIONS ---------**************
//we will use it in the action in redux -> are generic funcs 
// and in the axios.get are generic funcs 
//axios.get<Person> ----> response.data --> it will be at person, and it's going to bring the type
var arrs1 = [1, 2, 3, 4];
var arrs2 = ['a', 'b', 'c'];
// we should not do this 👇🏾 cause we will lose the type value in the [variable elements1] in this case we could use (Generic Functions)
// function firstElement(arr: any[]){
// return arr[0]
// }
function firstElement(arr) {
    return arr[0];
}
var elementsNumber = firstElement(arrs1); // implicit <number>
var elementsStrings = firstElement(arrs2); // explicit
//pluck Func
// [{}]
function merge(objOne, objTwo) {
    return __assign(__assign({}, objOne), objTwo);
}
merge({ name: 'Franco' }, { age: 33 });
// ---- Unknown type ---
// at the begining unknown and any works as equal 
var vAny = 10;
var vUnknow = 10;
//lets check here the diferences 👇🏾
var s1 = vAny;
// this will give us an error, since unkonw is not defined as an especific value we can not set a type value in there
// let s2: string = vUnknow;
// BONUS TYPE ASSERTION IN TS 
// this will help us in order to provide a type a specifict value check 👇🏾
var s2 = vUnknow;
var pageNumber = "1";
// if we would like to convert it 
// we must convert | unknow |           👇🏾
var numericPageNumber = pageNumber;
//Tuplas
var tupla = ['dave', 29];
// CLASS -------------------------------------------------------------
var Iperson = /** @class */ (function () {
    function Iperson(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Iperson.prototype.getAge = function () {
        return "I am ".concat(this.age);
    };
    return Iperson;
}());
var martina = new Iperson('martina', 32, 'holi@d.com');
martina.name; // public
//❌ martina.age  ---- we cannot do it since that is private in this case we need to pass it into a func check the line 174
martina.getAge();
var Aluminum = /** @class */ (function (_super) {
    __extends(Aluminum, _super);
    function Aluminum(name, age, email) {
        var _this = _super.call(this, name, age, email) || this;
        _this.isActive = false;
        return _this;
    }
    Aluminum.prototype.funcTest = function () {
        //since email is a variable protected a child class is able to use it
        this.email;
    };
    return Aluminum;
}(Iperson));
