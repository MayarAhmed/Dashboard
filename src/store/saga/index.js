import { all } from 'redux-saga/effects';

import{ getOrdersSaga } from './orders'

export function* watchSagas(){
    yield all([
        getOrdersSaga()
    ])
}