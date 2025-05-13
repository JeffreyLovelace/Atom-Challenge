import { Router } from 'express';
import { UserService } from '../services/user.service';

const router = Router();
const userService = new UserService();

router.get('/:email', async (req, res) => {
    const user = await userService.findByEmail(req.params.email);
    if (!user) res.status(404).json({ message: 'User not found' });
    res.json(user);
});

router.post('/', async (req, res) => {
    const { email } = req.body;
    if (!email) res.status(400).json({ message: 'Email is required' });
    const user = await userService.findOrCreateByEmail(email);
    res.status(201).json(user);
});

export default router; 