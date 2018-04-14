import React, { Component } from 'react';
import { Tag, Icon, Popover, Input, Button } from 'antd';

// Import css style for this component
import './AgentsSelectedItem.css';

class AgentsSelectedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twItemProps: this.props.twItemProps,
            toBeAddedResces: ''
        }
        this.closeTagEvnt = this.closeTagEvnt.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    closeTagEvnt(resourceArr, resourceIndex) {
        // Delete resource
        resourceArr.resources.splice(resourceIndex, 1);
        this.setState({
            twItemProps: resourceArr
        });
    }
    addResourceEvnt = (e) => {
        // Add resource
        const tobeMerged = this.state.toBeAddedResces.split(',');
        this.state.twItemProps.resources = this.state.twItemProps.resources.concat(tobeMerged);
        this.setState(prevState => ({
            twItemProps: prevState.twItemProps
        }));
        //empty input box
        e.target.parentElement.parentElement.querySelector('input').value = '';
    }
    // Set state added resources
    onAddResrceVal = (e) => {
        this.setState({
            toBeAddedResces: e.target.value
        });
    }
    render() {
        let isDenyClass;
        let isDenyElement;
        let twItemProps = this.state.twItemProps;
        let tagResources = twItemProps.resources.map((tagItem, tagIndex) => {
            return <Tag closable onClose={() => this.closeTagEvnt(twItemProps, tagIndex)} key={tagIndex}>{tagItem}</Tag>
        });
        // set add resource UI element
        const addResrceInput = (
            <div className="">
                <div>
                    <span>(separate multiple resources name with commas)</span>
                </div>
                <Input placeholder="Input separate multiple resources name with commas" className="addResrce_input" onChange={this.onAddResrceVal} />
                <div className="">
                    <Button className="addResrce_button" onMouseUp={this.addResourceEvnt}>Add resources</Button>
                    <Button className="close_button">Close</Button>
                </div>
            </div>
        );
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
                        <Popover placement="bottomRight" title="" content={addResrceInput} trigger="click">
                            <a href="#"><Icon type="plus" />Specify Resource</a>
                        </Popover> | Resources: {tagResources}
                    </div>
                    {isDenyElement}
                </div>
            </div>
        );
        return element;
    }
}
export default AgentsSelectedItem;