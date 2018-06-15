import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../constants/apiConstants'
import {  receiveProducts } from "../actions/apiActions";
import { getProductsFromAPI } from '../api/getProducts'

function* getApiData(action) {
  try {
    const productsData = yield call(getProductsFromAPI);
    yield put(receiveProducts(productsData));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
