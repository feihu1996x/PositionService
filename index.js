const express = require('express');
const app = express();

const mongoose = require('mongoose');
const mongoDb = 'mongodb://192.168.100.13:27017/position';
mongoose.connect(mongoDb, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB连接异常'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const position = require('./routes/position');
app.use('/position', position);

const port = 8888;
app.listen(port, () => {
    console.log('仓位记录管理服务运行中')
});
