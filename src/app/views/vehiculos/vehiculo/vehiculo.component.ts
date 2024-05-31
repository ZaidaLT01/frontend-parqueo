import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlignDirective, BorderDirective, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { VehiculoModel } from "../models/vehiculo.model";
import { VehiculoService } from "../services/vehiculo.service";
@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [RowComponent, ColComponent, 
    CardComponent,CardHeaderComponent, 
    CardBodyComponent, DocsExampleComponent, 
    ReactiveFormsModule,
    FormsModule, FormDirective, FormLabelDirective, 
    FormControlDirective, ButtonDirective, NgStyle
    ,TextColorDirective, FormSelectDirective,
    TableDirective, 
    TableColorDirective, TableActiveDirective, 
    BorderDirective, AlignDirective
  ],
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.scss'
})
export class VehiculoComponent {
  listaVehiculos :VehiculoModel[] = [];
  vehiculoModelo : VehiculoModel = new VehiculoModel();



  constructor (private vehiculoService: VehiculoService){
    this.getVehiculos();
  }

  getVehiculos(){
    this.vehiculoService.getTodosLosVehiculos().subscribe({
      next : (respuesta) => {
        console.log(respuesta);
        this.listaVehiculos = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

guardarVehiculo(){
  console.log(this.vehiculoModelo);
  if(this.vehiculoModelo._id == ''){
console.log("guardar",this.vehiculoModelo);
this.agregarVehiculo();
  }else{
    console.log("editar",this.vehiculoModelo);
    this.editarVehiculo();  
  }
}

agregarVehiculo(){
  this.vehiculoService.agregarVehiculo(this.vehiculoModelo).subscribe({
    next : (respuesta) => {
      console.log("Se guardo exitosamente",respuesta);
      this.getVehiculos();
      this.vehiculoModelo= new VehiculoModel();
    },
    error: (error) => {
      console.log(error);
    }
  })
}


eliminarVehiculo(vehiculo:VehiculoModel ){
  console.log("item para eliminar",vehiculo);
  this.vehiculoService.eliminarVehiculo(vehiculo._id).subscribe({
    next : (respuesta) => {
      console.log("Se elimino exitosamente",respuesta);
      this.getVehiculos();
    },
    error: (error) => {
      console.log(error);
    }
  })
}


verVehiculo(vehiculo: VehiculoModel){
this.vehiculoModelo=vehiculo;
}


editarVehiculo( ){
 // this.vehiculoModelo = vehiculo;
  //console.log("vehiculo a editar",vehiculo);
  this.vehiculoService.editarVehiculo(this.vehiculoModelo).subscribe({
    next : (respuesta) => {
      console.log("Se edito exitosamente",respuesta);
      this.getVehiculos();
    },
    error: (error) => {
      console.log(error);
    }
  })
}

}
