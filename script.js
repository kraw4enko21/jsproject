//let x='Vlad';
//let y=`Привет ${x}!Как дела?`;
//console.log(y);
/*let a=['Яблуко','Груша','Виноград','Манго','Ананас']
let x=19;
let y='19';
let i=0;
console.log('while');
while(i<5){
	console.log(a[i])
	i++;
}*/
/*let a=['Яблуко','Груша','Виноград','Манго','Ананас'];
a.forEach(function(item,i){
	console.log(`Элемент с индексом = ${i} имеет значения = ${item}`);
})*/
/*function hello(b){
	console.log(`Hello ${b}! how are you?`);
}
hello('Mark');
hello('Alex');
hello('Sasha');*/
/*function suma(x,y)
{
	let result=x+y;
	return result;
}
function ymno(a,b){
	let result1=a*b;
	return result1;
}
console.log(ymno(suma(10,5),2));*/

/*function sayhi(name,age,city,speciality)
{
	console.log(`Привет меня зовут ${name}, мне ${age}, я из города ${city}, я ${speciality}`);
}*/

/*const petr = {
	name: 'Petr',
	age: 28,
	speciality: 'html coder',
	city: 'Kiev',
	sayHi: function(){
		console.log(`Привет меня зовут ${this.name}, мне ${this.age}, я из города ${this.city}, я ${this.speciality}`);
	},
};
petr.sayHi();*/

/*function Person(name,age,city,spec)
{
	this.name = name;
	this.age = age;
	this.city = city;
	this.spec = spec;
	this.sayHi = function(){
		console.log(`Привет меня зовут ${this.name}, мне ${this.age}, я из города ${this.city}, я ${this.spec}`);
	};
}
const petr = new Person('Petr', 27, 'Kiev', 'coder');
petr.sayHi();*/

class Person{
	constructor (name, age, spec,city)
	{
		this.name = name;
		this.age = age;
		this.city = city;
		this.spec = spec;
	}
	sayHi(){
		console.log(`Привет меня зовут ${this.name}, мне ${this.age}, я из города ${this.city}, я ${this.spec}`);
	};	
}
const petr = new Person('Mary', 18, 'vaiter', 'Kiev' );
console.log(petr);
petr.sayHi();