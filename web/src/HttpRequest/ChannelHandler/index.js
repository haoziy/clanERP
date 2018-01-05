import {BaseHandler,API_MAP} from '../index'

export const ChannelHandler =
{
    getAllChannel:(success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.getAllChannel),
            {},
            (successData)=>{
                let data = successData.data;
                success(data&&data.data?data.data:[])
            },
            (failed)=>{
                success([])
            }
        )
    },
    AddChannel:(param,success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.addChannel),
            param,
            (successData)=>{
                success(successData)
            },
            (failed)=>{
                success()
            }
        )
    },

}