import React from 'react';
class EventExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            dblValue: "This is default value"
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDblclick = this.handleDblclick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            dblValue: "This is Single Click value"
        }));
    }
    handleDblclick(numberId,e) {
        this.setState({
            dblValue: "this is double Click Value"
        });
        alert(numberId);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                <button onDoubleClick={(e)=>this.handleDblclick(6,e)}>Double Click</button>
                <p>{this.state.dblValue}</p>
            </div>
        );
    }
}
export default EventExample;