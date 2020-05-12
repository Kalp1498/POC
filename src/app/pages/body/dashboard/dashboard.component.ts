import { Component, OnInit } from '@angular/core';

import { opacityAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [opacityAnimation]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  opacityAnimationValue: string = 'loading';

  ngOnInit() {
    setTimeout(() => {
      this.opacityAnimationValue = 'loaded';
    }, 800);
  }

}
