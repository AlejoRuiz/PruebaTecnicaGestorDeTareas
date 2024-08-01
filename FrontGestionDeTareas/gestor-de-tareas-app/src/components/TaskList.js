import React from 'react';

const TaskList = ({ tasks, onEdit }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Completado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.isCompleted ? 'Si' : 'No'}</td>
                        <td>
                            <button onClick={() => onEdit(task)}>Editar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;
