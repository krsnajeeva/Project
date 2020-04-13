import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseurl: string = "https://restcountries.eu/rest/v2/name/united";

  getAllProducts(){
    return this.http.get<ProductModel[]>(this.baseurl);
  }
}
