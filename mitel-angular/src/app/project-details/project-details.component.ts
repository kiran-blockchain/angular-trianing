import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute ) { 
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');
  }


  ngOnInit(): void {
  }

}
