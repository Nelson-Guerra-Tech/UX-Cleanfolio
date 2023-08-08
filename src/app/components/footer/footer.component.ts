import { Component } from '@angular/core';
import { NavbarDataMocks } from 'src/app/data/navbar/navbar.mocks';
import { Navbar } from 'src/app/models/navbar/navbar.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  content: Navbar = NavbarDataMocks;


}
