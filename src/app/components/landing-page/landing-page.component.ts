import { Component } from '@angular/core';
import { landingPageDataMocks } from 'src/app/data/landing-page/landing-page.data.mocks';
import { LandingPage } from 'src/app/models/landing-page/landing-page.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  content: LandingPage = landingPageDataMocks;

}
