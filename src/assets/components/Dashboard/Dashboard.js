import React, {useEffect, useMemo, useState} from 'react'
import Aux from '../../../hoc/Auxiliary'
import { connect } from 'react-redux'
import { orderRequest } from '../../../store/action';
import * as types from '../../../store/types/orderInfo';
import Table from './Table/Table'
import styles from './dashboard.module.css'
import { format } from 'date-fns'
import FilterOption from './FilterOption/FilterOption'

function Dashboard ( props ) {
    useEffect(() => {
            props.onFetchProducts()
    }, [])

const [toggled, setToggled] = useState(false)
const columns = useMemo(() => [
    {
      Header: "ID number",
      accessor:"id"
      
    },
    {
      Header: "Name",
      accessor:"customer.lname"
     
    },
    {
      Header: "Status",
     accessor:"status"
    },
    {
      Header: "Supplier",
     accessor:"supplier"
    },
       {
      Header: "Date",
      accessor:"created_at",
     Cell:({ value }) => { return format(new Date(value), 'MMM dd hh:mm yy')}
    },
       {
      Header: "Total",
      accessor:"total"
    },
  ]);
  


    return (
        <Aux className="container col-md-9" >
        <input type="text" 
        id="myInput"
         onKeyUp={e => props.searchName(e.target.value)}
          placeholder="Search for names.."
           title="Type in a name"
           className={styles.inputSearch}/>
           <FilterOption/>
       <button className = {styles.btn} onClick ={props.toggleSorting}>
       Sort By
        <span className={styles.status}>status</span>
        </button>
         <Table/>
         {/* Pagination */}
         <nav aria-label="Page navigation example justify-content-center">
  <ul class="pagination">
    <li class="page-item" onClick={props.baseHandler}><a class="page-link" href="#">Previous</a></li>
    
    <li class="page-item" onClick = {props.nextHandler}><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
        </Aux>
    )
}


const mapStateToProps = state => {
    return {

        orders: state.orderRedeucer.data,
        
    }
};

const mapDispatchToProps = (dispatch)=>({
     onFetchProducts:()=> dispatch(orderRequest()),
     toggleSorting:() => dispatch ({type:types.SORT_STATUS}),
     searchName:(val) => dispatch({type:types.SEARCH_NAME, searchItem:val}),
     nextHandler:() => dispatch ({type:types.UPDATE_TABLE}),
     baseHandler:() => dispatch({type:types.FIRST_PAGE})
     
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

    

    
      
        
      
    
  

