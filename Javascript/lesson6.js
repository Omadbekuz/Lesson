//1)Asinxronlik va sinxronlik – bu jarayonlar yoki tizimlar ish tartibini belgilovchi asosiy tushunchalar bo'lib, ularning asosiy farqi vaqtni boshqarish va o'zaro ta’sir tarzida namoyon bo'ladi.

// Sinxronlik-Tartib boyicha funcsiyalarni bajaradi(ketma-ketlik boyicha)
// Asinxronlik bir vaqtda bir nechta funcsiyalarni bajarishda yordam beradi

//2)

// setTimeout(() => {
//   console.log("Habar 2soniyaga kechiktirildi");
// }, 2000);

//3)

// function calculate(a, b, callback) {
//     const result = a * b;
//     callback(result);
// }

// calculate(3, 4, (result) => {
//     console.log("Ko'paytirish natijasi:", result);
// });

//4)

// function greet(name){
//   console.log(`Salom ${name}`);
// }

// setTimeout(() => {
//     greet(`Omadbek`)
// }, 2000);

//5)

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("1. Malumotlar yakunlandi");
//     callback();
//   }, 2000);
// }

// function processData(callback) {
//   setTimeout(() => {
//     console.log("2. Malumotlar qayta ishlanmoqda");
//     callback();
//   }, 2000);
// }

// function saveData(callback) {
//   setTimeout(() => {
//     console.log("3. Malumotlar saqlandi");
//     callback();
//   }, 2000);
// }
// //Callback =  bu bir nechta ichma-ich yozilgan callback funksiyalarni ishlatish natijasida kodni o‘qish va tushunish qiyinlashadigan holat. Bu holat odatda murakkab va ketma-ket bajarilishi kerak bo‘lgan asinxron operatsiyalarni boshqarishda yuzaga keladi.

// fetchData(() => {
//   processData(() => {
//     saveData(() => {
//       console.log("4. Jarayon tugadi");
//     });
//   });
// });

//6)

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("1. Malumotlar yakunlandi");
//       resolve();
//     }, 1000);
//   });
// }

// function processData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("2. Malumotlar qayta ishlanmoqda");
//       resolve();
//     }, 1000);
//   });
// }

// function saveData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("3. Malumotlar saqlandi");
//       resolve();
//     }, 1000);
//   });
// }
// fetchData()
//   .then(processData)
//   .then(saveData)
//   .then(() => {
//     console.log("4. Jarayon tugadi ");
//   });

//7)

//Promise zanjiridagi then = funcsiyalarni ketma-ket bajarishda yordam beradi, cath esa hatolarni aniqlashda yordam beradi

//8)

// const title1 = () => console.log("Hello World");

// const title2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("World : I have boy fiend");
//       resolve();
//     }, 2000);
//   });
// };

// const title3 = () => console.log("Okey");

// (async () => {
//   title1();
//   await title2();
//   title3();
// })();

// async function run() {
//   title1();
//   await title2();
//   title3();
// }
// run();

//9)

// setInterval(() => {
//   console.log("Hello World");
// }, 3000);

//10)

// (async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log("Somethin went wrong");
//   }
// })();

//11

//Callvack hell funcksiyasidan quloyroq promise va Async/Await
//miso:

// const lesson1 = () => console.log("Lesson1");

// const lesson2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Lesson2");
//       resolve();
//     }, 2000);
//   });
// };

// const lesson3 = () => console.log("Lesson3");

// async function run() {
//   lesson1();
//   await lesson2();
//   lesson3();
// }

// run();

//12)

//ikki sonning bir biriga yi'indisini aniqlovchi funcsiya

// const calculate = (a,b) => {
//   return new Promise((resolve, reject) => {
//     if (typeof a === `number` && typeof b === `number`) {
//       resolve(a + b);
//     } else {
//       reject("Error");
//     }
//   });
// };

// calculate(10, 70)
//   .then((result) => console.log(`yigindi ${result}ga teng`))
//   .catch((error) => console.error(error));

// ikki sonning bir biriga kopaytmasini aniqlovchi funcsiya

// const calculate2 = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (typeof a === `number` && typeof b === `number`) {
//       resolve(a * b);
//     }else{
//         reject('error')
//     }
//   });
// };

// calculate2(3,4)
// .then(result => console.log(`Kopaytma ${result} ga teng`))
// .catch(error => console.error(error))

//boluvchi funcsiya promise orqali

// const calculate3 = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (typeof a === `number` && typeof b === `number`) {
//       resolve(a / b);
//     } else {
//       reject("Nimadur xato ketdi");
//     }
//   });
// };

// calculate3(18, 6)
//   .then((result) => console.log(`Bolinma ${result} ga teng`))
//   .catch((error) => console.error(error));

//13)

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     console.log(`FetchData:`, data);
//   } catch (error) {
//     console.error(`Error:`, error.massage);
//   }
// }
// fetchData();
