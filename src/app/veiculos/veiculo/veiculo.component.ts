import { Component, OnInit } from '@angular/core';
import { Ano } from '../ano';
import { Marca } from '../marca';
import { Modelo } from '../modelo';
import { Veiculo } from '../veiculo';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss'],
})
export class VeiculoComponent implements OnInit {

  marcas: Marca[];
  modelos: Modelo[];
  anos: Ano[];
  veiculo: Veiculo;
  tipo: string;
  isEnable: any;
  disableMarca: boolean;
  disableModelo: boolean;
  disableAno: boolean;
  valor: string;
  tipoVeiculo: string;
  marcaVeiculo: string;
  modeloVeiculo: string;
  anoVeiculo: string;




  constructor(private service: VeiculosService) {
    this.disableMarca = true;
    this.disableModelo = true;
    this.disableAno = true;
  }

  ngOnInit() {
  }

  async buscarMarcas(tipoVeiculo: string) {
    this.limpar("marca");
    this.service.buscarMarcas(tipoVeiculo).subscribe(dados => this.marcas = dados);
    this.disableMarca = false;
  }

  async buscarModelos(marcaVeiculo: number) {
    this.limpar("modelo");
    this.service.buscarModelos(marcaVeiculo).subscribe(dados => this.modelos = dados);
    this.disableModelo = false;

  }

  async buscarAno(modelo: number) {
    this.limpar("ano");
    this.service.buscarAno(modelo).subscribe(dados => this.anos = dados);
    this.disableAno = false;

  }

  async buscarVeiculo(ano: string) {
    this.service.buscarVeiculo(ano).subscribe(dados => {
      this.veiculo = dados
      console.log({ dados, veiculo: this.veiculo })
    });
  }

  limpar(campo?: string) {
    switch (campo) {
      case "marca":
        this.marcaVeiculo = null;
        this.modeloVeiculo = null;
        this.anoVeiculo = null;
        this.marcas = null;
        this.modelos = null;
        this.anos = null;
        this.veiculo = null;
        this.disableMarca = true;
        this.disableModelo = true;
        this.disableAno = true;
        break;
      case "modelo":
        this.modeloVeiculo = null;
        this.anoVeiculo = null;
        this.modelos = null;
        this.anos = null;
        this.veiculo = null;
        this.disableModelo = true;
        this.disableAno = true;
        break;
      case "ano":
        this.anoVeiculo = null;
        this.anos = null;
        this.veiculo = null;
        this.disableAno = true;
        break;
      default:
        this.tipoVeiculo = "";
        this.marcaVeiculo = null;
        this.modeloVeiculo = null;
        this.anoVeiculo = null;
        this.marcas = null;
        this.modelos = null;
        this.anos = null;
        this.veiculo = null;
        this.disableMarca = true;
        this.disableModelo = true;
        this.disableAno = true;
        break;
    }
  }

}
