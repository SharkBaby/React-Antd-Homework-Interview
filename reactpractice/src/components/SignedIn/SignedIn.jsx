import React,{Component} from 'react';
import {Icon} from 'antd';

// Import css style for this component
import './SignedIn.css';


class SignedIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        const element = (
            <div className="signedIn_div">
                <h3 className="signedIn_h3">Signed in as Member</h3>
                <Icon type="logout" spin="true"/>
                <h3 className="signedIn_h3">Sign out</h3>
            </div>
        );
        return element;
    };
}
export default SignedIn;