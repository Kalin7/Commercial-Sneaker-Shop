import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

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

  onSubmit(): void {
    console.log(this.registerForm.value);
  }


}
