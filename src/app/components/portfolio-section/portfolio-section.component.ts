import { Component } from '@angular/core';
import { portfolioDataMocks } from 'src/app/data/portfolio/portfolio.data.mocks';
import { Portfolio } from 'src/app/models/portfolio/portfolio.interface';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent {
  portfolio: Portfolio[] = portfolioDataMocks;

}
