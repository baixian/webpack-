import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { delay } from 'redux-saga';
export default {
    namespace: 'newIndex',
    state: {
    },
    subscriptions: {
        setup({ dispatch, history }) {
        },
    },
    effects: {
        * pageInit({ payload }, { call, put, select }) {
            yield put({
                type: 'updateState',
                payload: {
                },
            });
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        updateState(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
