import { Component, OnInit } from '@angular/core';
import { CAMARAS } from 'src/app/camara-mock';

@Component({
  selector: 'app-nikon',
  templateUrl: './nikon.component.html',
  styleUrls: ['./nikon.component.css']
})
export class NikonComponent implements OnInit {
nikon = CAMARAS.filter(function(camara) {
    return camara.marca == "Nikon";
  })
  constructor() { }

  ngOnInit(): void {
  }

}
