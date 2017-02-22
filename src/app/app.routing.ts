import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MovieComponent } from './movies/movie.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MovieComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    }
];

export const appRoutesProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
