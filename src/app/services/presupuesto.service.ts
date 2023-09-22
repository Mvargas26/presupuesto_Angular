import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto:number;
  restante:number;
  private gastos$ = new Subject<any>(); //esto es un obserbale, sirve para pasar datos entre componentes hermanos

  constructor() { 
    this.presupuesto=0;
    this.restante=0;
  }

    //este metodo se ejecuta en el componente: IngresarGastoComponent
  agregarGasto(gasto:any){
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto);//con este cada que se ejecute el metod, los que estan suscritos, reciben el valor tambien
  }

  getGastos():Observable<any>{
    return this.gastos$.asObservable();
  }
}//fn class
