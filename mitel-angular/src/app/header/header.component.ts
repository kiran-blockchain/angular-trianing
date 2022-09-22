import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PublisherService } from '../common/pubsub';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor(private publisherSvc:PublisherService) { }

  ngOnInit(): void {
  }
  searchData='';
  search(){
    this.publisherSvc.searchProject(this.searchData);
  }

}
