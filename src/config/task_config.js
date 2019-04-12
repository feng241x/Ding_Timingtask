// 定时任务设定
const TASK_CONF = {
    // 执行时间
    executionTime: '9:30',
    // 间隔执行时间
    TimeInterval: '5000',
    // 机器人token 填上您的机器人token
    token: "XXXXXXX"
}

// 自定义机器人配置
const ROBOT_CONF = {
    MessageParams: {
        // 消息类型 具体配置文档请参考 https://open-doc.dingtalk.com/microapp/serverapi2/qf2nxq
        "msgtype": "markdown",
        "markdown": {
            // 设置标题
            'title': '站会开始啦!~', 
            // 设置内容
            "text": `#### 站会开始啦!~\n\n> ![screenshot](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537419967636&di=cdc7cc1960a728db84b2817593998151&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F63%2F30%2F56d58PICEDh_1024.jpg)\n> ###### ishangsf.com 发布 [博客](http://www.ishangsf.com/)`
        },
        "at": {
            "atMobiles": [],
            "isAtAll": true
        }
    },
    
}

module.exports = { TASK_CONF, ROBOT_CONF }
