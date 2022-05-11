import { Component, OnInit } from '@angular/core';
import { CatfactsService } from './shared/catfacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  catfact: string = '';

  constructor(private catFactService: CatfactsService) {}

  ngOnInit(): void {
    this.catFactService
      .getCatFact()
      .subscribe((fact) => (this.catfact = fact.fact));
  }
}
