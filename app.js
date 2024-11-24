import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', async(req, res) => {
    try {
        res.send('hey')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(3000,()=>{
    console.log('Server is running on localhost:3000')
})
