const fs = require('fs');

const isHoliDay = day => {
    const promise = new Promise((resolve, reject) => {
        // 获取2019年节假日数据文件
        fs.readFile('./src/config/holiDay_2019.json', function (err, data) {
            let holiDay = data.toString();
            holiDay = JSON.parse(holiDay);
            const currDay = Object.keys(holiDay).includes(day);
            if (currDay) {
                resolve(holiDay[day] === 0 ? true : false)
            } else {
                reject('传入时间错误');
            }
        })
    });
    return promise;
}

module.exports = {
    isHoliDay
}