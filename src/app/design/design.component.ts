import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  // dataFetched: boolean = false;

  constructor(private data: DataSharingService) { 
  }
  
  formData: any = {name: ''};
  
  ngOnInit() {
    this.data.getFormData().subscribe( (f: any) => {
      console.log(f);
      this.formData = f;
      console.log(this.formData);
      // this.dataFetched = true;
    });
  }

}
