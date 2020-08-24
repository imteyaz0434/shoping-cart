import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCalulater'
})
export class PriceCalulaterPipe implements PipeTransform {

  transform(price: number, discount:number ): unknown {
    let saleprice = price - discount;
    let dis =  price-saleprice;
    
    return (dis / price  *100).toFixed(0);
  }

}
