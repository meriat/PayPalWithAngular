import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent} from './admin/admin.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SendComponent } from './send/send.component';
import { WalletComponent } from './wallet/wallet.component';
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
    },
    {
        path: 'Send',
        component: SendComponent
    },
    {
        path: 'Wallet',
        component: WalletComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);