import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor(private data: DataSharingService) { 
  }
  
  formData: any = {name: ''};
  
  ngOnInit() {
    this.data.currentForm.subscribe( (f: any) => {
      this.formData = f;
      console.log(this.formData);
    }).unsubscribe();
  }

}
