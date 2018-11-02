import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent} from './admin/admin.component';
import { UserPageComponent } from './user-page/user-page.component';
const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path:'Admin',
        component: AdminComponent
    },
    {
        path: 'User',
        component: UserPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);