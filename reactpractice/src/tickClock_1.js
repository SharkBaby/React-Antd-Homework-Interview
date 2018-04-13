import React from 'react';
class TickClock1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {date1: new Date()};
    }
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }
    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(),2000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date1: new Date()
        });
    }
    render(){
        const element = (
            <div>
                <h1 className="greeting"> HelloWorld !</h1>
                <h2>It is {this.state.date1.toLocaleTimeString()}.</h2>
            </div>
        );
        return element;
    }
}
export default TickClock1;