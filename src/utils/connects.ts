import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger";

async function connect(){
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        logger.info("Database connected successfully!");
    } catch (error) {
        logger.error("Could not connect to database!");
        process.exit(1);
    }

}

export default connect;