import { Modal} from 'antd-mobile';
const alert = Modal.alert;

export default {

  namespace: 'group',

  state: {
    list: [],
  },

  subscriptions: {
    setup({dispatch, history}) {

    },
  },

  effects: {
    * add({payload}, {select, call, put}){
      console.log(payload);
      yield put();
    },
    // dispatch({type: 'group/insert',payload: {name:'test1'},isSend:true})}
  },
  reducers: {
    load(state, action){
      alert(`group get成功`,`${action.payload._id}`);
      return {...state}
    },
    loadsimple(state, action){
      alert(`group get simple 成功`,`${action.payload._id}`);
      return {...state}
    },
    loadproperty(state, action){
      alert(`group get property 成功`,`${action.payload._id}`);
      return {...state}
    },
    remove(state, action){
      alert(`group 删除成功`,`${action.payload._id}`);
      return {...state}
    },
    change(state, action){
      alert(`group 更新成功`,`${action.payload._id}`);
      return {...state}
    },

  },
}
