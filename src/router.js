import React from 'react';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import {
    Router,
    Route,
    Switch,
    Redirect,
} from 'dva/router';
import {convertRoutes, renderRoutes} from 'dva-router-config';
import routesConfig from './router.config';

function RouterConfig({app, history}) {
    console.log(app)
    return (
        <ConfigProvider locale={zhCN}>
            <Router history={history}>
                <Switch>
                    {convertRoutes(routesConfig, {app})}
                </Switch>
            </Router>
        </ConfigProvider>
    );
}

export default RouterConfig;

