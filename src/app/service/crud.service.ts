import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  laravelApi = 'http://localhost:8000/api/';

  constructor( private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.laravelApi + 'productos');
  }

  getProductById(id: number){
    return this.http.get(this.laravelApi + 'products/' + id);
  }

  createProduct(product: product){
    return this.http.post(this.laravelApi + 'newProduct',  product);
  }

  updateProduct(product: any){
    return this.http.put(this.laravelApi + 'updateProducts/' + product.id, product);
  }

  deleteProduct(id: number){
    return this.http.delete(this.laravelApi + 'deleteProducts/' + id);
  }
}

