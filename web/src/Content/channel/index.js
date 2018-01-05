/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table,Modal,Button,Input,Alert,message} from 'antd'
import React, {Component} from 'react'
import {ChannelHandler} from '../../HttpRequest/ChannelHandler'

import  {valiedString} from '../../utils'
export  default class ChannelViewController extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            visible:false,
            columns:[
                {
                    title: '渠道名称',
                    dataIndex: 'channelName',
                    key: 'name',
                },

            ],
            channleName:null,
            isCanSubmit:false,
        }
    }
    render()
    {
        return (
        <div style={{margin:10}}>
            <div style={{flexDirection:'row',justifyContent:'space-between',display:'flex'}}>
                <h3>渠道列表</h3>
                <Button type="primary" onClick={()=>this.setState({visible:true})}>添加</Button>
            </div>
            <Table dataSource={this.props.channel?this.props.channel:[]} columns={this.state.columns}/>
            {this.model()}
        </div>
        )
    }
    componentDidMount()
    {
        this.loadData();
    }
    loadData()
    {

    }
    okClicked()
    {
        if(valiedString(this.state.channleName,20))
        {
            ChannelHandler.AddChannel({name:this.state.channleName},this.delegate.bind(this),()=>message.error('操作失败'))
            this.setState({visible:false})
        }else{
            message.warning('请输入有效的内容',1);
        }
    }
    delegate()
    {
        if(this.props.delegate)
        {
            this.props.delegate()
        }
    }
    model()
    {
        return (
            <div>
                <Modal
                    title="添加渠道 "
                    visible={this.state.visible}
                    onOk={this.okClicked.bind(this)}
                    onCancel={()=>this.setState({visible:false})}
                >
                    <h5><span>渠道名称</span><span style={{color:'#f00',fontSize:'14px'}}>&nbsp;*</span></h5>
                    <Input placeholder="渠道名称" style={{marginBottom:5}} onInput={(e)=>this.setState({channleName:e.target.value})}/>
                    {
                        !this.state.isCanSubmit&&<Alert
                            message="提示"
                            description="带'*'为必填项"
                            type="warning"
                        />
                    }
                </Modal>
            </div>
        )
    }
}
