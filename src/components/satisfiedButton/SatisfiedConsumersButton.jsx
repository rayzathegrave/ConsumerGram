import React from 'react';
import './SatisfiedConsumersButton.css';

function SatisfiedConsumersButton({ triggerYesOption }) {
    return (
        <>
            <button type="button" className="satisfiedConsumersButton" onClick={triggerYesOption}>
                See only satisfied users
            </button>
        </>
    );
}

export default SatisfiedConsumersButton;