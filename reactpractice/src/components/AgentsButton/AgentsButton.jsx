import React, { Component } from 'react';
import { Radio } from 'antd';

// Import css style for this component
import './AgentsButton.css';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class AgentsButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonArr: new Array('All', 'Physical', 'Virtual')
        };
    }
    tick() {
        this.setState({

        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }
    render() {
        let buttonItems = this.state.buttonArr.map((buttonItem, buttonIndex) => {
            return <RadioButton value={buttonItem} className="agentsButton_button" key={buttonIndex}>{buttonItem}</RadioButton>
        });
        const element = (
            <div className="agentsButton_div">
                <span className="agents_span">Agents</span>
                <RadioGroup onChange={this.onChange} defaultValue="Physical">
                    {buttonItems}
                </RadioGroup>
            </div>
        );
        return element;
    };
}
export default AgentsButton;