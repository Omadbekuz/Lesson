// 1. Asinxron funktsiyalarni Promise.all yordamida birlashtirib, ularning natijalarini ekranga chiqaruvchi kod yozing.
// 2. Promise.all orqali uchta asinxron funktsiyaning natijasini bir vaqtda kuting.
// 3. Asinxron setTimeout yordamida qaytarilgan Promise`ni `async/await bilan boshqarish dasturini yozing.

// async function FetchData1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Natija1");
//     }, 1000);
//   });
// }

// async function FetchData2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Natija2");
//     }, 2000);
//   });
// }

// async function FetchData3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Natija3");
//     }, 3000);
//   });
// }

// async function FetchAllData() {
//   try {
//     const result = await Promise.all([
//       FetchData1(),
//       FetchData2(),
//       FetchData3(),
//     ]);
//     console.log("Barcha Natijalar:", result);
//   } catch (error) {
//     console.error("Xatolik yuz berdi:", error);
//   }
// }
// FetchAllData();

// 4. Spread operator yordamida ikki massivni birlashtiruvchi kod yozing.

// const data1 = [1, 2, 3, 4, 5];
// const data2 = [6, 7, 8, 9, 0];
// const allData = console.log([...data1, ...data2]);

// 5. Obyektlarni spread operator yordamida birlashtiruvchi dastur yozing.

// const data1 = { a: 1, b: 2, c: 3 };
// const data2 = { d: 4, e: 5, f: 6 };
// const dataAll = { ...data1, ...data2 };
// console.log(dataAll);

// 6. Default parametrlar yordamida qiymatlarni to‘ldirish uchun funksiyani yozing.

// const sum = (a = 0, b = 0) => {
//   console.log(a + b);
// };
// sum();

// 7. Template literals yordamida ism va familiyani birlashtirib ekranga chiqaruvchi kod yozing.
// const fname = "Omadbek";
// const lname = "Uarboyev";
// const fullName = `${fname} ${lname}`;
// console.log(fullName);

// 8. Destructuring yordamida obyektning qiymatlarini o‘zgartirish va konsolga chiqarish kodini yozing.

const user = { price: 100, quantity: 2 };
const { price, quantity } = user;
console.log(user);


// 9. Massivdan destructuring orqali faqat kerakli elementlarni ajratib olish dasturini yozing.
// 10. Promise.all yordamida bir nechta asinxron so‘rovni bir vaqtda yuboring.
// 11. Default parametrlar yordamida funktsiyani chaqirganda kiritilmagan qiymatni qanday to‘ldirishni ko‘rsating.
// 12. Spread operator yordamida massivdagi raqamlarni birlashtirib, yagona massivga aylantiring.
// 13. Template literals yordamida matnni bir nechta satrda chiqarish kodini yozing.
// 14. Destructuring yordamida massiv elementlarini bir nechta o‘zgaruvchilarga ajrating.
// 15. Obyektdan kerakli xususiyatlarni destructuring orqali olish uchun kod yozing.
// 16. async/await yordamida `Promise`ni boshqarish va xatolarni ushlab qolish misolini yozing.
// 17. Spread operator yordamida obyektning ba'zi xususiyatlarini yangilash dasturini yozing.
// 18. Default parametrlar bilan funksiyani chaqirganingizda kiritilgan va kiritilmagan qiymatlar bilan ishlashni ko‘rsating.
// 19. Template literals yordamida foydalanuvchi haqida malumotlarni ekranga chiqarish kodini yozing.
// 20. Destructuring yordamida massivdagi qiymatlarni yangi o‘zgaruvchilarga ajratib, qaytaring.
