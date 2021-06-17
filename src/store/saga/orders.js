import { call, put, takeLatest} from "redux-saga/effects";
import {GET_ORDERS_REQUEST} from '../types/orderInfo';
import * as ACTIONS from '../action'
import * as API from "../../assets/axios/api"

export function* getOrderRequest({payload}){
    try{
        const response = yield call(API.getOrders, payload);
        console.log('saga',response);
        yield put(ACTIONS.orderReceive(response.data))
    } catch(err){
        console.log(err)
    }
}

export function* getOrdersSaga(){
    yield takeLatest(GET_ORDERS_REQUEST, getOrderRequest);
}