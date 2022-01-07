import { Component, OnInit } from '@angular/core';
import { Camara } from 'src/app/camera';
import { CamarasService } from "src/app/services/camaras.service";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  camaras:Camara[] = [];

  constructor(private camaraService: CamarasService) { }

  ngOnInit(): void {
    this.getCamaras();
  }

  getCamaras(): void {
    this.camaraService.getCamaras()
      .subscribe(camaras => this.camaras = camaras);
  }

}
