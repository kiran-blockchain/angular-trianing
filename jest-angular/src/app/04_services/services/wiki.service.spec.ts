import { HttpClient, HttpHandler } from '@angular/common/http';

import { WikiService } from './wiki.service';
import { Observable, tap } from 'rxjs';
jest.mock('./wiki.service'); // mock class WikiService

let handler: HttpHandler;
let XHR: HttpClient;
let service: WikiService;

beforeAll(async () => {
  XHR = new HttpClient(handler /* abstract class HttpHandler*/);
  service = new WikiService(XHR);
});

describe('WikiService', () => {
  it('number of instances', () => {
    expect(WikiService).toHaveBeenCalledTimes(1);
  });

  it('methods are defined', () => {
    expect(service.search).toBeDefined;
  });
  it('methods are called', () => {
   let params:any = { query: {
    search: [{
      ns: 1,
      title: '',
      pageid: 1,
      size: 10,
      wordcount:1000,
      snippet:'1111111sdffsd',
      timestamp: new Date()
   }]}
  };
  let Result = service.search('result');
  console.log("Result",Result)
  //expect(service.search).toBeDefined
   //service.search('helloo').pipe(tap(console.dir))
    
  });
});
