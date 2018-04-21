import React, { Component } from 'react';
import AgentsSelectedItem from './AgentsSelectedItem';
import AgentsSummaryHistory from '../AgentsSummaryHistory/AgentsSummaryHistory';

// import Grid Layout
import { Row, Col } from 'antd';

// Import css style for this component
import './AgentsSelected.css';


class AgentsSelected extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thoughtworksArr: [
                { twUrl: 'bjstdmngbgr02.thoughtworks.com', progress: 'idle', ipAddress: '192.168.1.,2', phyAddress: '/var/lib/cruise-agent', resources: ['ubuntu', 'firefox3', 'core-duo'], isDeny: true },
                { twUrl: 'bjstdmngbgr03.thoughtworks.com', progress: 'buidling', ipAddress: '192.168.1.3', phyAddress: '/var/lib/cruise-agent', resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'], isDeny: false },
                { twUrl: 'bjstdmngbgr04.thoughtworks.com', progress: 'buidling', ipAddress: '192.168.1.4', phyAddress: '/var/lib/cruise-agent', resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'], isDeny: false },
                { twUrl: 'bjstdmngbgr05.thoughtworks.com', progress: 'idle', ipAddress: '192.168.1.5', phyAddress: '/var/lib/cruise-agent', resources: ['ubuntu'], isDeny: true }
            ]
        };
    }
    render() {
        let twItems = this.state.thoughtworksArr.map((twItem, twIndex) => {
            return <AgentsSelectedItem className="" twItemProps={twItem} key={twIndex} />
        });
        const element = (
            <div className="displayItems_div">
                <Row>
                    <Col span={18} className="lefttwItems_col">{twItems}</Col>
                    <Col span={6} className="rightItems_col"><AgentsSummaryHistory /></Col>
                </Row>
            </div>);
        return element;
    };
}
export default AgentsSelected;