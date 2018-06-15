import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../constants/apiConstants'

export const requestProducts = () =>({ type: REQUEST_API_DATA });
export const receiveProducts = productsData =>({ type: RECEIVE_API_DATA,productsData });
