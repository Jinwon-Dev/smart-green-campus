const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com')

let message = {
    "sensor_name": "temperature", "location": "N13", "value": 26
}
// var message1 = {
//     "sensor_name": "solar",
//     "location": "S5",
//     "value": 100
// }
// var message2 = {
//     "sensor_name": "humidity",
//     "location": "S8",
//     "value": 80
// }
setInterval(() => {
    message.value = (Math.floor(Math.random() * 35));

    client.publish("smartgreen", JSON.stringify(message));
}, 2000);
// setInterval(
//     () => {
//         message1.value=(Math.floor(Math.random()*100));
//
//         client.publish("green-campus/sensors",JSON.stringify(message1));
//     },
//     200000
// );
// setInterval(
//     () => {
//         message2.value=(Math.floor(Math.random()*101));
//
//         client.publish("green-campus/sensors",JSON.stringify(message2));
//     },
//     200000
// );