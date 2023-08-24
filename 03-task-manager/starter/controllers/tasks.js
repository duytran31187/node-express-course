
const { createCustomError } = require('../errors/custom-error');
const TaskModel = require('../models/Task');

const getAllTasks = async (req, res) => {
    // it will filter only fields defined in schema only.
    try {
        const tasks = await TaskModel.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg: `no task found`});
    }
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

const getTask = async (req, res, next) => {
    try {
        const {id: taskID} = req.params;
        const task = await TaskModel.findOne({_id: taskID});
        if (!task) {
            next(createCustomError(404,  `no task found with provided ID  ${taskID}`));
        } else {
            res.status(200).json({task});
        }
    } catch (error) {
        res.status(404).json(error);
    }
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