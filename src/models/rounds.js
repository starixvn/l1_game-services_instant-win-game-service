import mongoose from "mongoose";
import { Models } from "sc-instant-win-base";

const roundSchema = Models.RoundsSchema;

export default function (gameConfigName) {
    return mongoose.model(`${gameConfigName}_round`, roundSchema);
}