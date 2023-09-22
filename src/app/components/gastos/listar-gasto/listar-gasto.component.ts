import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {
  //*Variables
  subscription:Subscription;
  presupuesto:number;
  restante:number;
  listagastos:any[]=[];
  sumaTotalGastos:number;
  

    constructor(private _presupuestoService:PresupuestoService){
      this.presupuesto=0;
      this.restante=0;
      this.sumaTotalGastos=0;
      //aqui suscribimos este componente hermano para pasarnos datos desde ingresarGasto
      this.subscription =this._presupuestoService.getGastos().subscribe(data=>{
        //console.log(data);
        this.restante= this.restante - data.cantidad;
        this.listagastos.push(data);
        this.sumaTotalGastos+=data.cantidad;
      })
    }

    ngOnInit():void{
      this.presupuesto = this._presupuestoService.presupuesto;
      this.restante = this._presupuestoService.restante;
    }

      //cuandoe ste componente se destruye, borramos la subscripcion
    ngOnDestroy():void{
      this.subscription.unsubscribe();
    }

    aplicarColorrestante(){
      if (this.presupuesto /4 > this.restante) {
        return 'alert alert-danger';
      }
      else if (this.presupuesto /2 > this.restante) {
        return 'alert alert-warning';
      }else{
        return 'alert alert-secondary';
      }
    }

    
}//fin class
