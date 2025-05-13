import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { PopupConfirmComponent } from '../../components/popup-confirm/popup-confirm.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PopupConfirmComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPopup = false;
  pendingEmail = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
        if (this.loginForm.valid) {
            const email = this.loginForm.get('email')?.value;
            this.authService.login(email).subscribe({
                next: (user) => {
                    this.router.navigate(['/tasks']);
                },
                error: (error) => {
                    if (error.status === 404) {
                        this.pendingEmail = email;
                        this.showPopup = true;
                    } 
                }
            });
        }
    }

  onPopupResult(confirmed: boolean) {
    this.showPopup = false;
    if (confirmed && this.pendingEmail) {
      this.authService.register(this.pendingEmail).subscribe({
        next: () => this.router.navigate(['/tasks']),
        error: (error) => console.error('Error creating user:', error)
      });
    }
    this.pendingEmail = '';
  }
}
