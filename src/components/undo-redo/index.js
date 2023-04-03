import React from 'react'
import Button from 'react-bootstrap/Button';


import './index.css'

/**
 * Component that helps in undoeing and redoring 
 * @param {*} param0 
 * @returns 
 */
export default function UndoRedo({ canUndo, canRedo, onUndo, onRedo }) {
    return (
        <p className='undo-redo-container'>
            <Button variant="primary" onClick={onUndo} disabled={!canUndo}>
            Undo
            </Button>
            <Button variant="primary" onClick={onRedo} disabled={!canRedo} className="button-redo">
            Redo
            </Button>
        </p>
    )
}