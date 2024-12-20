import mongoose from "mongoose";
import { Models } from "sc-instant-win-base";

export default function (gameConfigName) {
    return mongoose.model(`${gameConfigName}_freespin`, Models.FreeSpinsSchema);
}
