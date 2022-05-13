//defferences objects and array
// массив частный случай объекта - у него фиксированные ключи.
/*
const array = ["a", "b", "c"];
const objArray = {
	'z': "a",
	'x': "b",
	'y': "c"
};
objArray['b'] = "d";
console.log(objArray);
console.log(objArray.b);
console.log(objArray['b']);
console.log(objArray[b]);// - не работает, думает, что мы к какой-то переменной обращаемся
*/

// CALLBACK
/*
function first(){
	setTimeout(() =>console.log("1"), 500);
}
function second (){
	console.log(2);
}
first();
second();

function learnJS (lang, callback){
	console.log(`Я учу ${lang}`);
	callback();
}
function done(){
	console.log(' Япрошел этот урок')
}
learnJS("JS", done); //в коллбек передаем просто название, без скобок
*/
//OBJECTS
/*
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border:'black',
		bg: 'red'
	},
	makeTest(){
		console.log('Test');
	}
};
console.log(options.name);
delete options.name;
console.log(options);
let counter = 0;
for(let key in options){ // перебор свойств объектов
	if(typeof options[key] === 'object'){
		for(let i in options[key]){
			console.log(`Свойство ${[i]} имеет значение ${options[key][i]}`);
		}
	} else{
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
	counter++;
}
console.log(counter);
console.log(Object.keys(options).length);//Object.keys - получает массив ключей
options.makeTest();

const {border, bg} = options.colors;  //ДЕСТРУКТАРИЗАЦИЯ - взятие из объекта объектов в отдельные перемнные
console.log(border)
console.log(bg);
console.log(options);
*/
//ARRAY
/*const arr = [1,2,3,4,5,6];
arr.pop();
console.log(arr);
arr.push(10);
console.log(arr);
for (let i=0;i<arr.length;i++) { //length - последний индекс элемента + 1
	console.log(arr[i]);
}
for(let value of arr) { // for (..of...) - перебор только структур, имеющих итераторы
	console.log(value);
}
arr.forEach(function(item, index, arr){ // нельзя использовать break, continue
	console.log(item, index, arr);
});*/
// TRANSFER BY REFERENCE AND VALUE, COPY OBJECTS AND ARRAY
/*const obj = {
	a:5,
	b:1
};
const copy = obj; // передача по ссылке
copy.a = 11;
console.log(obj);
console.log(obj);

function copy (mainObj){
	let objCopy = {};
	for(let key in mainObj){
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}
const numbers = {
	a:2,
	b:5,
	c:{
		x:7,
		y:4
	}
};

const newNumbers = copy(numbers);
newNumbers.a=10;
newNumbers.c.x = 10;
console.log(numbers);
console.log(newNumbers);

const add = {
	d:17,
	e:20
};

console.log(Object.assign(numbers, add)); //поверхностное копирование (не копируются вложенные объекты)
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);
const oldArray = [1,2,3];
const newArray = oldArray.slice(); // КОПИРОВАНИЕ массивов через SLICE()
newArray.pop();
console.log(oldArray);
console.log(newArray);
const array = [4,5,6],
	all = [...oldArray, ...array]; // SPREAD операратор - оператор розварота
console.log(all);

function log(a,b,c){
	console.log(a);
	console.log(b);
	console.log(c);
}
log(...array);

const arr = [1,2,3];
const newArr = [...arr];
const q = {
	one:1,
	two:2
};
const newOb = {...q};
console.log(newOb);*/
//OOP, PROTOTYPE
/*
let str = "some";
let strObj = new String(str);
console.log(typeof(str))
console.log(typeof (strObj));
console.dir([1,2,3]);
const solder = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('Hallo!');
	}
};
const john = {
	health: 100
};
john.__proto__ = solder;//указание ПРОТОТИПА - не используется!!!
Object.setPrototypeOf(john, solder); - динамическая установка прототипа
const john = Object.create(solder);
john.sayHello();
*/
//DYNAMIC TYPING
// ЗАМЫКАНИЕ - в момент создания функции она носит с собой рюкзак с областью видимостью и переменными
/*function createCounter() {
	  let counter = 0
	   const myFunction = function() {
			counter = counter + 1
			return counter
		  }
	  return myFunction
	 }
 const increment = createCounter()
 const c1 = increment()
 const c2 = increment()
const c3 = increment()
 console.log('example increment', c1, c2, c3);*/
