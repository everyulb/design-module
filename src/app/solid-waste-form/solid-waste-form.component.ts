import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-solid-waste-form',
  templateUrl: './solid-waste-form.component.html',
  styleUrls: ['./solid-waste-form.component.css']
})
export class SolidWasteFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  swm: FormGroup;
  villageNames: string = '';

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
      village_names: this.fb.array([]),
      la_constituency: new FormControl(null , { updateOn: 'blur'}),
      population: new FormControl(null , { updateOn: 'blur'}),
      household_numbers: new FormControl(null , { updateOn: 'blur'}),
      peak_floating_population: new FormControl(null , { updateOn: 'blur'}),
      panchayat_area: new FormControl(null , { updateOn: 'blur'}),
      village_terrain: new FormControl(null , { updateOn: 'blur'}),
      panchayat_features: this.fb.array([]),
      panchayat_specials: this.fb.array([]),
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
  }

  addVillage(): void {
    const v = this.swm.get('villageName').value;
    if(v.length > 0) {
      const villages = this.swm.get('village_names').value;
      if(!villages.includes(v) && villages.length < this.swm.get('villages_number').value){
        villages.push(v);
        this.showVillageNames();
      }
    }
  }

  showVillageNames(): void {
    this.villageNames = this.swm.get('village_names').value.join(', ');
    console.log(this.villageNames);
  }

}
