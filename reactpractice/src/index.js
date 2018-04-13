import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import SingedIn from './components/SignedIn/SignedIn';
import Dashboard from './components/Dashboard/Dashboard';


import TPractice1 from './Tpractice1';
import TickClock from './tickClock';
import EventExample from './EventExample';
import NameForm from './NameForm';
import registerServiceWorker from './registerServiceWorker';
import {DatePicker,Icon, Rate, Button,Tabs,Pagination} from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;
ReactDOM.render(<NameForm />, document.getElementById('root0'));
ReactDOM.render(<App />, document.getElementById('root1'));
ReactDOM.render(<TickClock />, document.getElementById('root1-1-1'));
ReactDOM.render(<EventExample />, document.getElementById('root1-2-EventExample'));
registerServiceWorker();
// Start - Use flow to check static program - 2018-02-03
// @flow
ReactDOM.render(<SingedIn />, document.getElementById('signedIn'));
ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
function callback(key) {
    console.log(key);
  }
  ReactDOM.render(
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="DASHBOARD" key="1">DASHBOARD</TabPane>
      <TabPane tab="MY CRUISE" key="2">MY CRUISE</TabPane>
      <TabPane tab="AGENTS" key="3">AGENTS</TabPane>
      <TabPane tab="HELP" key="4">HELP</TabPane>
    </Tabs>
  , document.getElementById('antd_4'));

function concat1(a,b){
    return a+b;
}
concat1('A','B');
concat1(1,2);
// End - Use flow to check static program - 2018-02-03

function tickFunction() {
    ReactDOM.render(element, document.getElementById('root2'));
}
setInterval(tickFunction, 1000);
const e = React.createElement;
var element = (
    <div>
        <TPractice1 name="ZhangQin" >This is first One</TPractice1>
        <TPractice1 girl="ZhangQin" >This is second One</TPractice1>
    </div>);
ReactDOM.render(element, document.getElementById('root3'));
function ListItem(props) {
    return <li>{props.number} --->Index {props.index}--->Id{props.number.toString()}</li>;
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <ListItem key={index} number={number} index={index} />
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root1-2-list'));
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root1-2-duplicateKeys')
);

function FancyBorder(props) {
    return (
        <div>
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.left}
            </div>
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.right}
            </div>
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
            </div>
        </div>
    );
}
function WelcomeDialog() {
    let myVariable = false;
    return (
        <FancyBorder color="blue" 
        left={<h1 className="Dialog-title">
                Welcome
        </h1>}
        right={<p className="Dialog-message">
                Thank you for visiting our spacecraft!
        </p>} >
        <div>My JavaScript variable is {String(myVariable)}.</div>
        <p className="Dialog-message">
                This is children content from Perry.
        </p>
        </FancyBorder>
    );
}
ReactDOM.render(<WelcomeDialog />, document.getElementById('root0-CompHir'));
ReactDOM.render(<Rate />,document.getElementById('antd_1'));
ReactDOM.render(<Icon type="question" style={{ fontSize: 16, color: '#08c' }} />,document.getElementById('antd_2'));
ReactDOM.render(<div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>,document.getElementById('antd_3'));

  ReactDOM.render(<Pagination defaultCurrent = {1} total={40}/>,document.getElementById('antd_pagination'))
