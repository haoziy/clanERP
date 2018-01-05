/**
 * Created by shenqiao on 2017/12/23.
 */

import {Table,Button,Modal,Input,Select,message} from 'antd'
import React, {Component} from 'react'
import {CustomerHandler} from '../../HttpRequest/CustomerHandler'
import moment from 'moment'

export  default class StatisticsViewController extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div style={{margin:10}}>
                <div style={{flexDirection:'row',display:'flex',flex:1,borderBottomWidth:2,borderColor:'#ddd'}}>
                    <h3>成交详细</h3>
                </div>
                <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
                    <Button type="primary" onClick={()=>this.setState({visible:true})}
                            style={{marginRight:10}}>全部</Button>
                    <div style={{margin:5}}>
                        <h5>按员工统计</h5>
                        <div>
                            <Select style={{ width: 120 }} onChange={(v)=>{this.setState({staff:v})}}>
                                {
                                    this.props.staff.map((v, i)=> {
                                        return (
                                            <Option key={i} value={v}>{v.staffName}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{margin:5}}>
                        <h5>按渠道统计</h5>
                        <div>
                            <Select style={{ width: 120 }} onChange={(v)=>{this.setState({channel:v})}}>
                                {
                                    this.props.channel.map((v, j)=> {
                                        return (
                                            <Option key={j} value={v}>{v.channelName}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div style={{margin:5}}>
                        <h5>按时段统计</h5>
                        <div>
                            <Select style={{ width: 120 }} onChange={(v)=>{this.setState({segment:v})}}>
                                {
                                    this.props.segment.map((v, i)=> {
                                        return (
                                            <Option key={i} value={v}>{v.segmentName}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </div>
                    </div>


                </div>
                <Table dataSource={this.props.customer} columns={this.state.columns} style={{marginRight:0}}/>
            </div>

        )
    }

    componentDidMount() {
    }
}