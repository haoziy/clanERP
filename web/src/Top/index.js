/**
 * Created by shenqiao on 2017/12/23.
 */
import React, {Component} from 'react'
import moment from 'moment'
export default class Top extends Component {
    constructor(props) {
        super();
        this.state ={
            currentDate:new Date(),
            title:'欢迎光临 ' + props.name + '今天是 '+ moment(new Date()).format('YYYY-MM-DD')+this.weekIndexToString(moment(new Date()).format('d')),
        }
    }
    weekIndexToString(index){
        switch (parseInt(index))
        {
            case 1:
            return "星期一";
            case 2:
            return "星期二";
            case 3:
            return "星期三";
            case 4:
            return "星期四";
            case 5:
            return "星期五";
            case 6:
            return "星期六";
            case 0:
            return "星期天";
            default:
                return index;
        }
    }
    render() {
        return (
            <div style={{height:100,display: 'flex',alignItems:'center',justifyContent:'center'}}>
                <h1>{this.state.title}</h1>
            </div>
        )

    }
}