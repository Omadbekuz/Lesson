// 1. Class yaratish: Person klassini yaratib, uning greet va birthyear metodlarini yozing.
// 18. Tug‘ilgan yilni hisoblash: Person klassida birthyear metodini this yordamida tug‘ilgan yilni hisoblash.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Salom, men ${this.name}!`);
//   }
//   birthyear() {
//     console.log(`${this.name} ning tugilgan yili: ${new Date().getFullYear() - this.age}`);
//   }
// }

// // Person ob'ektini yaratish
// const person = new Person('Omadbek', 17);

// // Metodlarni chaqirish
// person.greet();
// person.birthyear();

// 2. Obyekt yaratish: Person klassini ishlatib, ikkita turli shaxs yaratib, ularning ma'lumotlarini konsolga chiqaring.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Salom, men ${this.name}!`);
//   }
//   birthyear() {
//     console.log(`${this.name} ning tugilgan yili: ${new Date().getFullYear() - this.age}`);
//   }
// }

// const person = new Person('Omadbek', 17);
// const person2 = new Person('Ozodbek', 17);

// person.greet();
// person.birthyear();
// person2.greet();
// person2.birthyear();

// 3. Static metodlar: calculator klassi yaratib, unda sum, sub, mul, va div metodlarini statik sifatida yozing.
// 4. Static metodlarni chaqirish: calculator klassining statik metodlarini chaqirish uchun kod yozing.
// 8. Static metodlarni o‘zgartirish: calculator klassining metodlarini statikdan obyektga xos qilib o‘zgartiring va ular yordamida hisoblashlar bajaring.

// class calculator {
//   static sum(a, b) {
//     return a + b;
//   }
//   static sub(a, b) {
//     return a - b;
//   }
//   static mul(a, b) {
//     return a * b;
//   }
//   static div(a, b) {
//     return a / b;
//   }
//   static div(a, b) {
//     if (b === 0) {
//       return "Xotolik: nolga bolish mumkin emas!";
//     }
//     return a / b;
//   }
// }
// console.log(calculator.sum(5, 3));
// console.log(calculator.sub(5, 3));
// console.log(calculator.mul(5, 3));
// console.log(calculator.div(5, 3));
// console.log(calculator.div(5, 5));

// 5. this ishlatish: Obyektda this yordamida uning xususiyatlarini konsolga chiqaradigan kod yozing.
// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   printInfo() {
//     console.log(`men ${this.name} man meni yoshim ${this.age} da`);
//   }
// }

// const newperson = new person("Omadbek", 17);

// newperson.printInfo();

// 6. Class ichidagi metod: Person klassida yangi metod yozing, unda yoshini hisoblab chiqaruvchi kod yozing.
// 7. Class va obyektlar bilan ishlash: Person klassini ishlatib, ikkita shaxsni yaratib, ularning tug‘ilgan yilini chiqarish uchun metod yozing.

// class Person {
//   constructor(name, bithyear) {
//     this.name = name;
//     this.bithyear = bithyear;
//   }
//   printAge() {
//     console.log(
//       `Men ${this.name}man, men ${(this.age =
//         new Date().getFullYear() - this.bithyear)} yoshdaman`
//     );
//   }
// }
// const newperson = new Person("Omadbek", 2007);
// const newperson2 = new Person("Hokimbek", 2009);
// newperson.printAge();
// newperson2.printAge();

// 9. Class va obyektlar o‘rtasidagi farq: Person klassi va obyekt yordamida ikki turli shaxs yaratib, this ning ishlatilishini ko‘rsating.
// 12. this bilan metod chaqirish: Person klassida this yordamida metodlarni chaqirishni ko‘rsating.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printPerson() {
//     console.log(`Men ${this.name}man va meni yoshi ${this.age}da`);
//   }
// }
// const newperson = new Person("Omadbel", 17);
// newperson.printPerson();

// const person2 = {
//   name: "Nodirbek",
//   age: 12,

//   introduce: function () {
//     console.log(`Men ${this.name} man men ${this.age} yoshdaman`);
//   },
// };

// person2.introduce();

// 10. Classni eksport qilish: calculator klassini modullar orqali eksport qiling va uni boshqa faylda ishlating.

// class calculator {
//   static sum(a, b) {
//     return a + b;
//   }
//   static sub(a, b) {
//     return a - b;
//   }
//   static mul(a, b) {
//     return a * b;
//   }
//   static div(a, b) {
//     return a / b;
//   }
//   static div(a, b) {
//     if (b === 0) {
//       return "Xotolik: nolga bolish mumkin emas!";
//     }
//     return a / b;
//   }
// }
// console.log(calculator.sum(5, 3));
// console.log(calculator.sub(5, 3));
// console.log(calculator.mul(5, 3));
// console.log(calculator.div(5, 3));
// console.log(calculator.div(5, 5));

