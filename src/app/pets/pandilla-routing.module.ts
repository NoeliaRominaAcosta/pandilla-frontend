import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { PandillaPageComponent } from './pages/pandilla-page/pandilla-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EditPageComponentComponent } from './pages/edit-page-component/edit-page-component.component';


// localhost:4200/Pandilla
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-pet', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: EditPageComponentComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: PandillaPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PandillaRoutingModule { }
