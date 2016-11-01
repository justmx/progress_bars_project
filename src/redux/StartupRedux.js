import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupSuccess: ['barInfo'],
  startupFailure: null
});

export const StartupTypes = Types;
export default Creators;

export const DEFAULT_STATE = {
  barInfo:  {
    buttons: [
      10,
      38,
      -13,
      -18
    ],
    bars: [
        62,
        45,
        62
    ],
    limit: 230
  }
};

export const INITIAL_STATE = Immutable({
  barInfo: null
});

export const request = state => INITIAL_STATE;

export const success = (state, { barInfo }) =>
  state.merge({ barInfo });


export const failure = state => DEFAULT_STATE;
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: request,
  [Types.STARTUP_SUCCESS]: success,
  [Types.STARTUP_FAILURE]: failure
});
