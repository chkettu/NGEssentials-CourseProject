import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "../star-wars.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'None', value:''},
    {display: 'Light', value:'light'},
    {display: 'Dark', value:'dark'}];
  createForm: FormGroup;
  swService: StarWarsService;

  constructor(swService: StarWarsService, fb: FormBuilder) {
    this.swService = swService;
    this.createForm = fb.group({
      'name' : ['Obi-Wan'],
      'side' : ['']
    })
  }

  ngOnInit() {
  }

  onSubmit(data) {
    if (this.createForm.invalid) {
      return;
    }
    console.log(data);
    this.swService.addCharacter(data.name, data.side);
  }
}
