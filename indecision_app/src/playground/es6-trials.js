class People{
  constructor(name = 'Anonymous', shape, skin){
 this.name = name;
 this.shape = shape;
 this.skin = skin;
 }
  getHotness(){
return `The girl ${this.name} is in love with me. She has a ${this.skin} skin tone`
  }
}

class Chic extends People{
    constructor(name, shape, skin, behaviour){
    super(name, shape, skin);
     this.behaviour = behaviour;
    }
    getBehaviour(){
        let behaviour = super.getHotness();
        if(this.getBehaviour()){
            behaviour += `She is a ${this.behaviour} one`;
        }
           return behaviour;
    }
}

const Lyn = new Chic('Lyn', 'skinny', 'light', 'Proud');
console.log(Lyn.getBehaviour());
const  Nicole = new Chic('Nicole', 'melanin', 'Kind');
console.log(Nicole);
const Eileen = new Chic('Eileen', 'chocolate', 'selfless');
console.log(Eileen);