class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(this.name + " is eating");
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(this.name + " is studying");
  }
}

const student = new Student("John", 18, 12);
console.log(student.eat());
