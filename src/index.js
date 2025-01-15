import dotenv from "dotenv";
import connectDB from "./db/index.js";

// config dotenv
dotenv.config({ path: "./env" });

/*
import express from "express";

const app = express();

// DATABASE CONNECTION
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Express MongoDB Connection Error : ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT : ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("DATABASE CONNECTION ERROR : ", error);
        throw error;
    }
})();

*/

// Execute DB Connection Function
connectDB();
