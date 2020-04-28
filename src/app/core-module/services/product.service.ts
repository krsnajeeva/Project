import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel, LogModel } from './ProductModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint = environment;

  constructor(private http: HttpClient) { }

  baseurl: string = this.endPoint.url;

  getAllPrograms() {
    return this.http.get<ProductModel[]>(`${this.baseurl}`);
  }

  getHelpdesk() {
    return this.http.get<ProductModel[]>(`${this.baseurl}/all`);
  }

  getLastId() {
    return this.http.get<ProductModel[]>(`${this.baseurl}/id`);
  }

  getLogbyId(id) {
    return this.http.get<ProductModel[]>(`${this.baseurl}/log/${id}`);
  }

  getHelpdeskId(id) {
    return this.http.get<ProductModel[]>(`${this.baseurl}/one/id/${id}`);

    // return this.http.get<ProductModel>(this.baseurl + '/one' + '/id' + '/' + id);
  }

  addHelpdesk(product: ProductModel) {
    return this.http.post(this.baseurl + '/post', product);
  }

  addHelpdeskLog(product: LogModel) {
    return this.http.post(this.baseurl + '/createlog', product);
  }

  deleteHelpdesk(product: ProductModel) {
    return this.http.delete(this.baseurl + '/delete' + '/' + '/id' + product.id);
  }

  updateHelpdesk(product: ProductModel) {
    return this.http.put(this.baseurl + '/post' + '/id' + '/' + product.id, product);
  }

}
