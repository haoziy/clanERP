/**
 * Created by shenqiao on 2017/12/20.
 */


import React, {Component} from 'react'
export default class App extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return (
            <h1>{'Hello, world!'+this.props.name+'!!hhhh'}</h1>
        )
    }
}