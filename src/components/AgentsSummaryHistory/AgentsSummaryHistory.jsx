import React, { Component } from 'react';
import AgentsSummary from './AgentsSummary';
import AgentsHistory from './AgentsHistory';

import { Row, Col } from 'antd';

import './AgentsSummaryHistory.css';

class AgentsSummaryHistory extends Component {
    constructor(props) {
        super(props);
        let historyAmount = 10,
            historyArr = [];
        for (let i = 0; i < historyAmount; i++) {
            historyArr.push('bjstdmngbgr02/Acceptance_test');
        }
        this.state = {
            summaryArr: [
                { progress: 'building', amount: 2 },
                { progress: 'idle', amount: 2 }
            ],
            historyArr: historyArr
        };
    }
    render() {
        let summaryItems = this.state.summaryArr.map((summaryItem, summaryIndex) => {
            return <AgentsSummary className="" summaryItemProps={summaryItem} key={summaryIndex} />
        });
        let historyItems = this.state.historyArr.map((historyItem, historyIndex) => {
            return <AgentsHistory className="" historyItemProps={historyItem} key={historyIndex} />
        });
        const element = (
            <div className="rightPart_div">
                <Row>
                    <Col span={24} className="summaryHistory">Summary</Col>
                    <Col span={24} className="itemDetail">{summaryItems}</Col>
                    <Col span={24} className="summaryHistory">History</Col>
                    <Col span={24} className="itemDetail">{historyItems}</Col>
                </Row>
            </div>);
        return element;
    };
}
export default AgentsSummaryHistory;