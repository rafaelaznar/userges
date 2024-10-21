import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../service/usuario.service';
import { IUsuario } from '../../../../../../model/usuario.interface';

@Component({
  selector: 'app-usuario.admin.delete.routed.component',
  templateUrl: './usuario.admin.delete.routed.component.component.html',
  styleUrls: ['./usuario.admin.delete.routed.component.component.css'],
  standalone: true
})
export class UsuarioAdminDeleteRoutedComponent implements OnInit {

 id: number = 0;
  route: string = '';
  oUsuario: IUsuario = {
    id: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
  };
  

 

  constructor( 
    private oActivatedRoute: ActivatedRoute, private oUsuarioService: UsuarioService) {

     }

  ngOnInit() {
    this.id = this.oActivatedRoute.snapshot.params['id'];
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
      },
    });
  }

  delete() {
    
    this.oUsuarioService.deleteOne(this.id).subscribe({
      next: () => {
        alert('Eliminado correctamente');
        location.href = '/admin/usuario/plist';
      },
    });
  }

}
