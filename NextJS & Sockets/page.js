"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://your-socket-server.com"); // Replace with actual server URL

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        socket.on("message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => socket.off("message");
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            socket.emit("message", input);
            setInput("");
        }
    };

    return (
        <div>
            <h1>Next.js + Socket.IO Chat</h1>
            <ul>
                {messages.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                ))}
            </ul>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}
