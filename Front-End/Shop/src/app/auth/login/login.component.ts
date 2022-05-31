import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogingIn } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/service/storage.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userLogin!: ILogingIn;
  errors?: string;

  constructor(
    private fb: FormBuilder,
    private sUser: UserService,
    private sStorage: StorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('',  [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(): void {
    this.userLogin = this.loginForm.value
    this.sUser.userLogin(this.userLogin).subscribe({
      next: (res) => {
        
        this.sStorage.setStorage(res);
        this.loginForm.reset();
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errors = err.error.msg;
      }
    });

  }
}
