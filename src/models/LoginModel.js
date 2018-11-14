// import * as service from '../services/index';
import request from '../services/request';
// import getTest from '../services/module/mall';

export const API_ROOT = 'https://useapptest.rrs.com/api/v1';

export default {
  namespace: 'loginModel',
  state: {
    list: [1, 2],
    type: 'LOGIN',
    user: 'userTest',
    token: '',
  },
  effects: {
    * queryInitCards(data, sagaEffects) {
      console.log('effects mobile:', data.payload);
      const { call, put } = sagaEffects;

      // const endPointURI = API_ROOT + '/login/verifycode/' + data.payload;
      // const option ={
      //   method: "post"
      // }
      let url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
      const puzzle = request(url);
      // const puzzle = yield call(getTest, 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke');
      yield put({ type: 'getSmsCode', payload: puzzle });

    },
  },
  reducers: {
    getSmsCode(state, { payload: mobile }) {
      const returnData = [1, 2, 3];
      return {
        ...state,
        list: returnData,
      };
    },
  },
};
