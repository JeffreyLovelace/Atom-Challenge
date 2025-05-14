import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import userRouter from './controllers/user.controller';
import taskRouter from './controllers/task.controller';
import './config/firebase.config';

const app = express();

app.use(cors({
    origin: [
        'https://atom-challenge-77faa.web.app',
        'http://localhost:4200'
    ]
}));
app.use(express.json());

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

export const api = functions.https.onRequest(app); 