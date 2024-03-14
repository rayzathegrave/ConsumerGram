import React from 'react';
import './NotSatisfiedConsumersButton.css';

function NotSatisfiedConsumersButton({ triggerNoOption }) {
    return (
        <>
            <button className="NotsatisfiedConsumersButton" onClick={triggerNoOption}>
                See only unsatisfied users
            </button>
        </>
    );
}

export default NotSatisfiedConsumersButton;