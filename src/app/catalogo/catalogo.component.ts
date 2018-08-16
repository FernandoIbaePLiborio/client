import { VeiculosService } from './../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/veiculo';

@Component({
  selector: 'web-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listaVeiculos: Veiculo[]

  constructor(private veiculoService: VeiculosService) { }

  ngOnInit() {
    this.veiculoService.veiculos()
      .subscribe(veiculos => this.listaVeiculos = veiculos)
      console.log(this.listaVeiculos);
  }

}
