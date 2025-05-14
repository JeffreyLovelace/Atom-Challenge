import TaskRepository from '../repositories/task.repository';
import { Task } from '../models/task.model';

export class TaskService {
    private taskRepository = new TaskRepository();

    async getAllByUser(userId: string) {
        return this.taskRepository.findAllByUser(userId);
    }

    async create(task: Omit<Task, 'id' | 'createdAt'>) {
        return this.taskRepository.create(task);
    }

    async update(id: string, data: Partial<Task>) {
        return this.taskRepository.update(id, data);
    }

    async delete(id: string) {
        return this.taskRepository.delete(id);
    }
} 