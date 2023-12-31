import { call, put } from "redux-saga/effects";
import {
  DELETE_PRODUCET_ERROR,
  DELETE_PRODUCET_SUCCESS,
  GET_PRODUCET_ERROR,
  GET_PRODUCET_SUCCESS,
  POST_PRODUCET_ERROR,
  POST_PRODUCET_SUCCESS,
  UPDATE_PRODUCET_ERROR,
  UPDATE_PRODUCET_SUCCESS,
} from "../../Producet/Action/Action";
import { deleteProducet, getProducet, postProducet, updateProducet } from "../../Producet/Api/Api";

export function* manageProducet(action) {
  try {
    const res = yield call(getProducet, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: GET_PRODUCET_SUCCESS, data });
    } else {
      yield put({ type: GET_PRODUCET_ERROR, data });
    }
  } catch(e){
    yield put({ type: GET_PRODUCET_ERROR,e});
  }
}

export function* managepostProducet(action) {
  try {
    const res = yield call(postProducet, action);
    const data = res.data;
    const status = res.status;
    if (status === 201) {
      yield put({ type: POST_PRODUCET_SUCCESS, data });
    } else {
      yield put({ type: POST_PRODUCET_ERROR, data });
    }
  } catch(e){
    yield put({ type: POST_PRODUCET_ERROR,e});
  }
}

export function* managedeleteProducet(action) {
  try {
    const res = yield call(deleteProducet, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: DELETE_PRODUCET_SUCCESS, data });
    } else {
      yield put({ type: DELETE_PRODUCET_ERROR, data });
    }
  } catch(e){
    yield put({ type: DELETE_PRODUCET_ERROR,e});
  }
}


export function* manageupdateProducet(action) {
  try {
    const res = yield call(updateProducet, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status ===201) {
      yield put({ type: UPDATE_PRODUCET_SUCCESS, data });
    } else {
      yield put({ type: UPDATE_PRODUCET_ERROR, data });
    }
  } catch(e){
    yield put({ type: UPDATE_PRODUCET_ERROR,e});
  }
}