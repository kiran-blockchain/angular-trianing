import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../common/data.service';
import { PublisherService } from '../common/pubsub';
import { EXTERNAL_URL } from '../helpers/external.url';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private dataSvc:DataService,private router:Router,private publisherSvc:PublisherService) {
    this.projects=[];
   }

  ngOnInit(): void {
    this.getProjects();
    this.publisherSvc.getKeyWord().subscribe((info)=>{
      console.log(this.projects);
      console.log(info);
      if(info==''){
        this.searchProjects= this.projects.map((x:any)=>x);
      }
      else{
        this.searchProjects = this.projects.filter((x:any)=>x.ProjectName.includes(info));
      }
      
      
    })

  }
  projects:any
  searchProjects:any;
  getProjects(){
    this.dataSvc.authGet(EXTERNAL_URL.ALLPROJECTS).subscribe(
      (result:any) => {
          this.projects = result.data;
          this.searchProjects = this.projects.map((x:any)=>x);
      }, err => {
        console.log(err);
        //this.hasError= true;
      });
  }
  getProjectDetails(p:any){
    this.router.navigateByUrl("/dashboard/projects/"+p.ProjectId);
  }

}
