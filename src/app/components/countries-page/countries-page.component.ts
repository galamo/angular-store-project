import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent implements OnInit {
  public countries: Array<any>
  constructor(private countriesService: CountriesService) {
    this.countries = [];
  }

  async ngOnInit() {
    const result = await this.countriesService.getCountries();
    this.countries = result as Array<any>;
  }

}
