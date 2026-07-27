import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Frantoio } from './pages/frantoio/frantoio';
import { ChiSiamo } from './pages/chi-siamo/chi-siamo';
import { Contatti } from './pages/contatti/contatti';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'frantoio', component: Frantoio },
  { path: 'chi-siamo', component: ChiSiamo },
  { path: 'contatti', component: Contatti},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
