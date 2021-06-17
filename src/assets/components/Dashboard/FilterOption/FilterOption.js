import React, { Component } from 'react'
import { connect } from 'react-redux'
import { orderRequest } from '../../../../store/action';
import * as types from '../../../../store/types/orderInfo';
import Aux from '../../../../hoc/Auxiliary'
import { form, select } from 'react-bootstrap'
import classes from './FilterOption.module.css'
 class FilterOption extends Component {
    render() {
        return (
            <Aux className = {classes.filter}>
            <p>Filter <span> total from </span></p>
                <select className="form-select rounded" aria-label="Default select example" onChange = {(e)=>this.props.selectHandler(e.target.value)}>
                     <option value ="0">Select</option>
                    <option value="1" >Less than 5000</option>
                    <option value="2">More than 5000</option>
                    </select>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {

        orders: state.orderRedeucer.data.orders,
        
    }
};

const mapDispatchToProps = (dispatch)=>({
     selectHandler:(val) => dispatch({type:types.SELECT_TOTAL, filterSelection:val})
})






export default connect(mapStateToProps,mapDispatchToProps)(FilterOption)

