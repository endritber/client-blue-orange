import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide: boolean = false;
  showError: boolean = false;
  message:string = '';
  loading: boolean = false;
  

  constructor(private fb: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  
  }

  signupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]], 
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required]]
  })

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  onSignUp() {
    this.loading = true;
    this.showError = false;
    if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
      this.delay(1000);
      this.showError = true;
      this.message = "Password and Confirm Password don't match"
      this.loading = false;
      return;
    }
    
    if (!this.signupForm.valid) {
      this.loading = false;
      return;
    }
    else {
        (async () => {
          await this.delay(1000);
          this.authService.signup(this.signupForm.value).pipe(
            map(result => this.loading=false)
          ).subscribe(
            result => {
              // console.log(result);
            },
            (error) => {
              this.showError = true;
              this.message = error.error.detail;
              this.loading = false;
              
            }
          )
        })();
      };
    }
  }

