import { Routes } from "@angular/router";
import { SpellComponent } from "./app/spell/router/spell/spell.component";


export const routes: Routes = [
    { path:'', redirectTo: 'character',pathMatch:'full' },
    {
        path: 'character',
        loadChildren: () =>
          import('./app/character/routes').then((mod) => mod.routes),
      },
    {path: 'spell',component:SpellComponent},
//     {path: 'discovery',component:DiscoveryComponent},
 ]