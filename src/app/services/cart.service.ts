import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  cartItem:any = [];
  ItemCol:any;
  API_URL:string='http://localhost:3000/items';
  
  fetch():Observable<any>{
    return this.http.get(this.API_URL);
     
  }

  fetchById(id){
    return this.ItemCol[id];
  }

  private cartValue = new Subject<number>();
  count$ = this.cartValue.asObservable();
  updatecart(item){
    this.cartItem.push(item);
    this.cartValue.next(this.cartItem.length);
    console.log(this.cartItem);
  }
  
  private Value = new BehaviorSubject<any>(null);
  search$ = this.Value.asObservable();
  showSearch(value){
    this.Value.next(value);

  }
  cartItems(){
    return this.cartItem;
  }
}
