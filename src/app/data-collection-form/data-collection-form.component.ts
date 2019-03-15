import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-collection-form',
  templateUrl: './data-collection-form.component.html',
  styleUrls: ['./data-collection-form.component.css']
})
export class DataCollectionFormComponent implements OnInit {

  constructor(private router: Router, private data: DataSharingService) { }

  formData = {
    selectedModel : {},
    selectedFeature : {},
    selectedScheme : {},
    nameOfGramPanchayat : "",
    numberOfVillages : "",
    legislativeAssembly : "",
    population : "",
    numberOfHouseholds : "",
    peakFloatingPopulation : "",
    villageTerrain : "",
    panchayatArea : ""
  }
  
  models = [
    {
      name: 'Solid Waste Management', 
      value: 'swm'
    },
    {
      name: 'Liquid Waste Management', 
      value: 'lwm'
    }
  ];

  features = [
    {
      name: 'Normal Village',
      value: 'normalVillage'
    },
    {
      name: 'Religious Place',
      value: 'religiousPlace'
    },
    {
      name: 'Tourist Place',
      value: 'touristPlace'
    },
    {
      name: 'On National(withing 1km)',
      value: 'onNational'
    },
    {
      name: 'Peri-urban Village',
      value: 'periUrbanVillage'
    }
  ]

  schemes = [
    {
      name: 'Panchayat Under Antyodaya Mission',
      value: 'antyodayaMission'
    },
    {
      name: 'Panchayat selected for performance grant',
      value: 'performanceGrant'
    },
    {
      name: 'Panchayat has won any prize',
      value: 'wonAnyPrize'
    },
  ]

  ngOnInit() {
    this.formData.selectedModel = this.models[0];
    this.formData.selectedFeature = this.features[0];
    this.formData.selectedScheme = this.schemes[0];
  }

  submitForm() {
    this.router.navigate(['design']);
    this.data.setFormData(this.formData);
    // console.log(this.formData);
  }

  handleModelSelect(e: Event) {
    this.formData.selectedModel = e;
  }

  handleFeatureSelect(e: Event) {
    this.formData.selectedFeature = e;
  }

  handleSchemeSelect(e: Event) {
    this.formData.selectedScheme = e;
  }

}
