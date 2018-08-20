import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { VeiculoComponent } from './catalogo/veiculo/veiculo.component';
import { NgModule } from '@angular/core';
import { MultidatepickerComponent } from './multidatepicker/multidatepicker.component';
import { MultiDatepickerModule } from './multidatepicker/multidatepicker.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CadastroComponent,
    CatalogoComponent,
    DatepickerComponent,
    VeiculoComponent,
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
    MultiDatepickerModule,
    /* MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput, */
    RouterModule.forRoot(ROUTES)
  ],
  providers: [VeiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
