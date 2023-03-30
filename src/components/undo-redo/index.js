import React from 'react'

export default function UndoRedo({ canUndo, canRedo, onUndo, onRedo }) {
    return (
        <p>
            <button onClick={onUndo} disabled={!canUndo}>
            Undo
            </button>
            <button onClick={onRedo} disabled={!canRedo}>
            Redo
            </button>
        </p>
    )
}