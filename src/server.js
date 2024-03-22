import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/db_config.js";
import routes from "./routes/index.js";
// connectMongoDB
dotenv.config();
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/db_asm1_cars";
connectMongoDB(dbUrl)
routes(app);
app.listen(port, () => console.log("dang chay cong:" + port))