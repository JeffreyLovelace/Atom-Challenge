import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import userRouter from './controllers/user.controller';
import taskRouter from './controllers/task.controller';
import './config/firebase.config';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

// Exporta la app como una función HTTP de Firebase
export const api = functions.https.onRequest(app); 