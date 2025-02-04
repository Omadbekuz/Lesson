const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "example@gmail.com",
  },
  {
    id: 2,
    name: "Jeck",
    email: "jeck@gmail.com",
  },
  {
    id: 3,
    name: "Doe",
    email: "Doe@.com",
  },
];

app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  console.log(req.query);

  res.json(data);
});

app.post("/data", (req, res) => {
  console.log(req.body);
  //   const name = req.body.name;
  //   const age = req.body.age;

  const { name, age } = req.query;

  res.json({
    status: "success",
    massage: "Successfully received data",
  });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const isExisting = data.some(user => user.name === name || user.email === email);

  if (isExisting) {
    return res.status(400).json({ message: "User with this name or email already exists" });
  }

  const newUser = {
    id: data.length + 1,
    name,
    email,
  };

  data.push(newUser);

  res.status(201).json({
    status: "success",
    massage: "User added successfully",
    user: newUser,
  });
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = data.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
