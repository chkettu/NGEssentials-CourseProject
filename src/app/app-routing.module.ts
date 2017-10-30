import { NgModule } from '@angular/core';
import {CreateCharacterComponent} from "./create-character/create-character.component";
import {ListComponent} from "./list/list.component";
import {TabsComponent} from "./tabs/tabs.component";
import {RouterModule} from "@angular/router";

const routes= [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full'},
    { path: ':side', component: ListComponent }
  ]},
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
