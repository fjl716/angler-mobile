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
      state.list.push(action.payload);
      return {...state}
    },
    fetch(state, action) {
      return {...state, ...action.payload};
    },
  },
}
