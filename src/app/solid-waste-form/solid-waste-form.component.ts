import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-solid-waste-form',
  templateUrl: './solid-waste-form.component.html',
  styleUrls: ['./solid-waste-form.component.css']
})
export class SolidWasteFormComponent implements OnInit {

  constructor(private fb: FormBuilder, public api: ApiService) { }

  swm: FormGroup;
  villageNames: string = '';
  features: Array<any> = [
    {
      name: 'Normal Village',
      value: 1
    },
    {
      name: 'Religious Place',
      value: 2
    },
    {
      name: 'Tourist Place',
      value: 3
    },
    {
      name: 'On National Highway - within 1km',
      value: 4
    },
    {
      name: 'Peri-Urban Village',
      value: 5
    },
  ]

  schemes: Array<any> = [
    {
      name: 'Panchayat under antyodaya mission',
      value: 1
    },
    {
      name: 'Panchayat selected for performance grant',
      value: 2
    },
    {
      name: 'Panchayat has won any prize',
      value: 3
    },
  ]

  ngOnInit() {
    this.initForm();
    this.onFormChange();
  }

  initForm(): void {
    this.swm = this.fb.group({
      gram_panchayat: new FormControl(null, { updateOn: 'blur'}),
      gram_panchayat_geo_tag: this.fb.group({
        latitude: new FormControl(null , { updateOn: 'blur'}),
        longitude: new FormControl(null, { updateOn: 'blur'})
      }),
      wards: new FormControl(null, { updateOn: 'blur'}),
      villages_number: new FormControl(0),
      villages_names: this.fb.array([]),
      la_constituency: new FormControl(null , { updateOn: 'blur'}),
      population: new FormControl(null , { updateOn: 'blur'}),
      household_numbers: new FormControl(null , { updateOn: 'blur'}),
      peak_floating_population: new FormControl(null , { updateOn: 'blur'}),
      panchayat_area: new FormControl(null , { updateOn: 'blur'}),
      village_terrain: new FormControl(null , { updateOn: 'blur'}),
      panchayat_features: new FormControl(),
      // pFeatures: new FormControl(),
      panchayat_specials: new FormControl(),
      // pSpecials: new FormControl(),
      villageName: new FormControl('')
    })
  }

  onFormChange(): void {
    this.swm.valueChanges.subscribe((val: any) => {
      console.log(val);
    })
  }

  submitForm(): void {
    console.log('Submitted: ', this.swm.value);
    this.api.post('solidwastemanagement/', this.swm.value).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  addVillage(): void {
    const v = this.swm.get('villageName').value;
    if(v.length > 0) {
      const villages = this.swm.get('villages_names').value;
      if(!villages.includes(v) && villages.length < this.swm.get('villages_number').value){
        villages.push(v);
        this.showVillageNames();
      }
    }
  }

  showVillageNames(): void {
    this.villageNames = this.swm.get('villages_names').value.join(', ');
    console.log(this.villageNames);
  }

}
