import React from 'react'

import './index.css'

/**
 * Component that helps in undoeing and redoring 
 * @param {*} param0 
 * @returns 
 */
export default function UndoRedo({ canUndo, canRedo, onUndo, onRedo }) {
    return (
        <p className='undo-redo-container'>
            <button onClick={onUndo} disabled={!canUndo}>
            Undo
            </button>
            <button onClick={onRedo} disabled={!canRedo}>
            Redo
            </button>
        </p>
    )
}