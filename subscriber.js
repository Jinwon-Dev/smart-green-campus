const mqtt = require('mqtt');
const Client = require('node-rest-client').Client;  //node에서 외부 api 소비
const topic_s = ["green-campus/sensors", "green-campus/time"];
const client = new Client();

const subclient = mqtt.connect('mqtt://broker.hivemq.com');
//test 토픽 구독
subclient.subscribe("smartgreen");
//구독한 메세지 전부 받음
//  {"sensor_name":"temperature",
//   "location":"N5",
//   "value":"26"}

subclient.on('message', function (topic, message) {
    //let value = message.toString('utf-8');
    let [sName, loc, tmp] = message.toString().split(",")
    let data = {
        "sensor_name": sName, "location": loc, "value": tmp,
    };
    let args = {
        sensor: {}
    };
    let sensors = JSON.stringify(data);

    console.log(sensors);
    args.sensor = sensors.toString('utf-8');
    console.log(args);
    // console.log(`key:${Object.keys(data)}, value:${Object.values(data)}`);
    // client.post("http://192.168.10.171:8080/api/sensors", args, function (data, response) {
    // js object로 파싱된 객체
    // console.log(data);
    // 응답 객체
    // console.log(response);
    // });

});
