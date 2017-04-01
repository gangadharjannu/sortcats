import { Routes, RouterModule } from '@angular/router';

import { NewAccountComponent } from './new-account/new-account.component';

const routes: Routes = [
    { path: '', redirectTo: 'newaccount', pathMatch: 'full' },
    { path: 'newaccount', component: NewAccountComponent }
];

export const routing = RouterModule.forRoot(routes);