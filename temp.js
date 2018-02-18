var util = require('util');

function Person(){
    this.name = 'Firstname';
    this.lastname = 'Lastname';
}

Person.prototype.test = function(){
    console.log(this.name, this.lastname);
}

function Policeman(){
    Person.call(this);
    this.badheNumber = '1234';
}

util.inherits(Policeman, Person);

var cop = new Policeman();
cop.test()