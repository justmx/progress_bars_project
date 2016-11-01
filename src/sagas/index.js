import { takeLatest } from 'redux-saga';
import API from '../api/Api';
// import FixtureAPI from '../Services/FixtureApi'
// import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

 import { StartupTypes } from '../redux/StartupRedux';
/* ------------- Sagas ------------- */

 import { startup } from './StartupSagas';

/* ------------- API ------------- */
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(StartupTypes.STARTUP, startup, api)
  ];
}
