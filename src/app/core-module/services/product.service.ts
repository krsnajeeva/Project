import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:1337/api/name";

  getAllPrograms() {
    return this.http.get<ProductModel[]>(`${this.baseurl}`);
  }

  getHelpdesk() {
    return this.http.get<ProductModel[]>(`${this.baseurl}/all`);
  }
  //------------------------------------------------------------------
  getHelpdeskId(id) {
    return this.http.get<ProductModel[]>(`${this.baseurl}/one/id/${id}`);

    // return this.http.get<ProductModel>(this.baseurl + '/one' + '/id' + '/' + id);
  }

  addHelpdesk(product: ProductModel) {
    return this.http.post(this.baseurl + '/post', product);
  }

  deleteHelpdesk(product: ProductModel) {
    return this.http.delete(this.baseurl + '/delete' + '/' + '/id' + product.id);
  }

  updateHelpdesk(product: ProductModel) {
    return this.http.delete(this.baseurl + '/one' + '/' + '/id' + product.id);
  }

}
