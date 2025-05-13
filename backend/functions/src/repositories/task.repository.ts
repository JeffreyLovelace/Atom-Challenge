import { db } from '../config/firebase.config';
import { Task } from '../models/task.model';

const tasksCollection = db.collection('tasks');

class TaskRepository {
    async findAllByUser(userId: string): Promise<Task[]> {
        const snapshot = await tasksCollection.where('userId', '==', userId).orderBy('createdAt', 'desc').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
    }

    async create(task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
        const docRef = await tasksCollection.add({
            ...task,
            createdAt: new Date(),
        });
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() } as Task;
    }

    async update(id: string, data: Partial<Task>): Promise<Task | null> {
        const docRef = tasksCollection.doc(id);
        await docRef.update(data);
        const doc = await docRef.get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() } as Task;
    }

    async delete(id: string): Promise<void> {
        await tasksCollection.doc(id).delete();
    }
}

export default TaskRepository; 