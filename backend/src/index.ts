import express from 'express';
import cors from 'cors';
import userRouter from './controllers/user.controller';
import taskRouter from './controllers/task.controller';
import './config/firebase.config'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 