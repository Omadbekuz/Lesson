// 1. Car klassini yaratib, unga start, stop va drive metodlarini qo'shing.

// class Car {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   Start() {
//     console.log(`${this.name} ${this.color} moshina ishlayapti`);
//   }
//   Drive() {
//     console.log(`${this.name} ${this.color} moshina harakatlanyapti`);
//   }
//   Stop() {
//     console.log(`${this.name} ${this.color} moshina toxtadi`);
//   }
// }

// const myCar = new Car("BMW M5 COMPETITION", "BLUE");

// myCar.Start();
// myCar.Drive();
// myCar.Stop();

// 2. ElectricCar klassini yaratib, unga battery atributi va capacity metodini qo'shing.
// 10. Super metodini ishlatib, bir sinfning boshqa sinfdan metod chaqirishi.

// class Car {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   Start() {
//     console.log(`${this.name} ${this.color} moshina ishlayapti`);
//   }
//   Drive() {
//     console.log(`${this.name} ${this.color} moshina harakatlanyapti`);
//   }
//   Stop() {
//     console.log(`${this.name} ${this.color} moshina toxtadi`);
//   }
// }

// class ElectricCar extends Car {
//   constructor(name, color, battery) {
//     super(name, color);
//     this.battery = battery;
//   }
//   capacity() {
//     console.log(`${this.name} moshina batareya sig'imi ${this.battery}%`);
//   }
// }

// const myElectricCar = new ElectricCar("BMW M5 COMPETITION", "BLUE", 75);

// myElectricCar.Start();
// myElectricCar.Drive();
// myElectricCar.Stop();
// myElectricCar.capacity();

// 3. Bird va Animal klasslarini yaratib, ular uchun sound metodini polymorphism orqali moslashtiring.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   sound() {
//     console.log(`${this.name} vovullaydi.`);
//   }
// }

// class Bird extends Animal {
//   sound() {
//     console.log(`${this.name} chirqillaydi.`);
//   }
// }

// const myAnimal = new Animal("It");
// const myBird = new Bird("Qush");

// myAnimal.sound();
// myBird.sound();

// 4. Account klassini yaratib, unda private #balance xususiyatini va deposit metodini qo'shing.

// class Account {
//   #balance;

//   constructor(initialBalance = 0) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Balans: ${this.#balance}`);
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const myAccount = new Account(100);
// myAccount.deposit(50);
// console.log(myAccount.getBalance());

// 5. User klassini yaratib, uning uchun get va set metodlari orqali foydalanuvchining yoshini o'zgartirish funksiyasini yaratish.

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         this._age = value > 0 ? value : this._age;
//     }
// }

// const user = new User("Ali", 25);
// console.log(user.age);

// user.age = 30;
// console.log(user.age);

// user.age = -5;
// console.log(user.age);

// 6. Car va Bike klasslarini yaratib, ular uchun umumiy start va stop metodlarini ota klassda belgilab, ularni meros qilib olish.

// class Vehicle {
//   constructor(name) {
//     this.name = name;
//   }
//   start() {
//     console.log(`${this.name} yurdi`);
//   }
//   stop() {
//     console.log(`${this.name} toxtadi`);
//   }
// }

// class Car extends Vehicle {
//   constructor(name, door) {
//     super(name);
//     this.door = door;
//   }
//   start() {
//     console.log(`Car ${this.name} with ${this.door}is starting.`);
//   }
// }

// class Bike extends Vehicle {
//   constructor(name, type) {
//     super(name);
//     this.type = type;
//   }
//   start() {
//     console.log(`Bike ${this.name} of ${this.type} is starting.`);
//   }
// }

// const car = new Car("BMW M5 C", "Deep Blue");
// const bike = new Bike("BMW", "S1000RR");

// car.start();
// car.stop();

// bike.start();
// bike.stop();

// 7. Encapsulation orqali foydalanuvchining balansini faqat getBalance va deposit metodlari orqali o‘rganing va o'zgartiring.

// class Back {
//   #balance = 100;

//   constructor(name) {
//     this.name = name;
//   }

//   getBalance() {
//     console.log(`${this.name} bank balansi : ${this.#balance}`);
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`${this.name} bank balansi : ${this.#balance}`);
//   }
// }

// const bank1 = new Back("IpotekaBank");

// bank1.getBalance();
// bank1.deposit(500);

// bank1.getBalance();

// 8. Person klassini yaratib, uning ism va yosh xususiyatlariga constructor orqali qiymat bering.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   start() {
//     console.log(`${this.name} ${this.age}yoshda va u harakatlanyapti`);
//   }
//   stop() {
//     console.log(`${this.name} toxtadi`);
//   }
// }

// const newPerson = new Person("Omadbek", 17);
// newPerson.start();
// newPerson.stop();

