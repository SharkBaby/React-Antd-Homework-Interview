import React from 'react';
import TPractice1_1 from './Tpractice1_1';
class TPractice1 extends React.Component {
    render() {
        return (
            <div>
                <TPractice1_1 name={this.props.name} value={this.props.children}/>
                <TPractice1_1 name={this.props.name} />
            </div>
        )
    }
}
export default TPractice1;