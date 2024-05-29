import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        
      path: '',
      data: {
        title: 'Base'
      },
      children: [
        {
          path: '',
          redirectTo: 'cards',
          pathMatch: 'full'
        },
        {
          path: 'vehiculo',
          loadComponent: () => import('./vehiculo/vehiculo.component').then(m => m.VehiculoComponent),
          data: {
            title: 'Vehiculo'
          }
        },
        {
          path: 'reportes',
          loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
          data: {
            title: 'Reportes'
          }
        }   
        ] 
    }
]