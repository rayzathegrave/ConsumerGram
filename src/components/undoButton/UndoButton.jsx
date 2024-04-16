import React from 'react';
import './UndoButton.css';

function UndoButton({ clearSearch }) {



    return (
        <>
            <button type="button" className="undoButton" onClick={clearSearch}>
                Undo search
            </button>
        </>
    );
}

export default UndoButton;