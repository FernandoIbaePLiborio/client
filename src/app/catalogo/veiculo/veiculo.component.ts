import { Component, OnInit, Input } from '@angular/core';
import { Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'web-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  @Input() veiculo: Veiculo;

  constructor() { }

  ngOnInit() {
  }

}
