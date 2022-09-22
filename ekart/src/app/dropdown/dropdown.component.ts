import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { 
    this.listItems =[{value:"",text:"Please Select"}];
    this.selectedValue = '';
  }
  @Input()
  selectedValue:string;
 
  @Input()
  listItems:any

 

  @Output() 
  selectedItemEvent = new EventEmitter<string>();
  ngOnInit(): void {

    console.log(this.listItems);
    
  }
  optionSelected(){
    console.log(this.selectedValue);
    this.selectedItemEvent.emit(this.selectedValue);
  }
}
