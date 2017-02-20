import { Modal} from 'antd-mobile';
const alert = Modal.alert;

export default {

  namespace: 'user',

  state: {
    list: [],
  },

  subscriptions: {
    setup({dispatch, history}) {

    },
  },

  effects: {
    *fetchRemote({payload}, {call, put}) {
    },
  },
  reducers: {
    add(state, action){
      alert(`添加成功`,`${action.payload._id}`);
      return {...state}
    },
    remove(state, action){
      alert(`删除成功`,`${action.payload._id}`);
      return {...state}
    },

  },
}
