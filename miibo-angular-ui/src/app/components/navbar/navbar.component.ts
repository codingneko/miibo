import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public randomArray: any[] = [1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit(): void {}
}
