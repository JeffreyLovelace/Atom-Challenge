import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TasksComponent } from './pages/tasks/tasks.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'tasks', component: TasksComponent }
    ])
  ],
  providers: []
})
export class AppModule { }
