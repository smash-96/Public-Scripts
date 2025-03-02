const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("message", (msg) => {
        console.log(`Received: ${msg}`);
        io.emit("message", msg); // Broadcast message to all clients
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(4000, () => console.log("Socket.IO server running on port 4000"));
