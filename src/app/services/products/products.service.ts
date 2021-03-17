import { Injectable } from '@angular/core';
import *  as data from '../../products.json';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productStore: Array<any>
  constructor() {
    console.log("Using this service")
    this.productStore = (data as any).default;
  }

  getProductStore() {
    return this.productStore;
  }

  deleteProduct(productId: string) {
    const index = this.productStore.findIndex(p => p.title === productId)
    if (index === -1) return;
    this.productStore.splice(index, 1)
  }
}
