const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection.js");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const userssRouter = require("./routes/usersRouter");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/owners", ownersRouter);
app.use("/users", userssRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server has Started");
});
