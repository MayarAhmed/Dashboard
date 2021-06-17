import { axiosInstance } from './axiosInstance';

export const getOrders = async() => {
    return await axiosInstance.get('/orders')
}
