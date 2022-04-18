import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }

  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Europe', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC',];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor() { }


}
