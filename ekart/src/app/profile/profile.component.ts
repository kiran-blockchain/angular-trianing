import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import ageRangeValidator from '../ageRange';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup({
   
    FirstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    age: new FormControl(null,[ageRangeValidator(18,45)])
  })
  constructor() {
    console.log("I am constructor in login");
  }
  alphabets = "^[a-zA-Z ]*$";
  numbersOnly = "^[0-9]*$";
 
  get f() {
    return this.profileForm.controls;
  }
  ngOnInit(): void {
  }
  login = {
    email: "",
    password: ""
  }

  handleSubmit(){
    console.log(this.profileForm.errors)
  }
}