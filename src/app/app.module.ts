import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { PrescolarComponent } from './components/GradesComponents/prescolar/prescolar.component';
import { PrimeroComponent } from './components/GradesComponents/primero/primero.component';
import { SegundoComponent } from './components/GradesComponents/segundo/segundo.component';
import { TerceroComponent } from './components/GradesComponents/tercero/tercero.component';
import { CuartoComponent } from './components/GradesComponents/cuarto/cuarto.component';
import { QuintoComponent } from './components/GradesComponents/quinto/quinto.component';
import { SextoComponent } from './components/GradesComponents/sexto/sexto.component';
import { SeptimoComponent } from './components/GradesComponents/septimo/septimo.component';
import { OctavoComponent } from './components/GradesComponents/octavo/octavo.component';
import { NovenoComponent } from './components/GradesComponents/noveno/noveno.component';
import { DecimoComponent } from './components/GradesComponents/decimo/decimo.component';
import { UndecimoComponent } from './components/GradesComponents/undecimo/undecimo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { PlayersListComponent } from './components/SectionsComponents/players-list/players-list.component';
import { CategoriesComponent } from './components/SectionsComponents/categories/categories.component';
import { HomeComponent } from './components/SectionsComponents/home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms'; // Importante para usar formularios reactivos
=======
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
>>>>>>> 77fa42b (commit del repocitorio del torneo)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PrescolarComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    QuintoComponent,
    SextoComponent,
    SeptimoComponent,
    OctavoComponent,
    NovenoComponent,
    DecimoComponent,
    UndecimoComponent,
    PlayersListComponent,
    CategoriesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 77fa42b (commit del repocitorio del torneo)
