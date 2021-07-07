// a function that takes two numbers and returns the sum of the number.

function addTwoNumbers(){
    let num1 = 2;
    let num2 = 50;
    let sum = Number(num1) + Number(num2);
    console.log(" The Sum is: " + sum);
}
addTwoNumbers();

/*a function that takes a number as a parameter and 
returns the square root of that number*/

let squareNum = isSquare(4)
function isSquare() {
    Math.sqrt(4)
}

// a function that take the name of a city and returns the current temperature in degrees for that city
let showWeather = (city) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68b75f7873d298a846526df53aa24454`)
		.then(res => res.json())
		.then(data => {
		// console.log(data)
		let weather = data;
		// console.log(weather);
		let city = weather.name;
		let temperatureInCelsius = weather.main.temp - 273.15
		let icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
		console.log({city, temperatureInCelsius, icon})
	});
}
				

showWeather('Aba')