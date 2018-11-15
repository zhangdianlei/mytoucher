import { getSmsCode, getAuth, getToucherList } from '../services/request';
import router from 'umi/router';
import { Toast } from 'antd-mobile';

export default {
  namespace: 'loginModel',
  state: {
    list: [1, 2],
    type: 'LOGIN',
    user: 'userTest',
    token: '18253163738_48879dbec6b85a1f09c91ee1129282e5',
    toucherList: [],

  },
  effects: {
    * getSmsCode(data, sagaEffects) {
      const mobile = data.payload.mobile;
      const token = data.payload.token;
      // const { call, put } = sagaEffects;

      const result = getSmsCode(mobile, token);
      // yield put({ type: 'getSmsCode', payload: result });

    },

    * auth(data, sagaEffects) {
      const mobile = data.payload.mobile;
      const smsCode = data.payload.smsCode;
      const token = data.payload.token;
      const { call, put } = sagaEffects;

      const result = yield call(getAuth, mobile, smsCode, token);

      if (result.code === 1000) {
        yield put({ type: 'getAuthToken', payload: result.data.token });
        router.push('/toucherList');
      } else {
        Toast.fail('登录失败，请稍后重试');
      }
    },

    * getToucherList(data, sagaEffects) {
      const token = data.payload.token;
      const { call, put } = sagaEffects;
      const result = yield call(getToucherList, token);

      yield put({
        type: 'getToucherListReducer',
        payload: {
          toucherList: result.data,
        },
      });

    },

  },
  reducers: {
    getAuthToken(state, { payload: authToken }) {
      // console.log('=====authToken=====', authToken);
      return {
        ...state,
        token: authToken,
      };
    },
    getToucherListReducer(state, { payload: { toucherList } }) {
      // console.log('=====toucherList=====', toucherList);
      return {
        ...state,
        toucherList: toucherList,
      };
    },
  },
};
