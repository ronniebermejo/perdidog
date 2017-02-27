import { Routes, RouterModule} from '@angular/router'
import { PerroListComponent} from './components/perro-list/perro-list.component'
import { HomeComponent} from './components/home/home.component'
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'perros', component: PerroListComponent},

];

export const routing = RouterModule.forRoot(routes);
