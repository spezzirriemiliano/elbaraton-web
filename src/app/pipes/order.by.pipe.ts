import { Pipe } from "@angular/core";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe {
  transform(array: Array<any>, field: string, reverse = false): Array<any> {
    array && array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return reverse ? 1 : -1;
      } else if (a[field] > b[field]) {
        return reverse ? -1 : 1;;
      } else {
        return 0;
      }
    });
    return array;
  }
}