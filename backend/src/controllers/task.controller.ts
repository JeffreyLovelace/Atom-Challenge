import { Router, Request, Response } from 'express';
import { TaskService } from '../services/task.service';

const router = Router();
const taskService = new TaskService();

router.get('/', async (req, res) => {
    const { userId } = req.query;
    if (!userId || typeof userId !== 'string') {
        res.status(400).json({ message: 'userId is required' });
    } else {
        const tasks = await taskService.getAllByUser(userId);
        res.json(tasks);
    }
});

router.post('/', async (req, res) => {
    const { userId, title, description } = req.body;
    if (!userId || !title || !description) res.status(400).json({ message: 'Missing fields' });
    const task = await taskService.create({ userId, title, description, completed: false });
    res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updated = await taskService.update(id, req.body);
    if (!updated) res.status(404).json({ message: 'Task not found' });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await taskService.delete(id);
    res.status(204).send();
});

export default router; 