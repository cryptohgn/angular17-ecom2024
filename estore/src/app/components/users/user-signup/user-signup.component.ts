import { matchPasswords } from './../validators/match-paswords.validations';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';




@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss',
})
export class UserSignupComponent implements OnInit {
  userSignupForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userSignupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: [''],
      city: [''],
      state: [''],
      pin: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: matchPasswords
    }
    ,
  );
  }

  // Getter for firstName control
  get firstName(): AbstractControl | null {
    return this.userSignupForm.get('firstName');
  }

  // Getter for email control
  get email(): AbstractControl | null {
    return this.userSignupForm.get('email');
  }

  // Getter for password control
  get password(): AbstractControl | null {
    return this.userSignupForm.get('password');
  }

  // Getter for confirmPassword control
  get confirmPassword(): AbstractControl | null {
    return this.userSignupForm.get('confirmPassword');
  }

  onSubmit(): void {
    if (this.userSignupForm.valid) {
      console.log('Form submitted:', this.userSignupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
