import React from 'react';
import CountClass from '../component/CountClass';
import CountFunction from '../component/CountFunction';
import './Count.css';

const Count = () => {
    return (
        <div className="count">
            <h1>COUNT APP</h1>
            <hr />

            <div className="left-count">
                <h4>Count APP  with Class</h4>
                <CountClass />
            </div>

            <div className="right-count">
                <h4>Count APP with Function</h4>
                <CountFunction />
            </div>
        </div>
    )
}

export default Count;