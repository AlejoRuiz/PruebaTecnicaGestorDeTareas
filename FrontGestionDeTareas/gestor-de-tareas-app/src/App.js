import React, { useState, useEffect } from 'react';
import { listTasks, createTask, updateTask } from './services/taskService';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Modal from './components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState({ id: 0, title: '', isCompleted: false });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await listTasks();
        console.log(response)
        if (response.data.exito === 1) {
            setTasks(response.data.data);
        } else {
            toast.error(response.mensaje);
        }
    };

    const handleCreate = () => {
        setIsEditMode(false);
        setCurrentTask({ id: 0, title: '', isCompleted: false });
        setModalIsOpen(true);
    };

    const handleEdit = (task) => {
        setIsEditMode(true);
        setCurrentTask(task);
        setModalIsOpen(true);
    };

    const handleSave = async (task) => {
        let response;
        if (isEditMode) {
            response = await updateTask(task);
        } else {
            response = await createTask(task);
        }
        if (response.data.exito === 1) {
            toast.success(response.data.mensaje);
            setModalIsOpen(false);
            fetchTasks();
        } else {
            toast.error(response.data.mensaje);
        }
    };

    return (
        <div className="main">
            <h2>Gestor de tareas</h2>
            <div className="header_container">
                <button onClick={handleCreate}>Crear</button>
                <TaskList tasks={tasks} onEdit={handleEdit} />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Task Modal"
            >
                <h2>{isEditMode ? 'Editar tarea' : 'Crear tarea'}</h2>
                <TaskForm
                    task={currentTask}
                    onSave={handleSave}
                    onClose={() => setModalIsOpen(false)}
                    isEditMode={isEditMode}
                />
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
