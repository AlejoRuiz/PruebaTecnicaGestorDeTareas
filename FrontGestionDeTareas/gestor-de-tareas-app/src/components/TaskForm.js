import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSave, onClose, isEditMode }) => {
    const [title, setTitle] = useState(task.title);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    useEffect(() => {
        setTitle(task.title);
        setIsCompleted(task.isCompleted);
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...task, title, isCompleted });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Titulo:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            {isEditMode && (
                <label>
                Completado:
                <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
            </label>
            )}          
            <button type="submit">Guardar</button>
            <button type="button" className="cancelar" onClick={onClose}>Cancelar </button>

        </form>
    );
};

export default TaskForm;
