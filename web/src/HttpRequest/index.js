/**
 * Created by shenqiao on 2017/12/23.
 */
const axios = require('axios');
//axios.defaults.headers.post['Access-Control-Allow-Origin']='http://localhost:8080';
const API_MAP = {
    //用户相关
    addCustomer: '/customer/addCustomer',//添加用户
    editCustomer: '/customer/editCustomer',//编辑用户
    updateCustomerStatus: '/customer/updateCustomerStatus',//更新用户状态
    deleteCustomer: '/customer/deleteCustomer',//删除用户
    getAllCustomer: '/customer/getAllCustomer',//获取所有用户
    checkCustomerPhone: '/customer/checkPhone',//验证号码是否已经存在

    //渠道相关
    addChannel: '/channel/addChannel',//添加渠道
    deleteChannel: '/channel/deleteChannel',//删除渠道
    editChannel: '/channel/editChannel',//修改渠道
    getAllChannel: '/channel/getAllChannel',//获取所有渠道

    //员工相关
    addStaff: '/staff/addStaff',//添加员工
    deleteStaff: '/staff/deleteStaff',//删除员工
    editStaff: '/staff/editStaff',//添加员工
    getAllStaff: '/staff/getAllStaff',//获取所有员工信息

    addTimeSegment: '/segment/addSegment',//添加时段
    getAllSegment: '/segment/getAllSegment',//获取时段
}
const BaseHandler = {
    baseURL:'http://localhost:9527',
    urlWithApi:(api)=>{
        return this.baseURL+api;
    }, //默认URL
    customUrlAndApi:(url,api)=>{
        return url+api;
    },
    postHttpRequest:(url,params,success,fail)=>{
        console.log(url);
        axios.post(url,params).then((response)=>{
                console.log(response);
                success(response);
            })
            .catch((error)=> {
                fail(error)
                console.log(error);
            });
    },
    getHttpReauest:(url,params,success,fail)=>{
        axios.get(url,params).then((response)=>{
                success(response);
                console.log(response);
            })
            .catch((error)=> {
                fail(error)
                console.log(error);
            });
    },
}



module.exports = {BaseHandler,API_MAP}