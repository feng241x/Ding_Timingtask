const fs = require('fs');
const path = require('path');

// 生成write Stream
const createWriteStream = (failName) => {
	const fullFileName = path.join(__dirname, '../logs', failName)
	const writeStream = fs.createWriteStream(fullFileName, {
		flags: 'a'
	})
	return writeStream
}

// 写请求日志
const postWriteStream = createWriteStream('post.log');
const writelog = (log) => {
	postWriteStream.write(log);
}

module.exports = {
    writelog
}