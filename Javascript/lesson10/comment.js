const list = document.querySelector(".list");

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => {
    list.innerHTML = json
      .map((item) => {
        return `
        <div id="SmallList">
        <h1>User email: ${item.email}</h1>
        <p>Comment: ${item.body}</p>
        <
      </div>
      `;
      })
      .join("");
  })
  .catch((error) => {
    console.error("Failed to fetch data:", error);
    list.innerHTML = "<p>Ma'lumotlarni yuklashda xatolik yuz berdi.</p>";
  });
