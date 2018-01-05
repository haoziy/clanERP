
/**
 * Created by shenqiao on 2017/12/26.
 */
import {BaseHandler,API_MAP} from '../index'

export const StaffHandler =
{
    getAllStaff:(success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.getAllStaff),
            {},
            (successData)=>{
                let data = successData.data;
                success(data&&data.data?data.data:[])
            },
            (failedData)=>{
                success([])
            }
        )
    },
    addStaff:(param,success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.addStaff),
            param,
            (successData)=>{
                success(successData)
            },
            (failed)=>{
                success()
            }
        )
    }

}