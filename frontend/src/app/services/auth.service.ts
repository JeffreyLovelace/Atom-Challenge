import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();

    constructor(private http: HttpClient) {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUserSubject.next(JSON.parse(savedUser));
        }
    }

    login(email: string): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/users/${email}`).pipe(
            tap(user => {
                if (user) {
                    this.setCurrentUser(user);
                }
            })
        );
    }

    register(email: string): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/users`, { email }).pipe(
            tap(user => this.setCurrentUser(user))
        );
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    private setCurrentUser(user: User): void {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    getCurrentUser(): User | null {
        return this.currentUserSubject.value;
    }
}
