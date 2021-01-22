import { Component, OnInit } from '@angular/core';
import { Marca } from '../marca';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss'],
})
export class VeiculoComponent implements OnInit {

  veiculos: Marca[];
  tipo:string;
  isEnable: any;
  disableMarcas:boolean;


  constructor(private service: VeiculosService) { 
    this.disableMarcas = true;
  }

  ngOnInit() {
  }

  async buscarMarcas(tipo: string) {
    console.log(tipo, this.disableMarcas);
    this.service.buscarMarcas(tipo).subscribe(dados => this.veiculos = dados);
    this.disableMarcas = false;
  }

  async buscarModelos(tipo: number) {
    console.log(tipo);
  }

}
