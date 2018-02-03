import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TPractice1 from './Tpractice1';
import TickClock from './tickClock';
import EventExample from './EventExample';
import NameForm from './NameForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NameForm />, document.getElementById('root0'));
ReactDOM.render(<App />, document.getElementById('root1'));
ReactDOM.render(<TickClock />, document.getElementById('root1-1-1'));
ReactDOM.render(<EventExample />, document.getElementById('root1-2-EventExample'));
registerServiceWorker();
function tickFunction() {
    ReactDOM.render(element, document.getElementById('root2'));
}
setInterval(tickFunction, 1000);
var element = (
    <div>
        <TPractice1 name="ZhangQin" />
        <TPractice1 name="ZhangQin" />
        <TPractice1 name="ZhangQin" />
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
    return (
        <FancyBorder color="blue" 
        left={<h1 className="Dialog-title">
                Welcome
        </h1>}
        right={<p className="Dialog-message">
                Thank you for visiting our spacecraft!
        </p>} >
        <p className="Dialog-message">
                This is children content from Perry.
        </p>
        </FancyBorder>
    );
}
ReactDOM.render(<WelcomeDialog />, document.getElementById('root0-CompHir'));