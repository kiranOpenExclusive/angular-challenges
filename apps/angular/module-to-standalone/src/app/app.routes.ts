import { AdminComponent } from './admin.component';
import { BrokenPathComponent } from './broken-path.component';
import { HomeComponent } from './home.component';

export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: BrokenPathComponent },
];
