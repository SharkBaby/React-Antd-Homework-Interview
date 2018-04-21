import React, { Component } from 'react';
import { Tag, Icon, Popover, Input, Button, message, Row, Col } from 'antd';

// Import css style for this component
import './AgentsSelectedItem.css';

class AgentsSelectedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            toBeAddedResces: ''
        }
    }
    closeTagEvnt = (resourceItem) => {
        // Delete resource
        // let twItemProps = this.props.twItemProps;
        // twItemProps.resources = twItemProps.resources.filter(twItem => twItem !== resourceItem);
    }
    addResourceEvnt = () => {
        // Add resource
        let tobeMerged = this.state.toBeAddedResces.trim();
        if (tobeMerged !== null && tobeMerged !=='') {
            tobeMerged = tobeMerged.split(',');
            this.props.twItemProps.resources = this.props.twItemProps.resources.concat(tobeMerged);
            //empty input box
            this.setState({
                toBeAddedResces: '',
            });
        } else {
            message.warning('Invalid!, please input separate multiple resources name with commas');
        }
    }
    // Set state added resources
    onAddResrceVal = (e) => {
        this.setState({
            toBeAddedResces: e.target.value
        });
    }
    hide = () => {
        this.setState({
            visible: false,
        });
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    render() {
        let isDenyClass;
        let isDenyElement;
        let twItemProps = this.props.twItemProps;
        let tagResources = twItemProps.resources.map((tagItem, tagIndex) => {
            return (<Tag key={tagIndex} closable afterClose={() => this.closeTagEvnt(tagItem)} className="tagResource_tag">{tagItem}</Tag>);
        });
        // set add resource UI element
        const addResrceInput = (
            <div className="">
                <div>
                    <span>(separate multiple resources name with commas)</span>
                </div>
                <Input placeholder="Input separate multiple resources name with commas" className="addResrce_input" onChange={this.onAddResrceVal} value={this.state.toBeAddedResces} />
                <div className="">
                    <Button className="addResrce_button" onMouseUp={this.addResourceEvnt}>Add resources</Button>
                    <Button className="close_button" onClick={this.hide}>Close</Button>
                </div>
            </div>
        );
        if (twItemProps.isDeny) {
            isDenyClass = 'isDenyClass';
            isDenyElement = (
                <div className="denyIcon_div">
                    <Icon type="minus-circle-o" /> <a href="" className="deny_a">Deny</a>
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
                        <Row>
                            <Col span={5} className="">
                                <Popover placement="bottomLeft" title="" content={addResrceInput} trigger="click" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
                                    <a href="" className="specifyRes_a"><Icon type="plus" />Specify Resource</a>
                                </Popover> |
                            </Col>
                            <Col span={14} className="">Resources: {tagResources}</Col>
                            <Col span={2} className="">{isDenyElement}</Col>
                        </Row>
                    </div>

                </div>
            </div>
        );
        return element;
    }
}
export default AgentsSelectedItem;