// 9. Static metodlardan foydalanib, umumiy hisob-kitob funksiyalarini yarating.

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
//   static subtract(a, b) {
//     return a - b;
//   }
// }
// console.log(Calculator.add(5, 3));
// console.log(Calculator.subtract(5, 3));

// 11. Dog klassini yaratib, unda sound metodini chaqiruvchi polymorphism ishlatish.

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   voice() {
//     console.log(`${this.name}:vov vov`);
//   }
// }

// const Barca = new Dog("Reks");

// Barca.voice();

// 12. Car klassiga fuel xususiyatini qo'shish va uni chiqarish uchun metod yaratish.

// class Car {
//   constructor(name, fuel) {
//     this.name = name;
//     this.fuel = fuel;
//   }
//   FuelVolume() {
//     console.log(`${this.name} nomli moshinning yoqilgi hajimi ${this.fuel} litr benzin`);
//   }
// }

// const Volume = new Car("BMW M5 COMP", 25);

// Volume.FuelVolume();

// 13. get metodini ishlatib, foydalanuvchining to'liq ma'lumotlarini olish.

// class User {
//   constructor(firstName, lastName, age, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   get userinfo() {
//     return `Name: ${this.fullName}, age: ${this.age}, email: ${this.email}`;
//   }
// }

// const user = new User("Omadbe", "Umarboyev", 17, "omadbek@example.com");
// console.log(user.userinfo);

// 14. set metodini yaratib, foydalanuvchining yoshini faqat raqamda o'zgartirish.
// 23. Classda get va set metodlarini birlashtirib, foydalanuvchining yoshini o‘zgartiring va ko'rsating.

// class User {
//   constructor(firstName, lastName, age, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   get userInfo() {
//     return `Name: ${this.fullName}, age: ${this.age}, email: ${this.email}`;
//   }

//   set updateAge(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this.age = newAge;
//     } else {
//       console.log("Yosh faqat musbat raqam bo'lishi kerak!");
//     }
//   }
// }

// const user = new User("Omadbe", "Umarboyev", 17, "omadbek@example.com");
// console.log(user.userInfo);

// user.updateAge = 18;
// console.log(user.userInfo);

// user.updateAge = "yigirma";

// 15. Bird va Fish klasslarini yaratib, ular uchun har xil sound metodlarini yozing.

// class Bird {
//   constructor(name) {
//     this.name = name;
//   }

//   sound() {
//     console.log(`${this.name} uchib, "chirp chirp" deb ovoz chiqaradi.`);
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }

//   sound() {
//     console.log(`${this.name} suyuqlikda "blub blub" deb ovoz chiqaradi.`);
//   }
// }

// const parrot = new Bird("Qush");
// const goldfish = new Fish("Baliq");

// parrot.sound();
// goldfish.sound();

// 16. Classda Encapsulationni to‘liq amalga oshiring: foydalanuvchining ma’lumotlarini faqat metodlar orqali o‘zgartirish va olish.

// class User {
//   constructor(firstName, lastName, age, email) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#age = age;
//     this.#email = email;
//   }

//   #firstName;
//   #lastName;
//   #age;
//   #email;

//   getFullName() {
//     return `${this.#firstName} ${this.#lastName}`;
//   }

//   getUserInfo() {
//     return `Name: ${this.getFullName()}, Age: ${this.#age}, Email: ${
//       this.#email
//     }`;
//   }

//   updateFirstName(newFirstName) {
//     this.#firstName = newFirstName;
//   }

//   updateLastName(newLastName) {
//     this.#lastName = newLastName;
//   }

//   updateAge(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this.#age = newAge;
//     } else {
//       console.log("Age must be a positive number!");
//     }
//   }

//   updateEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const user = new User("Omadbek", "Jalilov", 17, "omadbek@example.com");
// console.log(user.getUserInfo());

// user.updateAge(18);
// user.updateFirstName("Abdurahim");
// console.log(user.getUserInfo());

// user.updateAge(-5);

// 17. Car klassiga, uning yili, markasi va boshqa ma'lumotlarini chiqarish uchun metodlar yaratish.

// class Car {
//   constructor(year, make, model) {
//     this.year = year;
//     this.make = make;
//     this.model = model;
//   }

//   getCarInfo() {
//     return `Yil: ${this.year}, Marka: ${this.make}, Model: ${this.model}`;
//   }

//   getYear() {
//     return this.year;
//   }

//   getMake() {
//     return this.make;
//   }

//   getModel() {
//     return this.model;
//   }
// }

// const myCar = new Car(2020, "BMW", "M 5 comp");

// console.log(myCar.getCarInfo());
// console.log("Yil:", myCar.getYear());
// console.log("Marka:", myCar.getMake());
// console.log("Model:", myCar.getModel());

// 18. ElectricCar va IceCar klasslaridan foydalangan holda, ikkalasining energiya manbalari bo'yicha tafovutlarini ko'rsating.
// 26. Car klassida fuel va battery xususiyatlarini boshqarish uchun metodlar yaratish.

