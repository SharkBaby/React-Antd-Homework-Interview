// // 
// const add = require('./testedFiles/add');
// describe('add', () => {
//     it('should add two numbers', () => {
//         expect(add(1, 2)).toBe(3);
//     });
// });
// const decrease = require('./testedFiles/decrease');
// describe('decrease', () => {
//     it('should first parameter decrease second parameter', () => {
//         expect(decrease(22, 8)).toBe(14);
//     });
// });

// Copyright 2004-present Facebook. All Rights Reserved.
/* eslint-disable no-unused-vars */

// you can install *snapshot-tools* in visual studio code extensions
'use strict';
import React from 'react';
import Link from './testedFiles/Link.react';
// DOM test
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import SignedIn from '../components/SignedIn/SignedIn';
import Dashboard from '../components/Dashboard/Dashboard';
import AgentsButton from '../components/AgentsButton/AgentsButton';
import AgentsSelected from '../components/AgentsSelectedItems/AgentsSelected';
import AgentsSelectedItem from '../components/AgentsSelectedItems/AgentsSelectedItem';
import AgentsHistory from '../components/AgentsSummaryHistory/AgentsHistory';
import AgentsSummary from '../components/AgentsSummaryHistory/AgentsSummary';
import AgentsSummaryHistory from '../components/AgentsSummaryHistory/AgentsSummaryHistory';

import renderer from 'react-test-renderer';

// ignore all css files when execute jest snapshot test
jest.mock("../components/SignedIn/SignedIn.css", () => jest.fn());
jest.mock("../components/Dashboard/Dashboard.css", () => jest.fn());
jest.mock("../components/AgentsButton/AgentsButton.css", () => jest.fn());
jest.mock("../components/AgentsSelectedItems/AgentsSelected.css", () => jest.fn());
jest.mock("../components/AgentsSelectedItems/AgentsSelectedItem.css", () => jest.fn());
jest.mock("../components/AgentsSummaryHistory/AgentsHistory.css", () => jest.fn());
jest.mock("../components/AgentsSummaryHistory/AgentsSummary.css", () => jest.fn());
jest.mock("../components/AgentsSummaryHistory/AgentsSummaryHistory.css", () => jest.fn());

// unit test 1: signed in component
it('display signed in correctly', () => {
    const tree = renderer.create(<SignedIn />).toJSON();
    expect(tree).toMatchSnapshot();
});
// // unit test 2: dashboard component
// it('display dashboard correctly', () => {
//     const tree = renderer.create(<Dashboard />).toJSON();
//     expect(tree).toMatchSnapshot();
// });
// unit test 3: agents button component
it('display agents button correctly', () => {
    const tree = renderer.create(<AgentsButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
// // unit test 4: agents selected component
// it('display agents selected correctly', () => {
//     const tree = renderer.create(<AgentsSelected />).toJSON();
//     expect(tree).toMatchSnapshot();
// });
// unit test 5: AgentsSelectedItem component
it('display AgentsSelectedItem correctly', () => {
    const thoughtwork = { twUrl: 'bjstdmngbgr02.thoughtworks.com', progress: 'idle', ipAddress: '192.168.1.,2', phyAddress: '/var/lib/cruise-agent', resources: ['ubuntu', 'firefox3', 'core-duo'], isDeny: true };
    const tree = shallow(<AgentsSelectedItem className="" twItemProps={thoughtwork} />);
    expect(tree).toMatchSnapshot();
    // Test add resource function
    // tree.props.onChange();
    // tree.props.onMouseUp();
    // expect(tree).toMatchSnapshot();
    // // Test delete resource function
    // tree.props.onClose();
    // expect(tree).toMatchSnapshot();
    // expect(checkbox.text()).toEqual('Off');
    // checkbox.find('input').simulate('change');
    // expect(checkbox.text()).toEqual('On');
});
// unit test 6: AgentsSummaryHistory component
it('display AgentsSummaryHistory correctly', () => {
    const tree = shallow(<AgentsSummaryHistory />);
    expect(tree).toMatchSnapshot();
});
// unit test 7: AgentsSummary component
it('display AgentsSummary correctly', () => {
    const summaryItem = { progress: 'building', amount: 2 };
    const tree = shallow(<AgentsSummary className="" summaryItemProps={summaryItem} />);
    expect(tree).toMatchSnapshot();
});
// unit test 8: AgentsHistory component
it('display AgentsHistory correctly', () => {
    const historyItem = 'bjstdmngbgr02/Acceptance_test';
    const tree = shallow(<AgentsHistory className="" historyItemProps={historyItem} />);
    expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
    const tree = renderer.create(<Link>Facebook</Link>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('properly escapes quotes', () => {
    const tree = renderer
        .create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});