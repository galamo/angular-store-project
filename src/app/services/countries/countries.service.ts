import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const countriesUrl = "https://restcountries.eu/rest/v2/all"
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpService: HttpClient) {

  }
  getCountries() {
    return this.httpService.get(countriesUrl).toPromise();
  }
}
