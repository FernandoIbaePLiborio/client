import { Injectable } from "@angular/core";
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Veiculo } from "../models/veiculo";
import { MOTORS_API } from "../app.api";

@Injectable()
export class VeiculosService {
    constructor(private http: HttpClient) { }

    veiculos(search?: string): Observable<Veiculo[]> {
        /* let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        let options = { headers: headers }; */
        let params = new HttpParams()
        params = new HttpParams().set('Content-Type', 'application/json')
        return this.http.get<Veiculo[]>(`${MOTORS_API}/veiculo/ConsultarVeiculos`, {params: params})
    }
}