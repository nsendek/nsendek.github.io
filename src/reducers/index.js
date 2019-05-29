import {
  CHANGE_TAB,
} from '../actions';
import { combineReducers } from 'redux';
import {initialState} from './initialState';


export default (state= initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({},state, {tab : action.newTab});
    default:
      return state;
  }
};
