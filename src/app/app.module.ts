import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatInputModule,
  MatTableModule,
  MatNativeDateModule
} from '@angular/material';
import { VeiculosService } from './services/veiculos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CadastroComponent,
    CatalogoComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    /* MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput, */
    RouterModule.forRoot(ROUTES)
  ],

  providers: [VeiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
