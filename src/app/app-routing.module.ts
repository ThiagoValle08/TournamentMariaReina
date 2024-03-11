import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './components/SectionsComponents/players-list/players-list.component';
import { CategoriesComponent } from './components/SectionsComponents/categories/categories.component';
import { HomeComponent } from './components/SectionsComponents/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jugadores',
    component: PlayersListComponent,
  },
  {
    path: 'categoria',
    component: CategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
