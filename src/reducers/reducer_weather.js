import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ]; //this creates a new array instead of mutating an existing array.  Don't want to manipulate state.
  }
  return state;
}
