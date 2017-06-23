let Person = require('./person')
function Student (name, age, Class){
    Person.call(this);
    this.class= Class;
    this.name = name;
    this.age = age;
    this.introduce = function(){
        return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.class+".";
    }
}
module.exports = Student
