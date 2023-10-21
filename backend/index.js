import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import chatRoute from "./routes/chatRoute.js"

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/v1", chatRoute)

app.listen(5001, function () {
    console.log('listening on 5001')
})

app.get('/', (req, res) => {
    res.send('api working')
})