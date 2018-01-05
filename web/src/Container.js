/**
 * Created by shenqiao on 2017/12/23.
 */
/**
 * Created by shenqiao on 2017/12/20.
 */

import {Menu} from 'antd'
import React, {Component} from 'react'
import Top from './Top'
import Buttom from './Bottom'
import Channel from './Content/channel'
import { Layout ,Breadcrumb} from 'antd';
import { Button } from 'antd';
import CustomerViewController from './Content/customer'
import ChannelViewController from './Content/channel'
import SegmentViewController from './Content/segment'
import StaffViewController from './Content/staff'
import StatisticsViewController from './Content/statistics'
import {CustomerHandler} from './HttpRequest/CustomerHandler'
import {StaffHandler} from './HttpRequest/StaffHandler'
import {ChannelHandler} from './HttpRequest/ChannelHandler'
import {SegmentHandler} from './HttpRequest/SegmentHandler'
const menu = [
    '客户管理',
    '时段管理',
    '渠道管理',
    '员工管理',
    '目标达成',
]

export default class Container extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 1,//单页应用;表示当前展示是那一页的内容
            customer:[],
            staff:[],
            channel:[],
            segment:[],
        }
    }
    render() {
        console.log(this.state.currentIndex);
        return (
            <div style={{flex:1,display:'flex',flexDirection:'column',alignContent:'space-between',minHeight:'100%'}}>
                <Top name="老米"/>
                <div style={{flex:1,boxFlex:1,flexDirection:'row',display:'-webkit-flex',diaplsy:'flex',alignItems:"stretch"}}>
                    <div style={{alignItems:"stretch",backgroundColor:'#001529',color:'#fff!important'}}>
                        {this.menuPart()}
                    </div>
                    <div style={{flex:1,alignContent:'flex-end',alignItems:"stretch"}}>
                         {this.content(this.state.currentIndex)}
                     </div>
                 </div>
                <Buttom style={{alignSelf:'flex-end',display:'flex'}}/>
            </div>
        )
    }
    menuPart() {

        return (
            <Menu defaultSelectedKeys = {['1']} style={{width:150}} theme='dark' onClick={(item)=>this.setState({currentIndex:item.key})}>
                {
                    menu.map((x,i)=>{
                        return (<Menu.Item key={i+1}>{x}</Menu.Item>)
                    })
                }
            </Menu>
        )
    }
    componentDidMount()
    {
        this.loadData();
    }
    loadData()
    {
        this.loadCustomer();
        this.loadChannel();
        this.loadSegment();
        this.loadStaff();
    }
    loadStaff()
    {
        StaffHandler.getAllStaff((data)=>{
            this.setState({
                staff:data
            })
        },(faile)=>{

        })
    }
    loadSegment()
    {
        SegmentHandler.getAllSegment((data)=>{
            console.log(data)
            this.setState({
                segment:data
            })
        },(faile)=>{

        })
    }
    loadChannel()
    {
        ChannelHandler.getAllChannel((data)=>{
            this.setState({
                channel:data
            })
        },(faile)=>{

        })
    }
    loadCustomer()
    {
        CustomerHandler.getAllCustomer((data)=>{
            this.setState({
                customer:data
            })
        },(faile)=>{

        })
    }
    content(index) {
        switch (parseInt(index)) {
            case 1:
                return (<div>
                    <CustomerViewController
                        customer={this.state.customer?this.state.customer:[]}
                        staff={this.state.staff?this.state.staff:[]}
                        channel={this.state.channel?this.state.channel:[]}
                        segment={this.state.segment?this.state.segment:[]}
                        delegate={()=>this.loadCustomer()}
                    />
                </div>)
                break;
            case 2:
                return (<div>
                    <SegmentViewController segment={this.state.segment} delegate={()=>this.loadSegment()} />
                </div>)
                break;
            case 3:
                return (<div>
                    <ChannelViewController delegate={()=>this.loadChannel()} channel={this.state.channel}/>
                </div>)
                break;
            case 4:
                return (<StaffViewController delegate={()=>this.loadStaff()} staff={this.state.staff}/>)
                break;
            case 5:
                return (<StatisticsViewController delegate={()=>this.loadStaff()}
                                                  staff={this.state.staff?this.state.staff:[]}
                                                  channel={this.state.channel?this.state.channel:[]}
                                                  segment={this.state.segment?this.state.segment:[]}/>)
                break;

            default:
                return null
        }
    }
}