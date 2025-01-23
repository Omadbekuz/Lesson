const root = document.getElementById("root");

fetch("http://127.0.0.1:8080/")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Serverdan javob olishda xatolik yuz berdi");
        }
        return response.json();
    })
    .then((json) => {
        root.innerHTML = json
            .map((item) => {
                return `
                <div class="smalllist">
                    <h1>Ismi : ${item.name}</h1>
                    <p>Yoshi : ${item.age}</p>
                </div>
                `;
            })
            .join("");
    })
    .catch((error) => {
        console.error("Failed to fetch data:", error);
        root.innerHTML = "<p>Ma'lumotlarni yuklashda xatolik yuz berdi.</p>";
    });
