import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {


    userDetails: any
    countryList: any
    expression ='^[0-9]*$';
    constructor(private dataSvc: DataService) {

        this.userDetails = this.dataSvc.userDetails;
        this.userDetails.country ="IN";
        this.userDetails.phone="1234567890";
        this.countryList = this.dataSvc.getCountries();
        console.log(this.countryList);
    }
    handleClick() {
        console.log(this.userDetails)
        this.dataSvc.setUserDetails(this.userDetails);
    }
    ngOnInit() {
        // this.dataSvc.getCountriesFromApi().then(result=>{
        //     console.log(result)
        //     this.countryList = result;
        // }).catch(err=>{
        //     console.log(err)
        // })
        
        
        this.dataSvc.getCountriesFromApi().subscribe(
            (result: any) => {
                console.log(result);
                this.countryList= result.map((x:any)=>{
                    return {...x,value:x.alpha2Code,text:x.name}
                })
                this.setCallingCode();
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    handleSelectedCountry(data:any){
        this.userDetails.country = data;
        this.setCallingCode();
    }
    callingCode="";
    setCallingCode(){
     let result =this.countryList.find((x:any)=>x.alpha2Code==this.userDetails.country);
     if(result){
        this.callingCode =result.callingCodes[0];
     }
    }

}