import React from 'react';
import './SatisfiedConsumersButton.css';

function SatisfiedConsumersButton({ triggerYesOption }) {
    return (
        <>
            <button className="satisfiedConsumersButton" onClick={triggerYesOption}>
                See only satisfied consumers
            </button>
        </>
    );
}

export default SatisfiedConsumersButton;