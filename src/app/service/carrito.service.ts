import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  addCarrito(product:any){
    //crea un arreglo vacio
    let carrito: any[] = [];
  const carritoString = localStorage.getItem('carrito');

    //si el localstorage tiene datos
    if(carritoString !== null){
      //guarda los datos del localstorage en la variable favoritos
      carrito = JSON.parse(carritoString);
    }
    //agrega los datos del producto al arreglo favoritos
    carrito.push(product);
    //guarda los datos en el localstorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

  }
}
