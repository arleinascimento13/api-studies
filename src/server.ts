import express from "express";
import { routes } from "./routes/index";

const app = express();

app.listen(3333, () => console.log("Server is running in port 3333 🚀"))

app.use(express.json())

app.use(routes)

