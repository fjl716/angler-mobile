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

  },
  reducers: {
    load(state, action){
      alert(`region get成功`,`${action.payload._id}`);
      return {...state}
    },
    loadsimple(state, action){
      alert(`region get simple 成功`,`${action.payload._id}`);
      return {...state}
    },
    loadproperty(state, action){
      alert(`region get property 成功`,`${action.payload._id}`);
      return {...state}
    },
    add(state, action){
      alert(`region 添加成功`,`${action.payload._id}`);
      return {...state}
    },
    remove(state, action){
      alert(`region 删除成功`,`${action.payload._id}`);
      return {...state}
    },
    change(state, action){
      alert(`region 更新成功`,`${action.payload._id}`);
      return {...state}
    },

  },
}
