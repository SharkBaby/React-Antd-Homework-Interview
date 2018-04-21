import React from 'react';
import { Row, Col } from 'antd';

// Import css style for this component
import './AgentsSummary.css';

const AgentsHistory = ({ historyItemProps }) => {
    const historyResources =(
         <Row className="historyItem">
            <Col span={24}>{historyItemProps}</Col>
        </Row>
    )
    return historyResources;
}
export default AgentsHistory;