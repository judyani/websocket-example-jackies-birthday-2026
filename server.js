const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8802 });

wss.on("connection", (ws) => {
  console.log("A new client connected!");
  ws.on("close", () => {
    console.log("A client disconnected");
  });
});
