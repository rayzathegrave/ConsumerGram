import React from 'react';
import './NotSatisfiedConsumersButton.css';

function NotSatisfiedConsumersButton({ triggerNoOption }) {
    return (
        <>
            <button type="button" className="NotsatisfiedConsumersButton" onClick={triggerNoOption}>
                See only unsatisfied users
            </button>
        </>
    );
}

export default NotSatisfiedConsumersButton;