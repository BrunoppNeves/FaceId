// bibliotecas http
const mqtt = require("mqtt");
// define o broker
const host = "broker.emqx.io";
const PORT = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const OPTIONS = {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
};

const connectUrl = `mqtt://${host}:${PORT}`;
const client = mqtt.connect(connectUrl, OPTIONS);
const topic = "Bruno/Atena/MQTT";
client.on("connect", () => {
  client.subscribe(`${topic}`);
});

const abre = () => {
  client.publish(`${topic}`, "1");
};

const abre3s = () => {
  client.publish(`${topic}`, "2");
};
const fecha = () => {
  client.publish(`${topic}`, "3");
};

client.on("message", (topic, payload) => {
  console.log(`Received Message: Topic: ${topic}, Message: ${payload}`);
});

module.exports = { abre, abre3s, fecha };
