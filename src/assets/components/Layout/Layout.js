import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary'
import Dashboard from '../Dashboard/Dashboard'
import Sidebar from '../Sidebar/Sidebar'

export default class Layout extends Component {


    render() {
        return (
            <Aux className = "container row justify-content-between m-auto pt-5">
          
            <Sidebar />
            <Dashboard/>
            
            </Aux>
        )
    }
}

