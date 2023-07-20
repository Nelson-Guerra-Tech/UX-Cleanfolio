import { Component } from '@angular/core';
import { NavbarDataMocks } from 'src/app/data/navbar/navbar.mocks';
import { Navbar } from 'src/app/models/navbar/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  content: Navbar = NavbarDataMocks;

}
