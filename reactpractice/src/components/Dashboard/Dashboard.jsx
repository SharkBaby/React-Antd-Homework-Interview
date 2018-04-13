import React, { Component } from 'react';
import { Tabs } from 'antd';
import AgentsButton from '../AgentsButton/AgentsButton';
import AgentsSelected from '../AgentsSelectedItems/AgentsSelected';
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
            <div>
                <h2 className="cruise_h2">Cruise</h2>
                <Tabs className="dashboard_tabs" defaultActiveKey="1" onChange={this.callback}>
                    {/* <TabPane tab="DASHBOARD" key="1">DASHBOARD</TabPane>
                    <TabPane tab="MY CRUISE" key="2">MY CRUISE</TabPane>
                    <TabPane tab="AGENTS" key="3"><AgentsButton /></TabPane>
                    <TabPane tab="HELP" key="4">HELP</TabPane> */}
                    {tabItems}
                </Tabs>
            </div>
        );
        return element;
    };
}
export default Dashboard;