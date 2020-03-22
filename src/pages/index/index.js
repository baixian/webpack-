import React from 'react';
import { connect } from 'dva';
import { Layout, Modal, Button, Drawer, Icon, Menu } from 'antd';
const { Sider, Content } = Layout;
import './index.less'
class Index extends React.Component {
    componentWillUnmount() { // 卸载

    }
    render() {
        const {
            breadcrumbList,
        } = this.props;
        return (
            <div>
                ahahahahDASDSADDSADSADSAfff方法
                <Button>按钮啊11</Button>
                <div className="div">引入antd less版本不能高于3.0，lessloader3.X版本</div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {
    } = state.home;
    return {
    };
}

export default connect(mapStateToProps)(Index);
