import { Component, OnInit } from '@angular/core';
import { CAMARAS } from 'src/app/camara-mock';
import { Camara } from 'src/app/camera';
import { CamarasService } from 'src/app/services/camaras.service';

@Component({
  selector: 'app-canon',
  templateUrl: './canon.component.html',
  styleUrls: ['./canon.component.css']
})
export class CanonComponent implements OnInit {

  canon = CAMARAS.filter(function(camara) {
    return camara.marca == "Canon";
  })

  constructor() { }

  ngOnInit(): void {

  }

}
