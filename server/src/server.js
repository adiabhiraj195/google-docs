import http from "http";
import app from "./app.js";

const PORT = 8000;

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server is Live at Port: ${PORT}`)
});