import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PandillaRoutingModule } from './pandilla-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { PandillaPageComponent } from './pages/pandilla-page/pandilla-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { EditPageComponentComponent } from './pages/edit-page-component/edit-page-component.component';



@NgModule({
  declarations: [
    PandillaPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    EditPageComponentComponent
  ],
  imports: [
    CommonModule,
   PandillaRoutingModule,
    MaterialModule
  ]
})
export class PandillaModule { }
