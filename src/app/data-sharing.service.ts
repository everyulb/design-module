import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataSharingService {

  private formSubject = new Subject<any>();

  constructor() { }

  public getFormData(): Observable<any> {
    return this.formSubject.asObservable();
  } 

  public setFormData(f: any) {
    return this.formSubject.next(f);
  }
  
}
