import { Routes } from '@angular/router';
import { UsuarioAdminRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.plist.routed.component/usuario.admin.plist.routed.component';
import { UsuarioAdminDeleteRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.delete.routed.component/usuario.admin.delete.routed.component.component';
import { UsuarioAdminEditRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.edit.routed.component/usuario.admin.edit.routed.component';

export const routes: Routes = [
  { path: 'admin/usuario/plist', component: UsuarioAdminRoutedComponent },
  { path: 'admin/usuario/delete/:id', component: UsuarioAdminDeleteRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioAdminEditRoutedComponent },
];
