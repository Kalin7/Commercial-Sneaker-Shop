import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/service/storage.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: IUser;
  errors: string[] = [];

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
    this.registerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rePass: new FormControl(''), 
    }, {
      validators: this.passwordValidator('password', 'rePass'),
    })
  }

  private passwordValidator(controlA: string, controlB: string): ValidatorFn {
    
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const valA = formGroup.get(controlA)?.value;
      const valB = formGroup.get(controlB)?.value;

      return valA === valB ? null : {passwordDoNotMatch: true}     
    }
  }

  getUserData() {
    return {
      firstName: this.registerForm.get('firstName')!.value,
      lastName: this.registerForm.get('lastName')!.value,
      email: this.registerForm.get('email')!.value,
      password: this.registerForm.get('password')!.value,
      repeatPass: this.registerForm.get('rePass')!.value,
      phone: this.registerForm.get('phone')!.value,
    }
  }


  onSubmit(): void {
    this.user = this.getUserData();
    this.sUser.registerNewUser(this.user).subscribe({
      next: (res) => {
        this.sStorage.setStorage(res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errors = err.error.msg;
      }
    });

    this.registerForm.reset();
  }

}


