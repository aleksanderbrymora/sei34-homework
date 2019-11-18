var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var people = [{
		id: 1,
		username: "A",
		active: true,
		age: 20
	},
	{
		id: 2,
		username: "B",
		active: false,
		age: 35
	},
	{
		id: 3,
		username: "C",
		active: false,
		age: 50
	},
	{
		id: 4,
		username: "D",
		active: true,
		age: 65
	},
	{
		id: 5,
		username: "E",
		active: true,
		age: 80
	},
	{
		id: 6,
		username: "E",
		active: true,
		age: 95
	},
];

// Iterate through numbers and log each number to the console
_(numbers).each(function (number) {
	console.log(number);
});
console.log("====================================");


// Iterate through numbers and multiply each one of them by 5
_(numbers).map(function (number) {
	console.log(number * 5);
});
console.log("====================================");

// Iterate through numbers and reduce it by adding them together
const sum = _(numbers).reduce(function (runningTotal, n) {
	return runningTotal + n;
});
console.log(sum);
console.log("====================================");

// Get an array of all of the people in people that have the username "E"
const eee = _(people).where({username: 'E'})
console.log(eee);
console.log("====================================");

// Find the first object in people that has the id of 3
const firstUser = _(people).findWhere({id: 3})
console.log(firstUser);
console.log("====================================");

// Find the first person who has an age of less than 50
const fifty = _(people).find(function (person) {
	return (person.age < 50);
})
console.log(fifty);
console.log("====================================");

// Get an array of all of the people with an age of over 60
const sixty = _(people).select(function (person) {
	return (person.age > 60);
})
console.log(sixty);
console.log("====================================");

// Remove all of the people with an age less than 40
const foty = _(people).reject(function (person) {
	return (person.age < 40);
})
console.log(foty);
console.log("====================================");