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
    load(state, action){
      alert(`user get成功`,`${action.payload._id}`);
      return {...state}
    },
    loadsimple(state, action){
      alert(`user get simple 成功`,`${action.payload._id}`);
      return {...state}
    },
    loadproperty(state, action){
      alert(`user get property 成功`,`${action.payload._id}`);
      return {...state}
    },
    add(state, action){
      alert(`user 添加成功`,`${action.payload._id}`);
      return {...state}
    },
    remove(state, action){
      alert(`user 删除成功`,`${action.payload._id}`);
      return {...state}
    },
    change(state, action){
      alert(`user 更新成功`,`${action.payload._id}`);
      return {...state}
    },

  },
}
