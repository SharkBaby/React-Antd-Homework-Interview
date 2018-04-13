import React, { Component } from 'react';
import { Tag, Icon } from 'antd';

// Import css style for this component
import './AgentsSelectedItem.css';

const AgentsSelectedItem = ({ twItemProps }) => {
    let isDenyClass;
    let isDenyElement;
    let tagResources = twItemProps.resources.map((tagItem, tagIndex) => {
        return <Tag closable onClose={this.closeTagEvnt}>{tagItem}</Tag>
    });
    if (twItemProps.isDeny) {
        isDenyClass = 'isDenyClass';
        isDenyElement = (
            <div className="denyIcon_div">
                <Icon type="minus-circle-o" /> <a href="">Deny</a>
            </div>
        );
    } else isDenyClass = 'notDenyClass';
    const element = (
        <div className={"agentsSelectedItem_div " + isDenyClass}>
            <div className="contentItem_div">
                <div className="img-circle">
                </div>
                <div className="">
                    <strong>{twItemProps.twUrl} | {twItemProps.progress} | {twItemProps.ipAddress} | {twItemProps.phyAddress}</strong>
                </div>
                <div className="resourceItem_div">
                    <Icon type="plus" /> <a href="">Specify Resource</a> | Resources: {tagResources}
                </div>
                {isDenyElement}
            </div>
        </div>
    );
    return element;
}
export default AgentsSelectedItem;