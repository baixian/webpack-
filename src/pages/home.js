import React from 'react';
import { connect } from 'dva';
import { renderRoutes } from 'react-router-config';
import { Layout, Modal, Button, Drawer, Menu } from 'antd';
class Home extends React.Component {
    componentWillUnmount() { // 卸载

    }
    render() {
        const {
            route = {},
        } = this.props;
        console.log(renderRoutes)
        return (
            <div>
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {
    } = state.newIndex;
    return {
    };
}
export default connect(mapStateToProps)(Home);
