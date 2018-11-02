import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password: string
  email: string
  signupForm: FormGroup
  registerError : string
  registeredId : number

  constructor(private formBuilder: FormBuilder,  private userService: UserService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      ownerName: ['', Validators.compose([Validators.required])],
      emailAddress: ['', Validators.compose([Validators.required])],
      companyName: ['', Validators.compose([Validators.required])],
      telephoneNumber: ['', Validators.compose([Validators.required])],
      gstNumber: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  registerUser() {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value);
      
      this.userService.registerUser(this.signupForm.value).subscribe((response : any) => {
        this.registeredId = response.data.id
        console.log(response.data.id)
      },(error) => {
        this.registerError = error
      })
    }
  }

}
