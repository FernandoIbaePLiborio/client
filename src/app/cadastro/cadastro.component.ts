import { TipoCarroceria, Modelo, Fabricante, Pais, Cidade, Proprietario, Motorista } from './../models/veiculo';
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
  selectedPais: string;
  selectedCidade: string;
  selectedMotorista: string;
  selectedProprietario: string;
  anoFabricacao: string;
  anoModelo: string;
  
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
  paises: Pais[] = [
    { value: 'Brasil' },
    { value: 'França', },
    { value: 'EUA', }
  ];
  cidades: Cidade[] = [
    { value: 'Curitiba' },
    { value: 'Paris', },
    { value: 'California', }
  ];
  motoristas: Motorista[] = [
    { value: 'Allam' },
    { value: 'Betina', },
    { value: 'Samara', }
  ];
  proprietarios: Proprietario[] = [
    { value: 'Silvio' },
    { value: 'Talita', },
    { value: 'Katia', }
  ];

  constructor() { }

  ngOnInit() {
    
  }

  

}