const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send(
      "Hello, welcome to Blog API. This API allow users to create or read articles created by others. Please go to /api/articles to get a list of published articles or checkout the README.md file in the GitHub Repository to learn more about how it works and how to run or test it. Thank you!"
    );
});

app.get("*", (req, res) => {
  return res.status(404).json({ message: "Not Found" });
});

app.listen(8000, () => {
  console.log("Hello world!");
});
