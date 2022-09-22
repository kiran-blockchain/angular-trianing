import{ Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{
 companyName:String 
 navItems :any;
 countryInfo:any;
 ngOnInit(){
   this.dataSvc.fetchCartInfo().subscribe(result=>{
      console.log(result);
  })
 }
 constructor(private dataSvc:DataService){
    this.companyName='E-kart';
    this.navItems =[{key:1,name:"Login",path:"login"},
    {key:2,name:"Register",path:"register"},
    {key:3,name:"Products",path:"products"},
    {key:4,name:"Cart",path:"cart"},
   ]
    this.countryInfo= this.dataSvc.userDetails;
 }

 getCompanyName(){
    return this.companyName;
 }

}