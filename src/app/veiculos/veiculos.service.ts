import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Marca } from './marca';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class VeiculosService{
    private readonly urlTipo = 'http://fipeapi.appspot.com/api/1/';

    constructor(private http: HttpClient){
    }

    buscarMarcas(tipo:String){
        return this.http.get<Marca[]>(this.urlTipo + tipo + "/marcas.json").pipe(
            tap(console.log)
        );
    }

    buscarModelos(modelos:number){
        console.log(modelos);
    }
}