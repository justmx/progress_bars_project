import { put, select, call } from 'redux-saga/effects';
import StartupActions from '../redux/StartupRedux';

// process STARTUP actions
export function * startup (api, action) {
//  console.log('Start UP Action!');
  const respons =  yield call(api.getBars);

  if (respons.ok) {
    yield put(StartupActions.startupSuccess(respons.data));
  } else {
    yield put(StartupActions.startupFailure());
  }
}
