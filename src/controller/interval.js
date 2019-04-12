const sd = require('silly-datetime');
const https = require("https");
const { writelog } = require('./logs');
const { isHoliDay } = require('./isHoliDay');
let cont = 0;

// 定时器函数
const interval = (TASK_CONF, ROBOT_CONF) => {
    // 获取配置
    const { TimeInterval, executionTime } = TASK_CONF
    setInterval( () => {
        const setTime = executionTime;
        const time = sd.format(new Date(), 'HH:mm');
        const myDate = new Date(); //获取系统当前时间
        const myDay = sd.format(new Date(), 'YYYYMMDD');
        // 工作日检测
        isHoliDay(myDay)
            .then( result => {
                if (result && time === setTime && cont < 1) {
                    const requestData = JSON.stringify(ROBOT_CONF.MessageParams);
                    const url = 'oapi.dingtalk.com';
                    const req = https.request({
                        hostname: url,
                        port: 443,
                        path: '/robot/send?access_token=' + TASK_CONF.token,
                        method: "POST",
                        json: true,
                        headers: {
                            'Content-Type' : "application/json; charset=utf-8"
                        }
                    }, function(res) {
                        writelog(`${time} -- 发送成功 -- ${myDay} -- ${myDate} \n`);
                    });
                    req.write(requestData);
                    req.on('error',function(err){
                        console.error(err);
                    });
                    req.end();
                    cont++;
                } else if (cont !== 0 && time !== setTime) {
                    cont = 0;
                }
            })
    }, TimeInterval)
}

module.exports = {
    interval
}