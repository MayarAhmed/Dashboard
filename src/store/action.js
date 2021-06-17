import {GET_ORDERS_REQUEST, GET_ORDERS_RECEIVE } from './types/orderInfo'

export const orderRequest = (payload) =>({
    type:GET_ORDERS_REQUEST,
    payload
})

export const orderReceive = (payload) =>({
    type:GET_ORDERS_RECEIVE,
    payload
})