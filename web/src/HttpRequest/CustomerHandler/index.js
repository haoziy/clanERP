/**
 * Created by shenqiao on 2017/12/24.
 */

import {BaseHandler,API_MAP} from '../index'

export const CustomerHandler =
{
    /**
     * 获取所有用户
     * @param success
     * @param failed
     */
    getAllCustomer:(success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.getAllCustomer),
            {},
            (successData)=>{
                let data = successData.data;
                success(data&&data.data?data.data:[])
            },
            (failedData)=>{

            }
        )
    },
    /**
     * 添加用户
     * @param param
     * @param success
     * @param failed
     */
    addCustomer:(param,success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.addCustomer),
            param,
            (successData)=>{
                let data = successData.data;
                if(data.status==0)
                {
                    success(data)
                }else {
                    failed(successData);
                }
            },
            (failedData)=>{
                failed(successData);
            }
        )
    },
    /**
     * 成交用户
     * @param param
     * @param success
     * @param failed
     */
    updateCustomer:(param,success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.updateCustomerStatus),
            param,
            (successData)=>{
                let data = successData.data;
                if(data.status==0)
                {
                    console.log(successData+'老米老米')
                    success(data)
                }else {
                    failed(successData);
                }
            },
            (failedData)=>{
                failed(successData);
            }
        )
    },
    checkPhoneExist:(param,success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.checkCustomerPhone),
            param,
            (successData)=>{
                let data = successData.data;
                if(data.status==0)
                {
                    success(data)
                }else {
                    failed(successData);
                }
            },
            (failedData)=>{
                failed(successData);
            }
        )
    }
}