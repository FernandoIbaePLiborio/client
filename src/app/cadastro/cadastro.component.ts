import { environment } from './../../environments/environment.prod';
import { VeiculosService } from './../services/veiculos.service';
import { TipoCarroceria,  Modelo,  Fabricante,  Pais,  Cidade,  Proprietario,  Motorista,  Veiculo} from '../models/veiculo.model';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { TipoVeiculo } from '../models/veiculo.model';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

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
  anoModelo: string;
  veiculo: Veiculo;
  date = new Date();
  anoFabricacao: Date;

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

  constructor(private veiculosService: VeiculosService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.veiculo = new Veiculo() 
    /* this.motorsForm = this.formBuilder.group({
      placa: this.formBuilder.control(''),
      frota: this.formBuilder.control(''),
      propriedade: this.formBuilder.control(''),
      tipoVeiculo: this.formBuilder.control(''),
      tipoCarroceria: this.formBuilder.control(''),
      fabricante: this.formBuilder.control(''),
      modelo: this.formBuilder.control(''),
      anoFabricacao: this.formBuilder.control(''),
      anoModelo: this.formBuilder.control(''),
      pais: this.formBuilder.control(''),
      tara: this.formBuilder.control(''),
      capacidadeDeCarga: this.formBuilder.control(''),
      altura: this.formBuilder.control(''),
      largura: this.formBuilder.control(''),
      comprimento: this.formBuilder.control(''),
      motorista: this.formBuilder.control(''),
      proprietario: this.formBuilder.control(''),
    }) */
  }


  salvar() {
    console.log(this.selectedTipoVeiculo)
    this.veiculo.tipoVeiculo = this.selectedTipoVeiculo;
    this.veiculo.tipoCarroceria = this.selectedTipoCarroceria;
    this.veiculo.fabricante = this.selectedFabricante;
    this.veiculo.modelo = this.selectedModelo;
    this.veiculo.pais = this.selectedPais;
    this.veiculo.cidade = this.selectedCidade;
    this.veiculo.motorista = this.selectedMotorista;
    this.veiculo.proprietario = this.selectedProprietario;
    this.veiculo.anoFabricacao = this.anoFabricacao.toDateString();
    this.veiculo.anoModelo = this.anoModelo;
        
  }


/*   buscarVeiculo(id: string) {
    this.veiculosService.buscarVeiculo(this.route.snapshot.params['id'])
      .subscribe(veiculo => this.veiculo = veiculo)
    console.log(this.veiculo);
  } */
}