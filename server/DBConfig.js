/**
 * Created by shenqiao on 2017/12/19.
 */



const mysql = require("mysql");
/**
 * 这是我自己的配置;其他的配置你需要自己修改
 * @type {Pool}
 */
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mi168888',
    //password:'1234',
    port: '3306',
    database: 'MDDB'
})

var db = {};
db.con = function (callback) {   //callback是回调函数，连接建立后的connection作为其参数
    pool.getConnection(function (err, connection) {
        console.log("connect start...")
        if (err) {      //对异常进行处理
            throw err;  //抛出异常
        } else {
            callback(connection);   //如果正常的话，执行回调函数（即请求）
        }
        connection.release();   //释放连接
        console.log("connect end...")
    })
}
module.exports = db;