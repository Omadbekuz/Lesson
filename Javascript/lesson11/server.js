const { createServer } = require("http");
const PORT = 8080;

// Serverda yuboriladigan ma'lumotlar
const sinfdoshlari = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 23 },
    { name: "Dilnoza", age: 24 },
    { name: "Zilola", age: 22 },
    { name: "Sunnat", age: 21 },
    { name: "Shohruh", age: 20 },
    { name: "Shahzod", age: 19 },
    { name: "Javohir", age: 18 },
    { name: "Sardor", age: 17 },
    { name: "Shaxzod", age: 16 },

];

const server = createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // CORS muammosini hal qiladi
    });
    res.end(JSON.stringify(sinfdoshlari));
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
