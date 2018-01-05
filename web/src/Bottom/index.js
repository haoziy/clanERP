/**
 * Created by shenqiao on 2017/12/23.
 */


import React, {Component} from 'react'
export default class Buttom extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return (
            <div style={{height:40,display: 'flex',justifyContent:'center',alignItems:'center'}}>
                <p>{"版权©老米练手所有"}</p>
            </div>

        )
    }
}