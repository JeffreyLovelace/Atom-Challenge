import { TaskService } from './task.service';
import TaskRepository from '../repositories/task.repository';

jest.mock('../repositories/task.repository');

describe('TaskService', () => {
    let service: TaskService;
    let mockRepo: jest.Mocked<TaskRepository>;

    beforeEach(() => {
        mockRepo = new TaskRepository() as jest.Mocked<TaskRepository>;
        service = new TaskService();
        service['taskRepository'] = mockRepo;
    });

    it('should get all tasks by user', async () => {
        mockRepo.findAllByUser.mockResolvedValue([
            { id: '1', userId: 'u1', title: 'Test', description: '', completed: false }
        ]);
        const result = await service.getAllByUser('u1');
        expect(result).toHaveLength(1);
        expect(result[0].userId).toBe('u1');
    });

    it('should create a new task', async () => {
        const newTask = { userId: 'u1', title: 'Test', description: '', status: 'pending', completed: false };
        const mockResult = { ...newTask, id: '1', createdAt: new Date() };
        mockRepo.create.mockResolvedValue(mockResult);
        const result = await service.create(newTask);
        expect(result.title).toBe('Test');
    });
}); 