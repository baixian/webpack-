import dva from 'dva';
import createLoading from 'dva-loading';
import 'antd/dist/antd.less';
import models from './models/index';

const app = dva();
app.use(createLoading());
for (const model in models) {
    app.model(models[model]);
}
console.log(app)
app.router(require('./router').default);
app.start('#root');