import remoting from '../angler/remoting';
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
    *insert(){
      let a;
      for (let name in remoting.objectMap) {
        a = remoting.objectMap[name];
      }
      a.sum(1, 2, 3, function (result) {
        console.log(result);
      });
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
