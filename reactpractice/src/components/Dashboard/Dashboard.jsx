import React, { Component } from 'react';
import { Tabs, Row, Col } from 'antd';
import AgentsButton from '../AgentsButton/AgentsButton';
import AgentsSelected from '../AgentsSelectedItems/AgentsSelected';
import SingedIn from '../SignedIn/SignedIn';
// Import css style for this component
import './Dashboard.css';
const TabPane = Tabs.TabPane;


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsArr: new Array('DASHBOARD', 'MY CRUISE', 'AGENTS', 'HELP')
        };
        this.callback = this.callback.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentDidMount() {

    }
    componentWillUnmount() {
    }
    callback(key) {
        console.log(key);
    }
    render() {
        const tabItems = this.state.tabsArr.map((tabItem, tabIndex) => {
            return <TabPane tab={tabItem} key={tabIndex}>
                <AgentsButton />
                <AgentsSelected />
            </TabPane>
        });
        const element = (
            <div className="">
                <Row>
                    <Col span={3} className=""></Col>
                    <Col span={18} className="dashboard_div">
                        <SingedIn />
                        <h2 className="cruise_h2">Cruise</h2>
                        <div className="card-container">
                            <Tabs className="dashboard_tabs" defaultActiveKey="1" onChange={this.callback} type="card">
                                {tabItems}
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={3} className=""></Col>
                </Row>
            </div>
        );
        return element;
    };
}
export default Dashboard;