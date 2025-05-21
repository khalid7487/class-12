function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Person.prototype = {
  eat: function () {
    console.log(this.name + " is eating");
  },
  sleep: function () {
    console.log(this.name + " is sleeping");
  },
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  console.log(this.name + " is studying");
};
const sakib = new Person("Sakib", 35);
console.log(sakib.sleep());

const student1 = new Student("John", 15, 5);
const student2 = new Student("Jane", 16, 6);
console.log(student1.eat());
console.log(student2.sleep());
