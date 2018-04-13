import React, { Component } from 'react';
import { Button } from 'antd';

// Import css style for this component
import './AgentsButton.css';


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
    render() {
        let buttonItems = this.state.buttonArr.map((buttonItem, buttonIndex) => {
            return <Button type="primary" className="agentsButton_button">{buttonItem}</Button>
        });
        const element = (
            <div className="agentsButton_div">
                <span>Agents</span>
                {buttonItems}
            </div>
        );
        return element;
    };
}
export default AgentsButton;