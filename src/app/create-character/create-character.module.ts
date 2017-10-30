import { NgModule } from '@angular/core';
import {CreateCharacterComponent} from "./create-character.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent}
    ])
  ],
  declarations: [
    CreateCharacterComponent
  ]
})
export class CreateCharacterModule { }
