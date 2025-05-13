import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTask = {
    title: '',
    description: ''
  };
  editingTask: Task | null = null;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.taskService.getTasksByUser(currentUser.id).subscribe({
        next: (tasks) => {
          this.tasks = tasks.map(task => ({
            ...task,
            createdAt:
              task.createdAt instanceof Date
                ? task.createdAt
                : (task.createdAt && (task.createdAt as any)._seconds
                  ? new Date((task.createdAt as any)._seconds * 1000)
                  : new Date())
          })).sort((a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
      });
    }
  }

  onSubmit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      const task = {
        ...this.newTask,
        userId: currentUser.id,
        status: 'pending' as const
      };

      this.taskService.createTask(task).subscribe({
        next: () => {
          this.newTask = { title: '', description: '' };
          this.loadTasks();
        }
      });
    }
  }

  toggleTaskStatus(task: Task) {
    const updatedTask: Partial<Task> = {
      status: task.status === 'completed' ? 'pending' : 'completed'
    };

    this.taskService.updateTask(task.id, updatedTask).subscribe({
      next: () => this.loadTasks()
    });
  }

  deleteTask(id: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => this.loadTasks()
      });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  startEditTask(task: Task) {
    this.editingTask = { ...task };
  }

  saveEditTask() {
    if (this.editingTask) {
      this.taskService.updateTask(this.editingTask.id, {
        title: this.editingTask.title,
        description: this.editingTask.description
      }).subscribe({
        next: () => {
          this.editingTask = null;
          this.loadTasks();
        }
      });
    }
  }

  cancelEditTask() {
    this.editingTask = null;
  }
}
