// import React, {useMemo} from 'react'
// import {useTable, useSortBy } from 'react-table'
// import './table.css'
// import {Table} from 'react-bootstrap'

// const Tables = ({col,info}) => {
//       console.log('info',info)

//       const columns = useMemo(() => col, [])
//       const data = useMemo(() => info, [])

   

//     const { 
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//      } = useTable({
//         columns,
//         data
//     }, useSortBy)
//     return (
//         <Table {...getTableProps()}>
//             <thead>
//             {
//                 headerGroups.map(headerGroup =>(
//                     <tr {...headerGroup.getHeaderGroupProps()}>
//                     {
//                         headerGroup.headers.map(column =>(
//                         <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                         {column.render('Header')}
//                         {/* Add a sort direction indicator */}
//                         <button>
//                                 {column.isSorted
//                                 ? column.isSortedDesc
//                                     ? 'Z → A'
//                                     : 'A → Z'
//                                 :console.log('here')}
//                             </button>
//                         </th>
//                         ))
//                     }
                    
//                     </tr>
//                 ))
//             }
           
//             </thead>
//               <tbody {...getTableBodyProps()}>
//                 {rows.map((row, i) => {
//                 prepareRow(row)
//                 return (
//                     <tr {...row.getRowProps()}>
//                     {row.cells.map(cell => {
//                         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                     })}
//                     </tr>
//                 )
//                 })}
//       </tbody>
           
//         </Table>
//     )
// }

// export default Tables;

import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux'
import { orderRequest } from '../../../../store/action';
import * as types from '../../../../store/types/orderInfo';
import { format } from 'date-fns'
import './table.module.css'

 class Tables extends Component {
    render() {
        return (
            <Table>
                  <thead>
    <tr>
      <th>#</th>
      <th>ID number</th>
      <th> Name</th>
      <th>Status</th>
      <th>Supplier</th>
      <th>Date</th>
    </tr>
  </thead>
    <tbody>
    {this.props.orders.map(item => {

        return(
       <tr key={item.id}>
       <td> <input type="checkbox"/></td>
      <td>{item.id}</td>
      <td>{item.customer.fname}</td>
      <td>{item.status}</td>
      <td>{item.supplier}</td>
      <td>{format(new Date(item.created_at), 'MMM dd hh:mm yy')}</td>
    </tr>
        )
    })}
  
    
    </tbody>
            </Table>
        )
    }
}

const mapStateToProps = state => {
    return {

        orders: state.orderRedeucer.data,
        
    }
};

const mapDispatchToProps = (dispatch)=>({
     onFetchProducts:()=> dispatch(orderRequest()),
      toggleSorting:() => dispatch ({type:types.SORT_STATUS})
     
})

export default connect(mapStateToProps,mapDispatchToProps)(Tables)