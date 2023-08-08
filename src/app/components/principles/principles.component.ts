import { Component } from '@angular/core';
import { principlesDataMocks } from 'src/app/data/principles/principles.data.mocks';
import { Principles } from 'src/app/models/principles/principles.interface';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent {
  content: Principles[] = principlesDataMocks;
  sectionTitle: string = 'Principles'

}
