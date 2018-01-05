/**
 * Created by shenqiao on 2017/12/25.
 */
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const root = __dirname

// 将Promise抛出为全局对象
// window.Promise = Promise

const Promise = require('babel-runtime/core-js/promise') || new Promise();
// const polyfill = require('promise-polyfill');
// import "babel-polyfill";//这里不知道该要不要


app.all('*', (req, res,next)=> {
    res.sendFile('../template.html',{root:root}).end();
})
app.listen(8080,()=>{
    console.log("开始web服务器");
})