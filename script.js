//#region defferences objects and array

/*// массив частный случай объекта - у него фиксированные ключи.
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
console.log(objArray[b]);// - не работает, думает, что мы к какой-то переменной обращаемся*/

//#endregion

//#region conditionals !important

/*console.log(NaN || 2 || undefined); //выведет 2 - если все false, то выведет последний; если запнется на true - то выведет его.
console.log(NaN && 2 && undefined);//выведет NaN - если все true, то выведет последний; если запнется на false - то выведет его.
console.log(1 && 2 && 3);//выведет 3
console.log(!1 && 2 || !3);//false: !1 && 2 = !1 -> !1 || !3 = !3 преобразует в логический -> false
console.log(25 || null && !3); //25: null && !3 = null -> 25(true) || null = 25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5: null && !3 = null -> null && undefined = null -> NaN  || null || 5 = 5
console.log(5 === 5 && 3 > 1 || 5);//5 === 5 && 3 > 1 = true -> true || 5 = true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
	console.log('Done!')
}
console.log(hamburger === 3 && cola || fries === 3 && nuggets); // true && cola = cola -> true && nuggets = nuggets -> cola || nuggets = nuggets

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
	console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
	console.log('Done!')
}
console.log(hamburger && cola || fries === 3 && nuggets); // hamburger && cola = hamburger -> fries === 3 &&
	nuggets = false -> hamburger || false = false*/

//#endregion

//#region loops

/*function firstTask() {
   let i = 5;
   while (i <= 10) {
	   console.log(i);
	   i++;
   }
}
function secondTask() {
   for (let i = 20; i >= 10; i--) {
	   if (i === 13) {
		   break;
	   }
	   console.log(i);
   }
}
function thirdTask() {
   for (let i = 2; i <= 10;) {
	   console.log(i);
	   i += 2;
   }
}
// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
function fourthTask() {
   let i = 2;
   while (i <= 16) {
	   console.log(i);
	   i += 2;
   }
}
fourthTask();
function fifthTask() {
   const arrayOfNumbers = [];

   for (let i = 5; i <= 10; i++) {
	   arrayOfNumbers.push(i);
   }
   // Не трогаем
   return arrayOfNumbers;
}
const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
   for (let j = 0; j < lines - i; j++) {
	   result += ' ';
   }

   for (let y = 0; y < i * 2 + 1; y++) {
	   result = result + '*';
   }
   result += '\n';
}
console.log(result);*/

//#endregion

//#region function tasks

/*function calculateVolumeAndArea(param) {
	if (!Number.isInteger(param) || param <= 0) {
		return 'При вычислении произошла ошибка.';
	}
	let area = param * param;
	return `Объeм куба: ${area * param}, площадь всей поверхности: ${area * 6}`;
}

function getCoupeNumber(placeNumber) {
	if (!Number.isInteger(placeNumber) || placeNumber < 0) {
		console.log('Ошибка. Проверьте правильность введенного номера места');
		return;

	} else if (placeNumber === 0 || placeNumber > 36) {
		console.log("Таких мест в вагоне не существует");
		return;
	}
	console.log(Math.ceil(Math.round(placeNumber / 4)));
}
function getTimeFromMinutes(allTimeInMinutes) {
	if (Number.isInteger(allTimeInMinutes) && allTimeInMinutes >= 0 && allTimeInMinutes <= 600) {
		let hours = Math.floor(allTimeInMinutes / 60);
		let minutes = allTimeInMinutes % 60;
		let houtsDesc, minutesDesc;
		if (hours === 1) {
			houtsDesc = 'час';
		} else if (hours >= 2 && hours <= 4) {
			houtsDesc = 'часа';
		} else {
			houtsDesc = 'часов';
		}
		if (minutes >= 1 && minutes <= 4 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) {
			minutesDesc = 'минута';
		} else if (minutes >= 22 && minutes <= 24 || minutes >= 32 && minutes <= 34 || minutes >= 42 && minutes <= 44 || minutes >= 52 && minutes <= 54) {
			minutesDesc = 'минуты';
		} else {
			minutesDesc = 'минут';
		}
		console.log(`Это ${hours} ${houtsDesc} и ${minutes} ${minutesDesc}`);
	}
	console.log('Ошибка, проверьте данные');
}
getTimeFromMinutes(500);
function findMaxNumber(a, b, c, d) {
	if (typeof a != 'number' || typeof b != 'number' ||
		typeof c != 'number' || typeof d != 'number') {
		return 0;
	}
	let arrayNumber = [b, c, d];
	let maxNumber = a;
	for (let item in arrayNumber) {
		if (arrayNumber[item] > maxNumber) {
			maxNumber = arrayNumber[item];
		}
	}
	return maxNumber;
}
findMaxNumber(1, 3, 6);
findMaxNumber(6, 83, 9, 5);

function fib(num) {
	if (typeof num != 'number')
		return '';
	let previousLastNum = 0, lastNum = 1;
	if (num === 0) {
		return "0";
	} else if (num === 1) {
		return "0 1";
	}
	let result = [previousLastNum, lastNum];
	for (let i = 2; i < num; i++) {
		result[i] = previousLastNum + lastNum;
		previousLastNum = lastNum;
		lastNum = result[i];
	}
	return result.join(", ");

}
fib(0);
fib(1);
fib(5);
fib(8);*/

//#endregion

//#region callbak
/*function first(){
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
learnJS("JS", done); //в коллбек передаем просто название, без скобок */

//#endregion

//#region objects

/*const options = {
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
delete options.name; // удаление свойства!!!
console.log(options);
let counter = 0;
for(let key in options){ // перебор свойств объектов  !!! for ... of не работает с объектами !!!
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
console.log(options);*/

//#endregion

//#region array

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

//#endregion

//#region difference between reference and  value, copy objects and array

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

//#endregion

//#region OOP, prototype

/*let str = "some";
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
john.sayHello();*/

//#endregion

//#region dynamic typing

//#endregion

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
