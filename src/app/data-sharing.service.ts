import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataSharingService {

  private formSubject = new BehaviorSubject<any>({});
  currentForm = this.formSubject.asObservable();
  
  constructor() { }

  public setFormData(f: any) {
    return this.formSubject.next(f);
  }
  
}
