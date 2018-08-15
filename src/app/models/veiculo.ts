export interface Veiculo {
    id: string
    placa: string
    frota?: string
    propriedade: boolean
    tipoVeiculo: string
    tipoCarroceria: string
    fabricante?: string 
    modelo?: string
    anoFabricacao?: string
    anoModelo?: string
    pais?: string
    cidade?: string
    tara?: number
    capacidadeCarga?: number
    altura?: number
    largura?: number
    comprimento?: number
    motorista?: string 
    proprietario: string
  }

export class TipoVeiculo {
    constructor(public value: string){}
}
export class TipoCarroceria {
    constructor(public value: string){}
}
export class Fabricante {
    constructor(public value: string){}
}
export class Modelo {
    constructor(public value: string){}
}

