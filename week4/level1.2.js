// 定义Person类
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    speak() {
      console.log(`Hi, my name is ${this.name}, and I'm ${this.age} years old.`);
    }
  }
  
  // 定义Student类，继承Person类
  class Student extends Person {
    constructor(name, age, grades) {
      super(name, age);
      this.grades = grades;
    }
    speak() {
      super.speak();
      console.log(`And my grades are ${this.grades.join(', ')}.`);
    }
  }
  
  // 创建Person实例并调用speak方法
  const person = new Person('Tom', 25);
  person.speak(); 
  
  // 创建Student实例并调用speak方法
  const student = new Student('Jerry', 20, [88, 92, 95]);
  student.speak();
  