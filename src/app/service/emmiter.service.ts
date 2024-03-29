import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmmiterService {

  getNewProduct: EventEmitter<any> = new EventEmitter();
  getNewFavorite: EventEmitter<any> = new EventEmitter();

  constructor() { }

  setNewProduct(product: any) {
    this.getNewProduct.emit(product);
  }

  setNewFavorite(favorite: any) {
    this.getNewProduct.emit(favorite);
  }
}
