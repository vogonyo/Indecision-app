var nameVar = 'Andrew';
var nameVar = 'Victor';
console.log('nameVar', nameVar);

let nameLet = 'Bernice';
nameLet = 'Julie';
console.log('nameLet  ', nameLet);

const nameConst = 'Lebanese';
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Podolski';
    return petName;
}

//Block scoping
const fullName = 'Nyarongi Ogonyo';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
