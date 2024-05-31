import {HttpClient} from "@angular/common/http" ;
import { Injectable } from "@angular/core";
import { VehiculoModel } from "../models/vehiculo.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn : 'root'
})
export class VehiculoService{
    //url de su api (backend)
    private API_URL = 'http://localhost:9000/vehiculos'
    constructor(private http: HttpClient){

    }

    getTodosLosVehiculos():Observable<VehiculoModel[]>{
        return this.http.get<VehiculoModel[]>(`${this.API_URL}/getVehiculos`);

    }

    agregarVehiculo(vehiculo: VehiculoModel):Observable<VehiculoModel>{
    return this.http.post<VehiculoModel>(`${this.API_URL}/crear`,vehiculo);
    }
    eliminarVehiculo(idVehiculo: string):Observable<VehiculoModel>{
     return this.http.delete<VehiculoModel>(`${this.API_URL}/eliminar/${idVehiculo}`);
    }

    editarVehiculo(vehiculo: VehiculoModel):Observable<VehiculoModel>{
    return this.http.put<VehiculoModel>(`${this.API_URL}/editar/${vehiculo._id}`,vehiculo);
    }
}