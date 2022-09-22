import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
bsConfig:any;
  constructor() { 
    this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
    this.register= new FormGroup({
      email:new FormControl(''),
      dateOfBirth:new FormControl(''),
      password:new FormControl('')
    })
    this.register.valueChanges.subscribe(data=>{
      console.log(JSON.stringify(data));
    })
  }

  ngOnInit(): void {
  }
  register:FormGroup;

}
