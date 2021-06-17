import * as types from '../types/orderInfo'

    const INITIAL_STATE = {

        data:[],
        order: true
       
    };

    export default (state = INITIAL_STATE, action) =>{
          switch (action.type){
        case types.GET_ORDERS_RECEIVE:
        let dataLen = state.data.length 
         const arr = [...action.payload.orders]
         const arr1 = [...action.payload.orders]

        return  {...state,
                data:arr.splice(dataLen,8),
                original:arr1.splice(0,8),
                main:action.payload.orders
                }

    case types.SORT_STATUS:
    let orderSortedArr = [...state.main]
        orderSortedArr.sort((a, b) => {
            if(state.order){
        let fa = a.status.toLowerCase(),
        fb = b.status.toLowerCase();
        if (fa < fb) {
        return -1;
                }
        if (fa > fb) {
            return 1;
                }
        return 0;

           }else{
              orderSortedArr = [...state.original]
           }
           
           })
            return{
                ...state,
                data:orderSortedArr,
                order:!state.order
            }

            case types.SEARCH_NAME:
              const orderCopiedArr = [...state.main];
              let orderSearchArr;
              if(action.searchItem.length >= 1){
              orderSearchArr = orderCopiedArr.filter(item => item.customer.fname.toLowerCase().substring(0,action.searchItem.length) == action.searchItem.toLowerCase())
             console.log('fromreduce',orderSearchArr)
               }else{
                 orderSearchArr = [...state.original]  
               }
            return{
                ...state,
                data:orderSearchArr
            }
   case types.SELECT_TOTAL:
   let dataToFilter = [...state.main];
   let filteredArr;
      if(action.filterSelection == 1){
       filteredArr = dataToFilter.filter(item => item.total > 5000)
      }else if(action.filterSelection == 2){
          filteredArr = dataToFilter.filter(item => item.total < 5000)
      }else{
         filteredArr = [...state.original]  
      }
   return{
       ...state,
       data:filteredArr
   }
  case types.UPDATE_TABLE:
            const pagArr = [...state.main]
                const secPage = pagArr.splice(state.data.length,8)
                console.log(secPage)
            return{
                ...state,
                data:secPage
            }
  case types.FIRST_PAGE:
           
            return{
                ...state,
                data:[...state.original]
            }

            default:
             return state; 

       }
    }