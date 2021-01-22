import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VeiculoComponent} from './veiculo/veiculo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VeiculoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[VeiculoComponent]
})
export class VeiculosModule { }
