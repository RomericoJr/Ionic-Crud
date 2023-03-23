import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  counter: number =1;
  constructor() { }
  carrito!: any[] ;
  ngOnInit() {
    this.getCarrito();
  }

  getCarrito(){
    const carritoString = localStorage.getItem('carrito');
    if(carritoString !== null){
      this.carrito = JSON.parse(carritoString);
      console.log('carrito',this.carrito);
    }
  };

  decrement(){
    if(this.counter > 1){
      this.counter--;
    }
  }
  increment(){
    this.counter++;

  }

}
