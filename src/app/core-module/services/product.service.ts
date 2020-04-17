import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:1337/api";

  getAllProducts(){
    return this.http.get<ProductModel[]>(`${this.baseurl}/name`);
  }
}
