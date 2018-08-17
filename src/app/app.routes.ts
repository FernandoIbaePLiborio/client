import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';

export const ROUTES: Routes = [
    { path: 'cadastro', component: CadastroComponent },
    { path: 'catalogo', component: CatalogoComponent },
    {
        path: 'cadastro/:id', component: CadastroComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
        ]
    },
]