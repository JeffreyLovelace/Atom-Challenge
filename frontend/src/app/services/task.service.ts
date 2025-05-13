import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private http: HttpClient) { }

    getTasksByUser(userId: string): Observable<Task[]> {
        return this.http.get<Task[]>(`${environment.apiUrl}/tasks?userId=${userId}`);
    }

    createTask(task: Omit<Task, 'id' | 'createdAt'>): Observable<Task> {
        return this.http.post<Task>(`${environment.apiUrl}/tasks`, task);
    }

    updateTask(id: string, task: Partial<Task>): Observable<Task> {
        return this.http.put<Task>(`${environment.apiUrl}/tasks/${id}`, task);
    }

    deleteTask(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/tasks/${id}`);
    }
}
