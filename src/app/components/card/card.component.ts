import { Component, OnInit, Input } from '@angular/core';
import { FavoritosService } from '../../service/favoritos.service';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() card: any = [];
  favoritos: any[] = [];

  constructor(
    private favService : FavoritosService,
    private carrService : CarritoService
  ) { }

  ngOnInit() {}

  addFavorito(){
    this.favService.addFavorito(this.card);
  }

  addCarrito(){
    this.carrService.addCarrito(this.card);
  }
  // addFavorito(){
  //   //crea un arreglo vacio
  //   let favoritos: any[] = [];
  // const favoritosString = localStorage.getItem('favoritos');

  //   //si el localstorage tiene datos
  //   if(favoritosString !== null){
  //     //guarda los datos del localstorage en la variable favoritos
  //     favoritos = JSON.parse(favoritosString);
  //   }
  //   //agrega los datos del producto al arreglo favoritos
  //   favoritos.push(this.card);
  //   //guarda los datos en el localstorage
  //   localStorage.setItem('favoritos', JSON.stringify(favoritos));
  // }




  // addCarrito(product: any){
  //   //crea un arreglo vacio
  //   let carrito: any[] = [];
  // const carritoString = localStorage.getItem('carrito');

  //   //si el localstorage tiene datos
  //   if(carritoString !== null){
  //     //guarda los datos del localstorage en la variable favoritos
  //     carrito = JSON.parse(carritoString);
  //   }
  //   //agrega los datos del producto al arreglo favoritos
  //   carrito.push(this.card);
  //   //guarda los datos en el localstorage
  //   localStorage.setItem('carrito', JSON.stringify(carrito));

  // }


  // addFavorito(){
  //   console.log(this.card);
  //   localStorage.setItem('favorito', JSON.stringify(this.card));
  // }

}
