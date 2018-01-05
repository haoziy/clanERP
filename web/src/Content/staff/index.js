/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table,Button,Modal,Input,Alert,message} from 'antd'
import React, {Component} from 'react'
import {StaffHandler} from '../../HttpRequest/StaffHandler'

import  {valiedString,checkPhone} from '../../utils'

export  default class StaffViewController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            columns: [{
                title: '姓名',
                dataIndex: 'staffName',
                key: 'staffName',
            }, {
                title: '电话',
                dataIndex: 'staffTelephone',
                key: 'staffTelephone',
            }],
            staffPhone:null,
            staffName:null,
        }
    }
    render() {
        return ( 
                <div style={{margin:10}}>
                <div style={{flexDirection:'row',justifyContent:'space-between',display:'flex'}}>
                    <h3>员工管理</h3>
                    <Button type="primary" onClick={()=>this.setState({visible:true})}>添加</Button>
                </div>
                <Table dataSource={this.props.staff?this.props.staff:[]} columns={this.state.columns}/>
                {this.model()}
                </div>
            )
    }
    componentDidMount()
    {
    }
    loadData()
    {
    }
    okClicked()
    {
        if(valiedString(this.state.staffName,20) && checkPhone(this.state.staffPhone))
        {
            StaffHandler.addStaff({name:this.state.staffName,telephone:this.state.staffPhone},this.delegate.bind(this),()=>message.error('操作失败'))
            this.setState({visible:false})
        }else{
            message.warning('请输入正确的姓名及电话',1);
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
                    title="员工管理"
                    visible={this.state.visible}
                    onOk={this.okClicked.bind(this)}
                    onCancel={()=>this.setState({visible:false})}
                >
                    <h5><span>员工姓名</span><span style={{color:'#f00',fontSize:'14px'}}>&nbsp;*</span></h5>
                    <Input placeholder="员工姓名" style={{marginBottom:5}} onInput={(e)=>this.setState({staffName:e.target.value})}/>
                    <h5><span>员工电话</span><span style={{color:'#f00',fontSize:'14px'}}>&nbsp;*</span></h5>
                    <Input placeholder="员工电话" style={{marginBottom:5}} onInput={(e)=>this.setState({staffPhone:e.target.value})} regex={this.props.regex} />
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

