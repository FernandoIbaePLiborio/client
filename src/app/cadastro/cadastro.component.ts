import { TipoCarroceria, Modelo, Fabricante } from './../models/veiculo';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { TipoVeiculo } from '../models/veiculo';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'web-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  motorsForm: FormGroup
  selectedTipoVeiculo: string;
  selectedTipoCarroceria: string;
  selectedFabricante: string;
  selectedModelo: string;
  placaPatern = "^[a-zA-Z]{3}\-\d{4}$"

  tiposVeiculo: TipoVeiculo[] = [
    { value: 'Moto' },
    { value: 'Carro', },
    { value: 'Van', }
  ];
  tiposCarroceria: TipoCarroceria[] = [
    { value: 'Hatchback' },
    { value: 'Sedan', },
    { value: 'Pick-up', }
  ];
  fabricantes: Fabricante[] = [
    { value: 'Fiat' },
    { value: 'volkswagen', },
    { value: 'toyota', }
  ];
  modelos: Modelo[] = [
    { value: 'Uno' },
    { value: 'Gol', },
    { value: 'Sandero', }
  ];

  constructor() { }

  ngOnInit() {
    /* $(document).ready(function(){
      $("#placa").inputmask({mask: 'AAA-9999'});
    }); */
    /* this.motorsForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)],
        updateOn: 'blur'
      }),
      placa: this.motorsBuilder.control('', [Validators.required, Validators.pattern(this.placaPatern)]),
      frota: this.motorsBuilder.control(''),
      propriedade: this.motorsBuilder.control('', [Validators.required]),
      tipoVeiculo: this.motorsBuilder.control('', [Validators.required]),
      tipoCarroceria: this.motorsBuilder.control('', [Validators.required]),
      fabricante: this.motorsBuilder.control(''),
      modelo: this.motorsBuilder.control(''),
      anoFabricacao: this.motorsBuilder.control(''),
      anoModelo: this.motorsBuilder.control(''),
      pais: this.motorsBuilder.control(''),
      cidadeUF: this.motorsBuilder.control(''),
      motorista: this.motorsBuilder.control(''),
      proprietario: this.motorsBuilder.control('', [Validators.required])
    })} */
  }
}