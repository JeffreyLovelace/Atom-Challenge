export interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  status: 'pending' | 'completed';
  createdAt: Date;
}
