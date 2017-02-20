import { Modal} from 'antd-mobile';
const alert = Modal.alert;

export default {

  namespace: 'region',

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
    load(state, action){
      alert(`get成功`,`${action.payload._id}`);
      return {...state}
    },
    loadsimple(state, action){
      alert(`get simple 成功`,`${action.payload._id}`);
      return {...state}
    },
    loadproperty(state, action){
      alert(`get property 成功`,`${action.payload._id}`);
      return {...state}
    },
    add(state, action){
      alert(`添加成功`,`${action.payload._id}`);
      return {...state}
    },
    remove(state, action){
      alert(`删除成功`,`${action.payload._id}`);
      return {...state}
    },
    change(state, action){
      alert(`更新成功`,`${action.payload._id}`);
      return {...state}
    },

  },
}
