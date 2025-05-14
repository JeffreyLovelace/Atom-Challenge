export interface Task {
    id: string;
    userId: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface TaskQuery {
    userId: string;
}

export interface TaskBody {
    userId: string;
    title: string;
    description: string;
    completed?: boolean;
}

export interface TaskParams {
    id: string;
} 