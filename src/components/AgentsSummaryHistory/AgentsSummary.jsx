import React from 'react';
import { Row, Col } from 'antd';

// Import css style for this component
import './AgentsSummary.css';

const AgentsSummary = ({ summaryItemProps }) => {
    const summaryResources =(
         <Row className="historyItem">
            <Col span={12} className="">{summaryItemProps.progress}</Col>
            <Col span={12} className="">{summaryItemProps.amount}</Col>
        </Row>
    )
    return summaryResources;
}
export default AgentsSummary;