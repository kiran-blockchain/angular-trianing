import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http'
import { DataService } from './data.service';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers:[DataService],
  exports:[DataService]
})
export class CustomCommonModule { }
