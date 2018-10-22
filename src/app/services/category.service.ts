import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@interfaces/interfaces';

@Injectable()
export class CategoryService {

  categories: Array<Category>;

  constructor(public http: HttpClient) {}

  public getCategories() {
    return this.http.get('/assets/data/categories.json').toPromise().then(
        (data: {categories: Array<Category>}) => {
          this.categories = [ ...data.categories ]
          return this.categories;
        }
      );
  }

}
