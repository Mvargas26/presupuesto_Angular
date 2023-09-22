import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  nombreGasto:String;
  cantidad:number;
  formularioIncorrecto:boolean;
  textIncorrecto:string;

  constructor(private _presupuestoService:PresupuestoService){
    this.nombreGasto="";
    this.cantidad=0;
    this.formularioIncorrecto=false;
    this.textIncorrecto='';
  }

  agrergarGasto(){
    //validamos que la cantidad no sea mayor al presupuesto
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto=true;
      this.textIncorrecto='Cantidad ingresada mayor al presupuesto Disponible';
      return;
    }

    if (this.nombreGasto==='' || this.cantidad <=0) {
      this.formularioIncorrecto=true;
      this.textIncorrecto='Nombre,gasto o Cantidad Incorrecta';
    }else{
      this.formularioIncorrecto=false;

      //creamos objeto
      const GASTO ={
        nombre:this.nombreGasto,
        cantidad:this.cantidad
      }

      //enviamos a los suscriptores el obj via subjet
      this._presupuestoService.agregarGasto(GASTO);

      //resetear from
      this.formularioIncorrecto=false;
      this.nombreGasto="";
      this.cantidad =0;

    }
  }


}
