import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Camara } from '../camera';
import { CAMARAS } from "../camara-mock";

@Injectable({
  providedIn: 'root'
})
export class CamarasService {

  constructor() {
    console.log("Servicio listo");
  }

  getCamaras(): Observable<Camara[]> {
  const camaras = of(CAMARAS);
  return camaras;
}

  //buscador
  getCamara( idx: string  ){
    return CAMARAS[<any>idx];
  }
}

