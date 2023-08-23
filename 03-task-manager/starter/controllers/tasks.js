
const TaskModel = require('../models/Task');

const getAllTasks = (req, res) => {
    res.send('all tasks');
};

const createTask = async (req, res) => {
    
    // it will filter only fields defined in schema only.
    try {
        const task = await TaskModel.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    }
    
}

const getTask = (req, res) => {
    res.send('get task');
}

const updateTask = (req, res) => {
    res.send('update task');
}

const deleteTask = (req, res) => {
    res.send('delete task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}