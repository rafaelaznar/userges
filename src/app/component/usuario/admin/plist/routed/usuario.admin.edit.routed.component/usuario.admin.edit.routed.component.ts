import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../service/usuario.service';
import { IUsuario } from '../../../../../../model/usuario.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usuario.admin.edit.routed',
  templateUrl: './usuario.admin.edit.routed.component.html',
  styleUrls: ['./usuario.admin.edit.routed.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
})
export class UsuarioAdminEditRoutedComponent implements OnInit {
  id: number = 0;
  route: string = '';
  usuarioForm: IUsuario = {
    id: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
  };
  oUsuario: any;
  
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
          this.usuarioForm = data;
        },
      });
    }

    updateOne() {
      this.oUsuarioService.updateOne(this.usuarioForm).subscribe({
        next: (data: IUsuario) => {

          
          this.usuarioForm = data;
          
          alert('Actualizado correctamente');
          location.href = '/admin/usuario/plist';
        },
      });
    }
  


}

