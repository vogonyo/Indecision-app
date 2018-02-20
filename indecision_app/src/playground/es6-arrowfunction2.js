//arguments object no longer bound with arro functions
const add = (a, b) => {
    return a + b; 
};
console.log(add(55, 1, 100));
//this keyword - no longer bound with 

const user = {
    name: 'Ogonyo',
    cities: ['Kahawa Shuge', 'Ongata Rongai', 'Jogoo'],
    printPlacesLived(city){
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');

        // this.cities.forEach((city) => {
        //    console.log(this.name + ' has lived in ' + city);
     } 
};
console.log(user.printPlacesLived());

const multiplier ={
    //numbers - array of numbers
    numbers: [2, 4, 5, 6, 10],
    //multiplyBy - a single number
    multiplyBy: 4,
    //method multiply() -return a new array where the numbers have been multiplied
    multiply(number){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());