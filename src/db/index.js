import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import "colors";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`,
        );
        console.log(
            `\n MONGODB Connected !! DB HOST : ${connection.connection.host}`
                .blue,
        );
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR : ".red, error);
        process.exit(1);
    }
};

export default connectDB;
