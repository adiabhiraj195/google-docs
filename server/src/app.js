import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routers/index.router.js";

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

app.use(router);


export default app;