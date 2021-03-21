import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    console.log(value)
    const [discountValue] = args;
    return `on Sale: ${value - (value * discountValue)}`;
  }

}
