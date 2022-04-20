import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI = process.env.URI;
export const PORT = process.env.PORT || 4000;