import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../common/data.service';
import { EXTERNAL_URL } from '../helpers/external.url';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataSvc: DataService,private router:Router) {
    this.loginObj = new Login();
  }
  loginObj: Login;

  ngOnInit(): void {
   // this.login();
  }   
  hasError=false;
  showSuccess=false;

  
  login() {
    this.dataSvc.nonAuthPost(EXTERNAL_URL.LOGIN, this.loginObj).subscribe(
      (result:any) => {
        if(result==null&& !result.accessToken){
          this.hasError= true;
        }
        else{
          localStorage.setItem("token",result.accessToken);
          this.showSuccess= true;
          this.router.navigateByUrl('dashboard');
        }
      }, err => {
        console.log(err);
        this.hasError= true;
      });
  }


}
