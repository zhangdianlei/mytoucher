import * as service from '../services/index';

export default {
  namespace: 'loginModel',
  state: {
    list: [1, 2],
    type: 'LOGIN',
    user: 'userTest',
    token: '',
  },
  effects: {},
  reducers: {
    getSmsCode(state, { payload: mobile }) {
      console.log("model mobile:");
      console.log(mobile);
      const returnData = [1, 2, 3];
      return {
        ...state,
        list: returnData,
      };
    },
  },
};
