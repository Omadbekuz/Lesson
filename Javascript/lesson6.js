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

//14)

// const data = [""];

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

//14)

// function findNumb(arr, callback) {
//   return callback(arr);
// }

// function getMaxNumb(array) {
//   return Math.max(...array);
// }

// const number = [1, 2, 3, 4, 5, 666];

// const findMaxNumb = findNumb(number, getMaxNumb);

// console.log("Massivedagi eng katta raqam:", findMaxNumb);

//15)

// const noma1 = () => console.log("Malumotlar baza jonatilmoqda");

// function noma2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Malumotlar jonatilishi uchun 5soniya kutildi");
//       resolve();
//     }, 5000);
//   });
// }

// const noma3 = () => console.log("Malomotlar yakunlandi");

// async function run() {
//   noma1();
//   await noma2();
//   noma3();
// }

// run();

//16)

// Qisqacha farq:
// Promise.all: Barcha va'dalar bajarilgandan keyin natijalarni qaytaradi. Agar birortasi xato bersa, barchasini to'xtatadi.
// Promise.race: Birinchi bajarilgan yoki xato bergan va'dani qaytaradi.

// const promise1 = new Promise((resolve) =>
//     setTimeout(() => resolve("promise1 Tugadi"), 1000)
//   );
//   const promise2 = new Promise((resolve) =>
//     setTimeout(() => resolve("promise2 Tugadi"), 2000)
//   );
//   const promise3 = new Promise((resolve) =>
//     setTimeout(() => resolve("promise3 Tugadi"), 3000)
//   );

//   Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//       console.log("Barcha va'dalar bajarildi:", result);
//     })
//     .catch((error) => {
//       console.log("Xato:", error);
//     });

//Promise.race

//   const promiseA = new Promise((resolve) =>
//     setTimeout(() => resolve("promiseA Tugadi"), 1000)
//   );
//   const promiseB = new Promise((resolve) =>
//     setTimeout(() => resolve("promiseB Tugadi"), 2000)
//   );
//   const promiseD = new Promise((resolve) =>
//     setTimeout(() => resolve("promiseD Tugadi"), 3000)
//   );

// Promise.race([promiseA, promiseB,promiseD])
// .then((result2)=>{
//     console.log("Barcha promise lar bajarildi:", result2);
// })
// .catch((error)=>{
//     console.log("xatp:", error);
// })

// 17. Async funksiyalarni ishlatishda xatolarni boshqarish usulini tushuntiring.
// try...catch yordamida asinxron funksiyalardagi xatolarni ushlab olish mumkin. Bu usul kodni o'qishni osonlashtiradi va ma'lum bir blokda yuzaga keladigan xatolarni boshqarish imkonini beradi

// 18. Promise zanjirida bir necha thenlarni ketma-ket ishlatib misol yozing.

// const proimse = new Promise((resolve, reject) => {
//   const number = 5;
//   if (number > 0) {
//     resolve(number);
//   } else {
//     reject("son musbat emas");
//   }
// });

// proimse
//   .then((number) => {
//     console.log("Boshlang'ich son", number);
//     return number * 2;
//   })
//   .then((result) => {
//     console.log("2ga kopaytirilgan son:", result);
//     return result + 10;
//   })
//   .then((finalResult) => {
//     console.log("Oziga qoshilganda", finalResult);
//   })
//   .catch((error) => {
//     console.error("Xatolik boldi", error);
//   });

// 19. API ma'lumotlarini yuklab olib, ularni foydalanuvchiga ko'rsatadigan kod yozing.

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

// 20. Callback funksiyalardan qachon foydalanish kerakligini tushuntiring.

// Asinxron vazifalarni bajarishda: Agar biror ish (masalan, ma'lumot olish yoki kutish) bajarilishi kerak bo'lsa, lekin boshqa ishlar davom etishi kerak bo'lsa, callback ishlatiladi. Masalan, API'dan ma'lumot olishda.

// 21. Promise.all yordamida bir nechta asinxron operatsiyalarni boshqaruvchi kod yozing.

// Birinchi asinxron vazifa
// const task1 = new Promise((resolve) =>
//     setTimeout(() => resolve("Vazifa 1 tugadi"), 1000)
//   );

//   // Ikkinchi asinxron vazifa
//   const task2 = new Promise((resolve) =>
//     setTimeout(() => resolve("Vazifa 2 tugadi"), 2000)
//   );

//   // Uchinchi asinxron vazifa
//   const task3 = new Promise((resolve) =>
//     setTimeout(() => resolve("Vazifa 3 tugadi"), 1500)
//   );

//   // Barcha vazifalar tugagach natijalarni olish
//   Promise.all([task1, task2, task3])
//     .then((results) => {
//       console.log("Barcha vazifalar tugadi:");
//       results.forEach(result => {
//         console.log(result); // Har bir vazifaning natijasi
//       });
//     })
//     .catch((error) => {
//       console.log("Xato:", error); // Agar biror xato bo'lsa
//     });

// 22. API dan kelgan JSON ma'lumotlarni qayta ishlash uchun kod yozing.

// async function fetchData() {
//   try {
//     // API'dan ma'lumot olish
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     // Agar API'dan xato javob kelsa, xatolikni chiqaramiz
//     if (!response.ok) {
//       throw new Error("Xato: Ma'lumot olishda muammo");
//     }

