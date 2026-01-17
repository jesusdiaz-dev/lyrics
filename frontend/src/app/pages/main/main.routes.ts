import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SongPage } from './SongPage/SongPage';
import { MainLayout } from './main-layout/main-layout';

export const MAIN_ROUTES: Routes = [
    { path: '', component: MainLayout,
        children:[
            { path: '', component: Home },
            { path: ':id', component: SongPage },
            { path: '**', redirectTo: '' } // Wildcard route for 404s
        ]
    },
];