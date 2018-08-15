import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatButtonToggleModule, MatInputModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CadastroComponent,
    CatalogoComponent,
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
    /* MatDatepickerToggle,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput, */
    RouterModule.forRoot(ROUTES)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
