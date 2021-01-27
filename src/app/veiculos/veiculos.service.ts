import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Marca } from './marca';
import {Modelo} from './modelo';
import {Veiculo} from './veiculo';
import {Ano} from './ano';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class VeiculosService{
    private readonly urlTipo = 'http://fipeapi.appspot.com/api/1/';
    private tipo:String;
    private modelo:number;
    private ano: number;

    constructor(private http: HttpClient){
    }

    buscarMarcas(tipo:String){
        this.tipo = tipo;
        return this.http.get<Marca[]>(this.urlTipo + tipo + "/marcas.json").pipe(
            tap(console.log)
        );
    }

    buscarModelos(modelos:number){
        this.modelo = modelos;
        return this.http.get<Modelo[]>(this.urlTipo + this.tipo + "/veiculos/" + modelos + ".json").pipe(
            tap(console.log)
        );
    }

    buscarAno(ano:number){
        this.ano = ano;
        return this.http.get<Ano[]>(this.urlTipo + this.tipo + "/veiculo/" + this.modelo + "/" + ano + ".json").pipe(
            tap(console.log)
        );
    }

    buscarVeiculo(data:string){
        return this.http.get<Veiculo[]>(this.urlTipo + this.tipo + "/veiculo/" + this.modelo + "/" + this.ano + "/" + data + ".json").pipe(
            tap(console.log)
        );
    }
}