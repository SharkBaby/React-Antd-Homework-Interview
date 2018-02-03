import React from 'react';
class TickClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date1: new Date(),
            date2: new Date(),
            date3: new Date(),
            date4: new Date(),
        };
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
        this.timerId2 = setInterval(() => this.tick2(), 2000);
        this.timerId3 = setInterval(()=>this.tick3(),3000);
        this.timerId4 = setInterval(()=>this.tick4(),4000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
        clearInterval(this.timerId2);
        clearInterval(this.timerId3);
        clearInterval(this.timerId4);
    }
    tick() {
        this.setState({
            date1: new Date()
        });
    }
    tick2(){
        this.setState({
            date2: new Date()
        })
    }
    tick3(){
        this.setState({
            date3: new Date()
        })
    }
    tick4(){
        this.setState({
            date4: new Date()
        })
    }
    render() {
        const element = (
            <div>
                <h1 className="greeting"> HelloWorld !</h1>
                <h2>It is {this.state.date1.toLocaleTimeString()}.</h2>
                <h2>It is {this.state.date2.toLocaleTimeString()}.</h2>
                <h2>It is {this.state.date3.toLocaleTimeString()}.</h2>
                <h2>It is {this.state.date4.toLocaleTimeString()}.</h2>
            </div>
        );
        return element;
    }
}
export default TickClock;