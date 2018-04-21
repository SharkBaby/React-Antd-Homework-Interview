import React from 'react';
import { Icon } from 'antd';

// Import css style for this component
import './SignedIn.css';


const SignedIn = (() => {
    const element = (
        <div className="signedIn_div">
            <h3 className="signedIn_h3">Signed in as Member</h3>
            <Icon type="logout" spin="true" />
            <h3 className="signedIn_h3">Sign out</h3>
        </div>
    );
    return element;
})
export default SignedIn;