// module.exports = calculator;

// 11. Static metod bilan ma'lumot chiqarish: auth klassida static metodlar yaratib, login, register, va logout funksiyalarini yozing.

// class auth {
//   async login(req, res) {}
//   async register(req, res) {}
//   async logout(req, res) {}
//   async forgotPasword(req, res) {}
//   async resetPasword(req, res) {}
//   async updatePasword(req, res) {}
//   async updateProfile(req, res) {}
//   async deleteProfile(req, res) {}
//   async verfication(req, res) {}
// }

// 13. Classdan yangi obyekt yaratish: Person klassidan yangi shaxs yaratib, uning metodlarini ishlatish uchun kod yozing.

// Person klassi
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(
//       `Salom! Mening ismim ${this.name} va men ${this.age} yoshdaman.`
//     );
//   }

//   updateAge(newAge) {
//     this.age = newAge;
//     console.log(`${this.name}ning yangi yoshi: ${this.age}`);
//   }
// }
// const person1 = new Person("Ali", 25);

// person1.introduce();

// person1.updateAge(26);
// person1.introduce();

// 14. Static metodni parametrli qilish: calculator klassida statik metodlarni parametr bilan chaqirish va amallarni bajarish.
// 15. Classlar va static metodlar o‘rtasidagi farq: Klass va static metodlarni solishtirib, qanday vaziyatlarda biri ikkinchisidan foydalangan ma'qul ekanini tushuntiring.
// 16. Obyektni this yordamida yangilash: Person obyektining fname va lname xususiyatlarini this yordamida yangilash.
// class Person {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//   }

//   updateName(newFname, newLname) {
//     this.fname = newFname;
//     this.lname = newLname;
//   }

//   introduce() {
//     console.log(`Salom! Mening ismim ${this.fname} ${this.lname}.`);
//   }
// }

// const person1 = new Person("Ali", "Tursunov");
// person1.introduce();
// person1.updateName("Hasan", "Akramov");
// person1.introduce();

// 17. Metodlar va static metodlar: calculator klassida sum metodini obyektga xos qilib, mul metodini static qilish.

// class Calculator {
//     constructor() {
//       this.result = 0;
//     }

//     sum(a, b) {
//       this.result = a + b;
//       return this.result;
//     }

//     static mul(a, b) {
//       return a * b;
//     }

//     getResult() {
//       return this.result;
//     }

//     reset() {
//       this.result = 0;
//       return this;
//     }
//   }

//   const calc1 = new Calculator();
//   const sumResult = calc1.sum(5, 3);
//   console.log(sumResult);
//   const mulResult = Calculator.mul(5, 3);
//   console.log(mulResult);
//   console.log(calc1.getResult());

// 19. this ning o‘rni: this ning ishlashini tushunish uchun turli misollar yaratib, ularni taqqoslang.

//Obyekt metodida

// const person = {
//   name: "Ali",
//   greet: function () {
//     console.log(this.name);
//   },
// };

// person.greet();

// // Constructor funksiyasida
// function person2(name, age) {
//   this.name = name;
//   this.age = age;
//   this.introduce = function () {
//     console.log(
//       `Salom, mening ismim ${this.name} va men ${this.age} yoshdaman.`
//     );
//   };
// }

// const person1 = new person2("Ali", 25);
// person1.introduce();

// Class metodida

// class Person3 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(
//       `Salom, mening ismim ${this.name} va men ${this.age} yoshdaman.`
//     );
//   }
// }

// const newperson1 = new Person3("Ali", 25);
// person1.introduce();

// 20. Modulga eksport qilish: auth klassini modullar yordamida eksport qilish va uni boshqa faylda ishlatish uchun kod yozing.

// class calculator {
//   static sum(a, b) {
//     return a + b;
//   }
//   static sub(a, b) {
//     return a - b;
//   }
//   static mul(a, b) {
//     return a * b;
//   }
//   static div(a, b) {
//     return a / b;
//   }
//   static div(a, b) {
//     if (b === 0) {
//       return "Xotolik: nolga bolish mumkin emas!";
//     }
//     return a / b;
//   }
// }
// console.log(calculator.sum(5, 3));
// console.log(calculator.sub(5, 3));
// console.log(calculator.mul(5, 3));
// console.log(calculator.div(5, 3));
// console.log(calculator.div(5, 5));

// module.exports = calculator;
