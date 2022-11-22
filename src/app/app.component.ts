import { Component } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'NgRx example';
  constructor(private primeNGConfig: PrimeNGConfig) {
    this.primeNGConfig.ripple = true;
  }
}
