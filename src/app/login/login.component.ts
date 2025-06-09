import {Component} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UsersService} from '../service/users.service';
import {User} from '../service/users'
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'input-error-state-matcher-example',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatTooltipModule,MatButtonModule],
  standalone: true,
})
export class LoginComponent {

  form: FormGroup;
  constructor(public usersService: UsersService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    })
  }

  nameFormControl = new FormControl('', [Validators.required, Validators.min(3)]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]);

  matcher = new MyErrorStateMatcher();

  whatIsMyRole = () => {
    console.log("i enter");
    let users = this.usersService.getUsers();
    console.log(users);
    console.log(this.nameFormControl.value);
    console.log(this.passwordFormControl.value);
    let thisUser: User | undefined = users.find((user: { name: any; password: any; }) => user.name === this.nameFormControl.value && user.password === this.passwordFormControl.value);
    if (thisUser === undefined)
      alert("this user does not exsist");
    else{
       if(thisUser.role === "teacher")
       {
        console.log("Redirecting to /lessonsList");
        window.location.href = '/lessonsList'
       }

       if(thisUser.role === "secretary")
      {
        console.log("Redirecting to /clients");
        window.location.href = '/clients'
      }
    }
  }
}


// import { Component } from '@angular/core';
// import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { UsersService } from '../service/users.service';
// import {User} from '../service/users'
// import {MatButtonModule} from '@angular/material/button';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatInputModule} from '@angular/material/input';

// @Component({
//   selector: 'app-login',
//   imports: [ReactiveFormsModule,MatTooltipModule,MatButtonModule,MatInputModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
//   standalone: true,
// })

// export class LoginComponent {
//   form: FormGroup;
//   constructor(public usersService: UsersService, private fb: FormBuilder) {
//     this.form = this.fb.group({
//       name: ['', [Validators.required]],
//       password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
//     })
//   }
 
//   whatIsMyRole = () => {
//     console.log("i entetr");
    
//     let users = this.usersService.getUsers();
//     let thisUser: User | undefined = users.find((user: { name: any; password: any; }) => user.name === this.form.value.name && user.password === this.form.value.password);
//     if (thisUser === undefined)
//       alert("this user does not exsist");
//     else{
//        if(thisUser.role === "teacher")
//        {
//         console.log("Redirecting to /lessonsList");
//         window.location.href = '/lessonsList'
//        }

//        if(thisUser.role === "secretary")
//       {
//         console.log("Redirecting to /clients");
//         window.location.href = '/clients'
//       }
//     }
//   }
// }
