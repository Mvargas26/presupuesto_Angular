import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {

  cantidad:number;
  cantidadIncorrecta:boolean;

  constructor(private _presupuestoService: PresupuestoService,
              private router:Router){
    this.cantidad=0;
    this.cantidadIncorrecta=false;
  }

  agregar(){
    if (this.cantidad > 0) {
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;// le estamos seteando desde aqui al servicio la variable presupuesto
      this._presupuestoService.restante=this.cantidad;
      this.router.navigate(['/gastos'])//hay que ponerle la barra para que sea http://localhost:4200/gastos, ese gastos viene de las rutas
    }else{
      this.cantidadIncorrecta = true;
    }
  }

}
