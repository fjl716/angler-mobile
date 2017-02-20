import {Toast,Modal} from 'antd-mobile';
const alert = Modal.alert;

export default {

  namespace: 'retry',

  state: {
    list: [],
  },

  subscriptions: {
    setup({dispatch, history}) {

    },
  },

  effects: {

  },
  reducers: {
    packet(state, action){
      Toast.info('一个retry任务', 1);
      return state
    },

  },
}
