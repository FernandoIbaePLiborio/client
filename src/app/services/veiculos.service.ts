
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { MOTORS_API } from "../app.api";
import { Veiculo } from "../models/veiculo.model";

@Injectable()
export class VeiculosService {
    constructor(private http: HttpClient) { }

    veiculos(search?: string): Observable<Veiculo[]> {

        let params: HttpParams = undefined
        if (search) {
            params = new HttpParams().set('q', search)
        }
        return this.http.get<Veiculo[]>(`${MOTORS_API}/veiculo/ConsultarVeiculos`, { params: params });
    }
    /* buscarVeiculo(id: string): Observable<Veiculo> {
        return this.http.get<Veiculo>(`${MOTORS_API}/veiculo/BuscarVeiculo/${id}`)
    } */
}