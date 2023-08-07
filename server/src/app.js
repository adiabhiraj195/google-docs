import express from "express";
import cors from "cors";

import router from "./routers/index.router.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));

app.use(router);


export default app;