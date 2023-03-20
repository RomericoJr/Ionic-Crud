import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product, categoria } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  laravelApi = 'http://localhost:8000/api/';

  constructor( private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.laravelApi + 'productos');
  }

  getproductsMore(){
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


  getMarca(){
    return this.http.get(this.laravelApi + 'marcas');
  }

  getCategoria(){
    return this.http.get(this.laravelApi + 'categorias');
  }

  getCategoriaById(){
    return this.http.get(this.laravelApi + 'categorias');
  }


  createCategoria(categoria: categoria){
    return this.http.post(this.laravelApi + 'newCategoria', categoria);
  }

  updateCategoria(categoria: categoria){
    return this.http.put(this.laravelApi + 'updateCategorias/' + categoria.id, categoria);
  }

  deleteCategoria(id: number){
    return this.http.delete(this.laravelApi + 'deleteCategorias/' + id);
  }



}