// class Car {
//   constructor(year, make, model) {
//     this.year = year;
//     this.make = make;
//     this.model = model;
//   }

//   getCarInfo() {
//     return `Yil: ${this.year}, Marka: ${this.make}, Model: ${this.model}`;
//   }
// }

// class ElectricCar extends Car {
//   constructor(year, make, model, batteryCapacity) {
//     super(year, make, model);
//     this.batteryCapacity = batteryCapacity;
//   }

//   getEnergySource() {
//     return `Energiyaga asoslangan manba: Elektr batareya, Batareya quvvati: ${this.batteryCapacity} kWh`;
//   }
// }

// class IceCar extends Car {
//   constructor(year, make, model, fuelType) {
//     super(year, make, model);
//     this.fuelType = fuelType;
//   }

//   getEnergySource() {
//     return `Energiyaga asoslangan manba: Ichki yonish dvigateli, Yoqilg'i turi: ${this.fuelType}`;
//   }
// }

// const electricCar = new ElectricCar(2023, "Tesla", "Model S", 100);
// const iceCar = new IceCar(2020, "Toyota", "Corolla", "Petrol");

// console.log(electricCar.getCarInfo());
// console.log(electricCar.getEnergySource());

// console.log(iceCar.getCarInfo());
// console.log(iceCar.getEnergySource());

// 19. Polymorphism yordamida Animal klassi va undan meros olgan boshqa sinflar uchun umumiy metodlarni yozing.
// 24. Dog va Cat klasslarini yaratib, har biriga mos metodlarni qo'shing.

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }

//     speak() {
//       console.log(`${this.name} makes a sound`);
//     }
//   }

//   class Dog extends Animal {
//     speak() {
//       console.log(`${this.name} barks`);
//     }
//   }

//   class Cat extends Animal {
//     speak() {
//       console.log(`${this.name} meows`);
//     }
//   }

//   class Cow extends Animal {
//     speak() {
//       console.log(`${this.name} moos`);
//     }
//   }

//   const dog = new Dog('Buddy');
//   const cat = new Cat('Whiskers');
//   const cow = new Cow('MooMoo');

//   dog.speak();
//   cat.speak();
//   cow.speak();

// 20. Constructor yordamida classda default qiymatlarni belgilash.

// class Car {
//   constructor(year, make = "Toyota", model = "Corolla") {
//     this.year = year;
//     this.make = make;
//     this.model = model;
//   }

//   getCarInfo() {
//     return `Yil: ${this.year}, Marka: ${this.make}, Model: ${this.model}`;
//   }
// }

// const car1 = new Car(2020);
// const car2 = new Car(2021, "Honda", "Civic");

// console.log(car1.getCarInfo());
// console.log(car2.getCarInfo());

// 21. Account klassi bilan ishlashda deposit metodida balansni qo‘shish va chiqarish amallarini amalga oshirish.

// class Account {
//   constructor(owner, balance = 0) {
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(`Deposit successful! New balance: ${this.balance}`);
//     } else {
//       console.log("Deposit amount must be positive");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance -= amount;
//       console.log(`Withdrawal successful! New balance: ${this.balance}`);
//     } else {
//       console.log("Invalid withdrawal amount");
//     }
//   }

//   getBalance() {
//     console.log(`Current balance: ${this.balance}`);
//   }
// }

// const myAccount = new Account("Omadbek", 1000);

// myAccount.getBalance(); // Current balance: 1000
// myAccount.deposit(500); // Deposit successful! New balance: 1500
// myAccount.withdraw(300); // Withdrawal successful! New balance: 1200
// myAccount.withdraw(2000); // Invalid withdrawal amount

// 22. Meros olish orqali bir sinfdan ikkinchi sinfga ma'lumot o‘tkazishni ko‘rsating.

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  borrow(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Mero olindi! Yangi balans: ${this.balance}`);
    } else {
      console.log("Miqdor musbat bo'lishi kerak");
    }
  }

  getBalance() {
    console.log(`Joriy balans: ${this.balance}`);
  }
}

const myAccount = new BankAccount("Omadbek", 1000);
myAccount.borrow(500); // Mero olindi! Yangi balans: 1500
myAccount.getBalance(); // Joriy balans: 1500

// 25. Foydalanuvchiga yangi yosh berish uchun set metodini qo'llang va unga cheklov qo'ying (faqat raqamlar).

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
      console.log(`Yangi yosh: ${this._age}`);
    } else {
      console.log("Yosh faqat musbat raqam bo'lishi kerak");
    }
  }
}

const user = new User("Omadbek", 17);
console.log(user.age); // 17

user.age = 18; // Yangi yosh: 18
user.age = -5; // Yosh faqat musbat raqam bo'lishi kerak
user.age = "18"; // Yosh faqat musbat raqam bo'lishi kerak

