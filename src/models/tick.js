import {Toast,Modal} from 'antd-mobile';
const alert = Modal.alert;

export default {

  namespace: 'tick',

  state: {
    list: [],
  },

  subscriptions: {
    setup({dispatch, history}) {

    },
  },

  effects: {
    *retry(){

    },
  },
  reducers: {
    complete(state, action){
      let result = '';

      action.payload.map(item=>{
        result = result + `${item}\n`
      });
      alert('返回结果',result);
      return state
    },
    packet(state, action){
      Toast.info(`retry任务${action.payload.id} step:${action.payload.step}`, 1);
      return state
    },
  },
}