//     // JSON formatidagi ma'lumotlarni o'qish
//     const data = await response.json();

//     // Ma'lumotni qayta ishlash va konsolga chiqarish
//     data.forEach((user) => {
//       console.log(`${user.name} - ${user.email}`);
//     });
//   } catch (error) {
//     console.log("Xato:", error.message); // Xatolik bo'lsa, chiqaramiz
//   }
// }

// fetchData();

// 23. Async/Await va Promise o'rtasidagi farqni tushuntiring.

//Async/Await va Promise ikkalasi ham asinxron kodni boshqarish uchun ishlatiladi, lekin ularning yozilish uslubi va ishlash tartibi farq qiladi
// Promise — bu asinxron operatsiyaning natijasi haqida kelajakdagi qiymatni (success yoki error) ifodalaydi. U then va catch metodlari yordamida ishlaydi.
//Async/Await — bu Promise'ni yanada o'qilishi osonroq qilish uchun takomillashgan sintaksis. async funksiyasi ichida await yordamida Promise'ni kutishingiz mumkin.

// 24. Timeout orqali ma'lumotni kechiktirib chiqaradigan kod yozing.
// 25. Callback yordamida faildan ma'lumot o'qish funksiyasini yozing.
// 26. Promise yordamida foydalanuvchi ma'lumotlarini yuklash dasturini yozing.
// 27. finally bloki yordamida operatsiyalarni tugatish kodini yozing.

// try {
//   console.log("Hisoblash boshlanyapti.");
//   let result = 10 / 2; // Bo'lish operatsiyasi
//   console.log("Natija:", result);
// } catch (error) {
//   console.log("Xatolik yuz berdi:", error.message);
// } finally {
//   console.log("Operatsiya tugadi."); // Har doim bajariladi
// }

// 28. Callback Hellni Promise yordamida qanday hal qilish mumkinligini tushuntiring.
// 29. async va awaitni ishlatib, vaqtinchalik kutish funksiyasini yozing.
// 30. API dan ma'lumot yuklab, ma'lumotlar sonini aniqlovchi kod yozing.

// async function fetchcountData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error("Malumotlarni yuklashda xatolik yuz berdi");
//     }
//     const data = await response.json();
//     console.log("Malumotlar soni:", data.length);
//   } catch (error) {
//     console.log("Xatolik", error.massage);
//   }
// }
// fetchcountData();

// 31. Async/Await yordamida massivdagi elementlarni qayta ishlash kodini yozing.
// 32. fetch va Promisedan birgalikda foydalanishni tushuntiring.

// fetch va Promise haqida qisqacha:
// fetch:
// API'ga so'rov yuboradi va javobni qaytaradi.
// Bu so'rov Promise obyektini qaytaradi.
// Promise bilan ishlash:
// fetch yordamida qaytarilgan Promise ustida .then() yoki .catch() ishlatib, javobni boshqaramiz.

// 33. Xatolarni boshqarish uchun catch va finally bloklaridan foydalangan kod yozing.
// 34. Callback orqali raqamlarning o'rtacha qiymatini hisoblovchi kod yozing.

// function calculateAverage(numbers, callback) {
//   if (numbers.length === 0) {
//     callback("Massiv bo'sh!", null); // Xatolik qaytarish
//     return;
//   }

//   let sum = 0;
//   for (let num of numbers) {
//     sum += num; // Yig'indini hisoblash
//   }
//   let average = sum / numbers.length; // O'rtacha qiymatni topish

//   callback(null, average); // Xatolik yo'q, natijani qaytarish
// }

// // Funksiyani ishlatish
// calculateAverage([10, 20, 30, 40, 50], (error, result) => {
//   if (error) {
//     console.log("Xatolik:", error);
//   } else {
//     console.log("O'rtacha qiymat:", result);
//   }
// });

// 35. Promise yordamida massivdagi juft raqamlarni qaytaruvchi kod yozing.

// function getEventNumbers(numbers) {
//   return new Promise((resolve, reject) => {
//     const evenNumbers = numbers.filter((num) => num % 2 === 0);

//     if (evenNumbers.length === 0) {
//       reject("Juft Raqamlar tompilmadi");
//     } else {
//       resolve(evenNumbers);
//     }
//   });
// }

// getEventNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])
//   .then((evenNumbers) => {
//     console.log("Juft raqamlar:", evenNumbers);
//   })
//   .catch((error) => {
//     console.log("Xatolik:", error);
//   });

// 36. Async funksiyada xato yuz berganda konsolda xatoni chiqaruvchi kod yozing.

async function getData() {
  try {
    let response = await fetch("https://jsonfghplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Malumotlar yuklashda xatolik yuz berdi");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Xato:", error.massage);
  }
}

getData();

// 37. Callback yordamida massivni o'sish tartibida saralash funksiyasini yozing.
// 38. Promise'dan foydalangan holda foydalanuvchi profili ma'lumotlarini yuklovchi kod yozing.
// 39. Async/Await yordamida serverga ma'lumot yuboruvchi kod yozing.
// 40. Promise.allni API'dan bir vaqtning o'zida bir nechta so'rovlarni yuborish uchun qanday ishlatishni tushuntiring.
